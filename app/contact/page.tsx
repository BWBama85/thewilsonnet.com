export default function BamaPolitics() {
  return (
    <article className="prose mx-4 max-w-none rounded-3xl bg-base-200 p-4 lg:relative lg:mx-0 lg:w-full">
      <h1>Contact</h1>
      <div className="divider"></div>
      <p>
        Need to get in touch? Fill out the form below and I will get back to you
        as soon as possible.
      </p>
      <form>
        <div className="flex flex-col gap-4">
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input w-full max-w-md"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="input w-full max-w-md"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-md"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea-bordered textarea h-48"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="btn-primary btn">Submit</button>
        </div>
      </form>
    </article>
  );
}
