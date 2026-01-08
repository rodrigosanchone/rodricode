import { NextResponse } from "next/server";
import { recaptchaConfig } from "../../../lib/environmen";
export async function POST(req: Request) {
  const { token } = await req.json();

  const secret = recaptchaConfig.SITE_KEY; // tu clave secreta en .env.local

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await response.json();

  if (!data.success || data.score < 0.5) {
    return NextResponse.json(
      { success: false, score: data.score },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, score: data.score });
}
