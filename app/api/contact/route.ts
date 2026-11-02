import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: NextRequest) {
  try {
    const { name, email, service, message, _gotcha } = await request.json();

    // Honeypot: silently ignore automated submissions.
    if (typeof _gotcha === "string" && _gotcha.trim()) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim() ||
      name.length > 150 ||
      email.length > 254 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please provide valid contact details." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      console.error("Gmail SMTP configuration is missing.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"JARVIS Portfolio" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email.trim(),
      subject: "New Portfolio Inquiry",
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Service: ${typeof service === "string" ? service.slice(0, 150) : "Not specified"}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again." },
      { status: 500 }
    );
  }
}

