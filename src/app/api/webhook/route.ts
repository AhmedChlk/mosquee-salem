import { NextResponse } from "next/server";
import { sendTransactionEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // Simulation de traitement de webhook (ex: Stripe)
    if (payload.event === "donation.success") {
      await sendTransactionEmail({
        to: payload.data.email,
        subject: "Confirmation de votre don - Mosquée Al-Salem",
        html: `
          <div style="font-family: sans-serif; color: #1a1a1a;">
            <h2 style="font-family: serif; color: #b39759;">Merci pour votre soutien, ${payload.data.name}</h2>
            <p>Votre don de ${payload.data.amount}€ a bien été reçu.</p>
            <p>Que la paix soit sur vous.</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ status: "success", message: "Webhook processed" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ status: "error", message: "Webhook processing failed" }, { status: 400 });
  }
}
