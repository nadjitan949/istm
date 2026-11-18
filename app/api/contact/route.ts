import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[API Contact] Message reçu:", body);
    // TODO: Intégrer l'envoi d'e-mail (Resend, SendGrid, etc.)
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }
}