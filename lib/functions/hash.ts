export const hash = async (text: string) => {
  return crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)).then((buffer) => {
    return Array.from(new Uint8Array(buffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  });
};
