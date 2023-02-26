import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let accessKeyId;
  let secretAccessKey;
  let region;
  let cfSecret;

  if (process.env.AWS_SES_ACCESS_KEY_ID) {
    accessKeyId = process.env.AWS_SES_ACCESS_KEY_ID;
  } else {
    throw new Error('AWS_ACCESS_KEY is not set');
  }

  if (process.env.AWS_SES_SECRET_ACCESS_KEY) {
    secretAccessKey = process.env.AWS_SES_SECRET_ACCESS_KEY;
  } else {
    throw new Error('AWS_SES_SECRET_ACCESS_KEY is not set');
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
    port: 465,
    secure: true, // upgrade later with STARTTLS
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

  if (outcome.success) {
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our message');
          resolve(success);
        }
      });
    });

    const mailData = {
      from: '"The Wilson Net" <brent@thewilsonnet.com>',
      to: 'brent@thewilsonnet.com',
      replyTo: email,
      subject: 'Contact Form: ' + subject,
      html: `<p>Name: ${name}</p>
            <p>${message}</p>`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    return res.status(200).json({ error: '' });
  } else {
    return res.status(result.status).json(outcome);
  }
};
