import { arrayBufferToBase64, base64ToArrayBuffer } from "./exchange";

export const generateKey = async () => {
  try {
    const key = await window.crypto.subtle.generateKey(
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"]
    );

    const exportedKey = await window.crypto.subtle.exportKey("raw", key);
    return arrayBufferToBase64(exportedKey);
  } catch {
    throw new Error("Failed to generate key");
  }
};

async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passwordData = encoder.encode(password);
  const keyMaterial = await window.crypto.subtle.importKey("raw", passwordData, "PBKDF2", false, [
    "deriveBits",
    "deriveKey",
  ]);
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 500000,
      hash: "SHA-256",
    },
    keyMaterial,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"]
  );
}

export const encryptAES = async (text: string, aesKey: string, password?: string | null) => {
  try {
    if (password) {
      const salt = window.crypto.getRandomValues(new Uint8Array(16));
      const key = await deriveKey(password, salt);
      const iv = window.crypto.getRandomValues(new Uint8Array(12));

      const encoded = new TextEncoder().encode(text);
      const encrypted = await window.crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        key,
        encoded
      );

      const encryptedArray = new Uint8Array(encrypted);
      const result = new Uint8Array(salt.length + iv.length + encryptedArray.length);
      result.set(salt);
      result.set(iv, salt.length);
      result.set(encryptedArray, salt.length + iv.length);

      const aesKeyBuffer = base64ToArrayBuffer(aesKey);
      const aesKeyMaterial = await window.crypto.subtle.importKey(
        "raw",
        aesKeyBuffer,
        "AES-GCM",
        false,
        ["encrypt"]
      );

      const aesIv = window.crypto.getRandomValues(new Uint8Array(12));
      const finalEncrypted = await window.crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: aesIv,
        },
        aesKeyMaterial,
        result
      );

      const finalResult = new Uint8Array(aesIv.length + finalEncrypted.byteLength);
      finalResult.set(aesIv);
      finalResult.set(new Uint8Array(finalEncrypted), aesIv.length);

      return arrayBufferToBase64(finalResult.buffer);
    } else {
      const aesKeyBuffer = base64ToArrayBuffer(aesKey);
      const aesKeyMaterial = await window.crypto.subtle.importKey(
        "raw",
        aesKeyBuffer,
        "AES-GCM",
        false,
        ["encrypt"]
      );

      const encoded = new TextEncoder().encode(text);
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const encrypted = await window.crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        aesKeyMaterial,
        encoded
      );

      const result = new Uint8Array(iv.length + encrypted.byteLength);
      result.set(iv);
      result.set(new Uint8Array(encrypted), iv.length);

      return arrayBufferToBase64(result.buffer);
    }
  } catch {
    throw new Error("Failed to encrypt");
  }
};

export const decryptAES = async (
  encryptedText: string,
  aesKey: string,
  password?: string | null
) => {
  try {
    if (password) {
      const aesKeyBuffer = base64ToArrayBuffer(aesKey);
      const aesKeyMaterial = await window.crypto.subtle.importKey(
        "raw",
        aesKeyBuffer,
        "AES-GCM",
        false,
        ["decrypt"]
      );

      const encrypted = base64ToArrayBuffer(encryptedText);
      const encryptedArray = new Uint8Array(encrypted);

      const aesIv = encryptedArray.slice(0, 12);
      const encryptedData = encryptedArray.slice(12);

      const decrypted = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: aesIv,
        },
        aesKeyMaterial,
        encryptedData
      );

      const decryptedArray = new Uint8Array(decrypted);
      const salt = decryptedArray.slice(0, 16);
      const iv = decryptedArray.slice(16, 28);
      const data = decryptedArray.slice(28);

      const key = await deriveKey(password, salt);
      const finalDecrypted = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        key,
        data
      );

      return new TextDecoder().decode(finalDecrypted);
    } else {
      const aesKeyBuffer = base64ToArrayBuffer(aesKey);
      const aesKeyMaterial = await window.crypto.subtle.importKey(
        "raw",
        aesKeyBuffer,
        "AES-GCM",
        false,
        ["decrypt"]
      );

      const encrypted = base64ToArrayBuffer(encryptedText);
      const encryptedArray = new Uint8Array(encrypted);

      const iv = encryptedArray.slice(0, 12);
      const encryptedData = encryptedArray.slice(12);

      const decrypted = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        aesKeyMaterial,
        encryptedData
      );

      return new TextDecoder().decode(decrypted);
    }
  } catch {
    throw new Error("Failed to decrypt");
  }
};
