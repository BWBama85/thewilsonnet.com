import nodemailer, {
  SendMailOptions,
  SentMessageInfo,
  Transporter,
} from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

function getEnvVariable(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

async function verifyTransporter(
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>
): Promise<SMTPTransport> {
  return new Promise((resolve, reject) => {
    transporter.verify((error) => {
      if (error) {
        console.error(error);
        reject(new Error('Transporter verification failed'));
      } else {
        close();
      }
    });
  });
}

async function sendMail(
  transporter: Transporter<SentMessageInfo>,
  mailData: SendMailOptions
) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(new Error('Sending mail failed'));
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const accessKeyId = getEnvVariable('AWS_SES_ACCESS_KEY_ID');
    const secretAccessKey = getEnvVariable('AWS_SES_SECRET_ACCESS_KEY');
    const region = getEnvVariable('AWS_SES_REGION');
    const cfSecret = getEnvVariable('CLOUDFLARE_TURNSTILE_SECRET_KEY');
    const smtpPort = getEnvVariable('SMTP_PORT');

    const { name, email, subject, message, token } = req.body;
    const ip = req.headers['x-forwarded-for'] as string;

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

    const transporter = nodemailer.createTransport({
      host: region,
      port: Number(smtpPort),
      secure: true,
      auth: {
        user: accessKeyId,
        pass: secretAccessKey,
      },
    });

    const formData = new FormData();
    formData.append('secret', cfSecret);
    formData.append('response', token);
    formData.append('remoteip', ip);

    const result = await fetch(url, {
      body: formData,
      method: 'POST',
    });

    const outcome = await result.json();

    if (!outcome.success) {
      return res.status(result.status).json(outcome);
    }

    await verifyTransporter(transporter);

    const mailData = {
      from: '"The Wilson Net" <brent@thewilsonnet.com>',
      to: 'brent@thewilsonnet.com',
      replyTo: email,
      subject: 'Contact Form: ' + subject,
      html: `<p>Name: ${name}</p>
            <p>${message}</p>`,
    };

    await sendMail(transporter, mailData);

    return res.status(200).json({ success: 'Email was sent' });
  } catch (err: unknown) {
    console.error(err);
  }
};
