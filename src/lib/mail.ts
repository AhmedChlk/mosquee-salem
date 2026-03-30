// Module d'envoi d'emails transactionnels

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export const sendTransactionEmail = async (payload: EmailPayload) => {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@mosquee-salem.fr";
  
  // RÈGLE CRITIQUE : Toujours inclure l'administratrice en copie cachée (BCC)
  // ou lui envoyer une notification directe pour le contrôle qualité.
  const emailData = {
    from: "contact@mosquee-salem.fr",
    to: payload.to,
    bcc: ADMIN_EMAIL, // Contrôle qualité strict
    subject: payload.subject,
    html: payload.html,
  };

  // Simulation d'envoi via un provider comme Resend ou SendGrid
  console.log("=== EMAIL TRANSACTIONNEL ENVOYÉ ===");
  console.log(`À: ${emailData.to}`);
  console.log(`BCC (Admin): ${emailData.bcc}`);
  console.log(`Sujet: ${emailData.subject}`);
  console.log("===================================");

  return { success: true, id: "mock_email_id_123" };
};
