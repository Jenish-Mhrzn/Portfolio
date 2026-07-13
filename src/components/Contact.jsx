import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCommentDots,
  FaGithub,
} from "react-icons/fa";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [result, setResult] = useState("");
  const initalValues = { name: "", email: "", number: "", message: "" };
  const [formValues, setFormValues] = useState(initalValues);
  const [formError, setFormError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate(formValues);
    setFormError(error);
    if (Object.keys(error).length > 0) {
      return;
    }
    await onSubmit(e);
  };

  const validate = (values) => {
    const error = {};
    const regex1 = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
    const mobileRegex = /^(98|97)[0-9]{8}$/;
    const landlineRegex = /^0\d{1,2}-?\d{6,7}$/;
    const regex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.name) {
      error.name = "Name is required!";
    } else if (!regex1.test(values.name))
      error.name = "Name is not in Valid format";
    if (!values.email) {
      error.email = "Email is required!";
    } else if (!regex2.test(values.email))
      error.email = "Email is not in valid format";
    if (!values.number) {
      error.number = "Number is required!";
    } else if (
      !mobileRegex.test(values.number) &&
      !landlineRegex.test(values.number)
    )
      error.number = "Number is not in Valid Format";
    if (!values.message) {
      error.message = "This field need to be filled!";
    }
    return error;
  };

  const onSubmit = async (event) => {
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1fb7d659-418f-4a31-81e8-b7e8d58db642");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      setFormValues(initalValues);
      setFormError({});
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div
      className="flex flex-col mt-2 p-10 sm:px-20 lg:px-32 w-full"
      id="Contact"
    >
      <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-3xl tracking-wide text-white">
        Contact
      </h1>
      <span className="text-center text-gray-300 font-semibold mt-2">
        Let's Connect
      </span>
      <div className="mt-13 flex flex-col sm:flex-row justify-between " data-aos="fade-up">
        <div className="flex flex-col space-y-3 basis-[48%]">
          <div className="flex gap-4 items-center">
            <h1 className="font-medium text-white text-2xl">Send Message</h1>
            <FaCommentDots size={25} color="white" />
          </div>

          <p className="font-medium text-gray-400">
            I'm a Computer Science student passionate about web and mobile
            development. I'm currently seeking internship and collaboration
            opportunities where I can learn, contribute, and grow. Feel free to
            reach out using the form below.
          </p>
          <div className="flex flex-col gap-5 mt-7 text-gray-300 font-semibold">
            <div className="flex gap-3">
              <FaEnvelope size={25} color="white" />
              <h1>maharjanjenish70@gmail.com</h1>
            </div>
            <div className="flex gap-3">
              <FaPhoneAlt size={25} color="white" />
              <h1>9847346637</h1>
            </div>
            <div className="flex gap-3">
              <FaMapMarkerAlt size={25} color="white" />
              <h1>Lalitpur, Nepal</h1>
            </div>
            <div className="flex gap-3">
              <FaGithub size={25} color="white" />
              <a href="https://github.com/Jenish-Mhrzn">
                <h1>Jenish-Mhrzn</h1>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-[48%] p-5 rounded-xl bg-teal-600 mt-9 sm:mt-0 shadow-2xl">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label className="text-white block mb-3" htmlFor="">
                Name
              </label>
              <input
                className="w-full border px-3 py-3 border-gray-600 outline-none rounded-xl mb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-50"
                type="text"
                name="name"
                placeholder="Enter name (example:John Doe)"
                value={formValues.name}
                onChange={handleChange}
              />
              <h1 className="mb-2 text-amber-300">{formError.name}</h1>
            </div>
            <div>
              <label className="text-white block mb-3" htmlFor="">
                Email
              </label>
              <input
                className="w-full border px-3 py-3 border-gray-600 outline-none rounded-xl mb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-50"
                type="text"
                name="email"
                placeholder="Enter email (example:john@gmail.com)"
                value={formValues.email}
                onChange={handleChange}
              />
              <h1 className="mb-2 text-amber-300">{formError.email}</h1>
            </div>
            <div>
              <label className="text-white block mb-3" htmlFor="">
                Phone Number
              </label>
              <input
                className="w-full border px-3 py-3 border-gray-600 outline-none rounded-xl mb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-50"
                type="number"
                name="number"
                placeholder="Enter number (example:9847346637)"
                value={formValues.number}
                onChange={handleChange}
              />
              <h1 className="mb-2 text-amber-300">{formError.number}</h1>
            </div>
            <div>
              <label className="text-white block mb-3" htmlFor="">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full border px-3 py-3 border-gray-600 outline-none rounded-xl mb-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-50"
                type="text"
                name="message"
                placeholder="Write your message..."
                value={formValues.message}
                onChange={handleChange}
              />
              <h1 className="mb-2 text-amber-300">{formError.message}</h1>
            </div>
            <button className="mt-3 bg-blue-500 rounded-xl text-white px-4 py-2 mb-2">
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
