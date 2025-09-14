import nodemailer from "nodemailer";
const ownerEmailTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 8px; }
    h2 { color: #333; }
    p { color: #555; line-height: 1.5; }
    .details { background-color: #f1f1f1; padding: 10px; border-radius: 5px; }
    blockquote { margin: 10px 0; padding-left: 15px; border-left: 4px solid #ccc; color: #333; }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <blockquote>${message}</blockquote>
  </div>
</body>
</html>
`;
const senderEmailTemplate = (name: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; background-color: #f5f8fa; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; text-align: center; }
    h2 { color: #333; }
    p { color: #555; line-height: 1.5; }
    blockquote { margin: 10px 0; padding-left: 15px; border-left: 4px solid #0070f3; color: #333; }
    .footer { margin-top: 20px; font-size: 12px; color: #888; }
    .btn { display: inline-block; padding: 10px 20px; margin-top: 10px; background-color: #0070f3; color: #fff; text-decoration: none; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Hi ${name},</h2>
    <p>Thank you for reaching out! We received your message:</p>
    <blockquote>${message}</blockquote>
    <p>We'll get back to you as soon as possible.</p>
    <p class="footer">— Jeganathan</p>
  </div>
</body>
</html>
`;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // Send email to owner
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: ownerEmailTemplate(name, email, message),
    });

    // Send confirmation to sender
    await transporter.sendMail({
      from: `"Jeganathan" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message!",
      html: senderEmailTemplate(name, message),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
