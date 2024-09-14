import React, { useState } from "react";
import Recaptcha from "../Img/recaptchaImg.png";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

const Contact = () => {
  const [verified, setVerified] = useState(false);

  const [ContactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ConatcthandleChange = (e) => {
    setContactFormData({
      ...ContactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const ConatcthandleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", ContactFormData);

    if (!verified) {
      alert("Please verify that you are a human!");
      return;
    }

    // EmailJS parameters
    const templateParams = {
      name: ContactFormData.name,
      email: ContactFormData.email,
      message: ContactFormData.message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        templateParams,
        "YOUR_USER_ID" // replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send email.");
        }
      );
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true); // Set verified to true when reCAPTCHA is successfully completed
  }

  return (
    <div className="w-[90%] sm:w-[500px] lg:w-[580px] text-black mx-auto mt-12 sm:mt-14 md:mt-4 px-3 py-2 rounded-[15px]">
      <h1 className="text-center font-bold text-2xl py-2 text-white">
        CONTATO
      </h1>
      <div>
        <form onSubmit={ConatcthandleSubmit}>
          <label
            htmlFor="reason"
            className="block mb-2 text-xl font-semibold text-white mt-2"
          >
            Olá! Nos fale sobre você:
          </label>
          <div className="flex justify-between md:items-center mt-8 flex-col md:flex-row">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-white"
            >
              Seu nome completo*:
            </label>
            <input
              id="name"
              name="name"
              value={ContactFormData.name}
              onChange={ConatcthandleChange}
              className="rounded-lg border md:ml-4 w-full md:w-[350px] h-[40px] focus:ring-blue-500 focus:border-blue-500 block p-1 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Seu nome..."
            />
          </div>
          <div className="flex justify-between md:items-center mt-8 flex-col md:flex-row">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-white"
            >
              E-mail*:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={ContactFormData.email}
              onChange={ConatcthandleChange}
              className="rounded-lg border md:ml-4 w-full md:w-[350px] h-[40px] focus:ring-blue-500 focus:border-blue-500 block p-1 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email@domain.com"
            />
          </div>
          <label
            htmlFor="message"
            className="block mb-2 mt-6 text-lg font-semibold text-white"
          >
            Digite sua mensagem*:
          </label>
          <textarea
            id="message"
            name="message"
            value={ContactFormData.message}
            onChange={ConatcthandleChange}
            className="rounded-lg resize-none w-full h-[100px] border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Your Message"
          />
          <br />
          <div className="flex justify-between">
            {/* <span>
              <ReCAPTCHA
                className="max-w-[100px]"
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={onChange}
              />
            </span> */}
            <button
              type="submit"
              className="py-1 px-5 mt-4 text-sm font-medium h-[40px] rounded-lg bg-black text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
