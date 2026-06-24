"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const budget = formData.get("budget") as string;
  const timeline = formData.get("timeline") as string;
  const projectTypes = formData.getAll("projectType") as string[];
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and project details.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; padding: 24px; background: #f4f4f4; color: #111; }
  .card { max-width: 560px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; }
  .header { background: #111; padding: 28px 32px; }
  .header h1 { color: #fff; font-size: 17px; margin: 0; font-weight: 600; }
  .header p { color: #888; font-size: 12px; margin: 5px 0 0; }
  .body { padding: 32px; }
  .row { margin-bottom: 22px; }
  .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #aaa; margin-bottom: 5px; }
  .value { font-size: 15px; color: #111; }
  .value a { color: #111; }
  .tag { display: inline-block; background: #f0f0f0; border-radius: 20px; padding: 3px 11px; font-size: 12px; margin: 2px 2px 2px 0; color: #555; }
  .message-box { background: #f7f7f7; border-left: 3px solid #111; border-radius: 0 8px 8px 0; padding: 14px 16px; font-size: 14px; line-height: 1.65; color: #333; white-space: pre-wrap; }
  .reply-btn { display: inline-block; margin-top: 28px; background: #111; color: #fff !important; text-decoration: none; padding: 11px 22px; border-radius: 6px; font-size: 13px; font-weight: 600; }
  .footer { padding: 16px 32px; border-top: 1px solid #eee; font-size: 11px; color: #bbb; }
</style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Enquiry — Shazsync</h1>
      <p>Someone filled out the contact form on your website</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="row">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      ${budget ? `<div class="row"><div class="label">Budget</div><div class="value">${budget}</div></div>` : ""}
      ${timeline ? `<div class="row"><div class="label">Timeline</div><div class="value">${timeline}</div></div>` : ""}
      ${
        projectTypes.length > 0
          ? `<div class="row">
               <div class="label">Services needed</div>
               <div class="value" style="margin-top:6px">
                 ${projectTypes.map((t) => `<span class="tag">${t}</span>`).join("")}
               </div>
             </div>`
          : ""
      }
      <div class="row">
        <div class="label">Project details</div>
        <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>
      <a href="mailto:${email}?subject=Re: Your enquiry" class="reply-btn">Reply to ${name} →</a>
    </div>
    <div class="footer">Sent via shazsync.com contact form</div>
  </div>
</body>
</html>`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Shazsync Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html,
    });

    return {
      status: "success",
      message: "Message sent! We’ll be in touch within 24 hours.",
    };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      status: "error",
      message:
        "Something went wrong. Please email us directly at shazsync@gmail.com",
    };
  }
}
