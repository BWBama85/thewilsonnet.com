'use client';
import { FormEvent, useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import {
  FaCheckCircle,
  FaWindowClose,
  FaExclamationCircle,
} from 'react-icons/fa';

export default function Contact() {
  let cfSiteKey: string;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState<boolean | null>(null);

  if (process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY) {
    cfSiteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
  } else {
    throw new Error('Cloudflare Turnstile Site Key Not Set');
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get('cf-turnstile-response') as string;

    const data = {
      name,
      email,
      subject,
      message,
      token,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setSubmitted(false);
      }
    });
  };

  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 lg:relative lg:mx-0 lg:w-full">
      <h1>Contact</h1>
      <div className="divider"></div>
      <p>
        Need to get in touch? Fill out the form below and I will get back to you
        as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="form-control w-full max-w-md">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              className="input w-full max-w-md"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              required
              className="input w-full max-w-md"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label" htmlFor="subject">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              required
              className="input w-full max-w-md"
              name="subject"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="message">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea-bordered textarea h-48 w-full max-w-md"
              id="message"
              placeholder="Your message"
              required
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <Turnstile siteKey={cfSiteKey} />
          <button type="submit" className="btn-primary btn w-full max-w-md">
            Submit
          </button>
          {submitted === true && (
            <div className="alert alert-success relative w-full max-w-md shadow-lg">
              <div className="absolute top-1 right-1 bottom-auto left-auto">
                <button onClick={() => setSubmitted(null)}>
                  <FaWindowClose className="h-5 w-5 shrink-0 stroke-current" />
                </button>
              </div>
              <div>
                <FaCheckCircle className="h-6 w-6 shrink-0 stroke-current" />
                <span>Your message has been sent.</span>
              </div>
            </div>
          )}
          {submitted === false && (
            <div className="alert alert-error relative w-full max-w-md shadow-lg">
              <div className="absolute top-1 right-1 bottom-auto left-auto">
                <button onClick={() => setSubmitted(null)}>
                  <FaWindowClose className="h-5 w-5 shrink-0 stroke-current" />
                </button>
              </div>
              <div>
                <FaExclamationCircle className="h-6 w-6 shrink-0 stroke-current" />
                <span>Sorry, there was an error.</span>
              </div>
            </div>
          )}
        </div>
      </form>
    </article>
  );
}
