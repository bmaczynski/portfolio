import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FaTimes } from "react-icons/fa";

const Contact = () => {
  const [valid, setValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const form = useRef();

  useEffect(() => {
    const regex =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name.length > 1) {
      setNameValid(true);
    } else setNameValid(false);

    if (message.length > 9) {
      setMessageValid(true);
    } else {
      setMessageValid(false);
    }

    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }

    if (nameValid && emailValid && messageValid) {
      setValid(true);
      console.log("all valid");
    }
  }, [email, message, name, emailValid, messageValid, nameValid]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (valid === true) {
      emailjs
        .sendForm(
          "service_p7nu83j",
          "template_660c02s",
          form.current,
          "zwCta_Z6ZYvVe1D8X"
        )
        .then(
          (result) => {
            toast.success("Your email has been sent! Thank you.");
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
            setShowErrors(false);
          },
          (error) => {
            console.log(error.text);
            toast.error(error.text);
          }
        )
        .then(form.current.reset());
    } else {
      setShowErrors(true);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-20 transition-all dark:bg-darkest"
    >
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-10 px-5 lg:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="mb-5 text-6xl font-medium tracking-tight">Contact</h3>
          <h2 className="flex text-center sm:text-left">
            I am always looking for opportunities to learn and grow. Feel free
            to reach out if you would like to work together.
          </h2>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex shrink-0 flex-col rounded-md border bg-gray-100 p-5 transition-all dark:border-0 dark:border-t-4 dark:border-t-indigo-400 dark:bg-darker sm:p-10 lg:w-3/5"
        > 
          <div className="mb-2.5 flex gap-2.5 sm:mb-5 sm:gap-5">
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              name="firstName"
              id="firstName"
              required
              className="w-full rounded-md border-2 border-white px-5 py-2 text-lg outline-none transition hover:cursor-pointer focus:cursor-text focus:border-indigo-500 dark:border-darkest dark:bg-dark dark:focus:border-indigo-400"
              placeholder="Name"
            />
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              name="email"
              id="email"
              required
              className="w-full rounded-md border-2 border-white px-5 py-2 text-lg outline-none transition hover:cursor-pointer focus:cursor-text focus:border-indigo-500 dark:border-darkest dark:bg-dark dark:focus:border-indigo-400"
              placeholder="Email"
            />
          </div>
          <textarea
            type="text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            name="message"
            id="message"
            required
            className="w-full resize-none rounded-md border-2 border-white px-5 py-2 text-lg outline-none transition hover:cursor-pointer focus:cursor-text focus:border-indigo-500 dark:border-darkest dark:bg-dark dark:focus:border-indigo-400"
            placeholder="Message"
          />
          <div className="mt-5 flex w-full items-center gap-2.5 sm:gap-5">
            <button
              type="submit"
              className="flex rounded-md border-2 border-indigo-500 py-2.5 px-5 text-sm text-indigo-500 transition hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-darker"
            >
              Submit
            </button>
            {showErrors && (
              <div className="flex flex-col text-sm text-black text-opacity-50 dark:text-white">
                {!nameValid && (
                  <div className="flex items-center gap-1.5">
                    <FaTimes className="text-red-500" />
                    Name is invalid
                  </div>
                )}
                {!emailValid && (
                  <div className="flex items-center gap-1.5">
                    <FaTimes className="text-red-500" />
                    Email is invalid
                  </div>
                )}
                {!messageValid && (
                  <div className="flex items-center gap-1.5">
                    <FaTimes className="text-red-500" />
                    Message is invalid
                  </div>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
