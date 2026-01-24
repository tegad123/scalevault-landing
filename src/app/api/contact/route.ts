import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, smsConsent } = await request.json();

    // Validate input
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required" },
        { status: 400 }
      );
    }

    if (!smsConsent) {
      return NextResponse.json(
        { error: "SMS consent is required" },
        { status: 400 }
      );
    }

    // Create transporter using Gmail/Google Workspace SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "tega@scalevault.ai",
      replyTo: email,
      subject: `New SMS Opt-in from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F59E0B;">New SMS Opt-in Submission</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>SMS Consent:</strong> <span style="color: #22c55e;">✓ Yes, opted in</span></p>
          <hr style="border: 1px solid #eee; margin-top: 20px;" />
          <p style="color: #666; font-size: 12px;">
            This submission was sent from the Scale Vault AI contact form.
          </p>
        </div>
      `,
      text: `
New SMS Opt-in Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
SMS Consent: Yes, opted in

---
This submission was sent from the Scale Vault AI contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error details:", errorMessage);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later.", details: errorMessage },
      { status: 500 }
    );
  }
}
