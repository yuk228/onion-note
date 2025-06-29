export async function verifyToken(token: string) {
  try {
    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY as string,
          response: token,
        }),
      }
    );

    const data = await verificationResponse.json();

    if (!verificationResponse.ok || !data.success) {
      throw new Error("Failed to verify token");
    }

    return await verificationResponse.json();
  } catch {
    throw new Error("Failed to verify token");
  }
}
