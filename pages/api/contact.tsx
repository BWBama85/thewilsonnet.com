import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let accessKeyId;
  let secretAccessKey;
  let region;
  let cfSecret;

  if (process.env.AWS_ACCESS_KEY_ID) {
    accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  } else {
    throw new Error('AWS_ACCESS_KEY is not set');
  }

  if (process.env.AWS_SECRET_ACCESS_KEY) {
    secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  } else {
    throw new Error('AWS_SECRET_ACCESS_KEY is not set');
  }

  if (process.env.AWS_SES_REGION) {
    region = process.env.AWS_SES_REGION;
  } else {
    throw new Error('AWS_SES_REGION is not set');
  }

  if (process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY) {
    cfSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  } else {
    throw new Error('Cloudflare Turnstile Secret Key Not Set');
  }

  const { name, email, subject, message, token } = req.body;
  const ip = req.headers['x-forwarded-for'] as string;

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  const transporter = nodemailer.createTransport({
    host: region,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: accessKeyId,
      pass: secretAccessKey,
    },
  });

  const formData = new FormData();
  formData.append('secret', cfSecret);
  formData.append('response', token);
  formData.append('remoteip', ip);
  console.log(formData);

  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  });

  const outcome = await result.json();
  console.log(outcome);

  if (outcome.success) {
    try {
      transporter.sendMail({
        from: 'brent@thewilsonnet.com',
        to: 'brent@thewilsonnet.com',
        replyTo: email,
        subject: 'Contact Form: ' + subject,
        html: `<p>Name: ${name}</p>
              <p>${message}</p>`,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error });
      }
    }
    return res.status(200).json({ error: '' });
  } else {
    return res.status(result.status).json(outcome);
  }
};
