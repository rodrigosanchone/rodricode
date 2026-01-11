import { NextResponse } from "next/server";
import { recaptchaConfig } from "@/lib/environmen";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Token faltante" },
        { status: 400 }
      );
    }

    const secret = recaptchaConfig.SECRET_KEY;
    console.log("Token recibido:", token);
    console.log("Usando SECRET_KEY:", secret);

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const data = await response.json();
    /*     console.log("Respuesta de Google:", data); */

    const threshold = Number(process.env.RECAPTCHA_THRESHOLD ?? 0.3);

    if (!data.success || (data.score !== undefined && data.score < threshold)) {
      return NextResponse.json(
        {
          success: false,
          score: data.score ?? null,
          error: data["error-codes"] ?? ["validación fallida"],
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, score: data.score });
  } catch (error) {
    console.error("❌ Error en verify-recaptcha:", error);
    return NextResponse.json(
      { success: false, error: "Error interno en el servidor" },
      { status: 500 }
    );
  }
}
