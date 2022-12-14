import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
  const contactForm = useRef(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? 'no service id',
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? 'no template id',
        contactForm.current ?? 'no form',
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? 'no public key'
      )
      .then(res => {
        console.log('SUCCESS!', res.status, res.text);
      })
      .catch(err => console.log('FAILED!', err.message));
    contactForm.current = null;
  };
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <h1 className="mb-5 text-3xl font-bold">Contact me</h1>
      <div className="flex flex-row items-center justify-center">
        <div></div> {/* // TODO: some sort of image here */}
        <form
          onSubmit={sendEmail}
          ref={contactForm}
          className="flex flex-col items-center"
        >
          <label
            htmlFor="userName"
            className="relative block px-3 pt-3 mb-3 overflow-hidden bg-white border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="userName"
              name="user_name"
              placeholder="Name"
              className="w-full h-8 p-0 text-black placeholder-transparent border-none peer focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute text-xs text-gray-700 transition-all -translate-y-1/2 left-3 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Name
            </span>
          </label>
          <label
            htmlFor="UserEmail"
            className="relative block px-3 pt-3 overflow-hidden bg-white border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="email"
              id="UserEmail"
              name="user_email"
              placeholder="Email"
              className="w-full h-8 p-0 text-black placeholder-transparent border-none peer focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute text-xs text-gray-700 transition-all -translate-y-1/2 left-3 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Email
            </span>
          </label>

          <label htmlFor="clientQuery" className="p-2 font-bold text-white">
            Your message:
          </label>
          <textarea
            className="mb-3 text-black bg-white textarea w-54"
            placeholder="Enter your message here..."
            name="user_query"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="text-black bg-white btn"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
