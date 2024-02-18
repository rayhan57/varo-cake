import React, { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const scriptUrl = import.meta.env.VITE_SCRIPT_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch(
      `${scriptUrl}?name=${formData.name}&email=${formData.email}&subject=${formData.subject}&message=${formData.message}`,
      {
        method: "POST",
      },
    );

    if (response.ok) {
      toast.success("Terima kasih sudah menghubungi kami", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="mx-auto mt-24 max-w-screen-md space-y-2 text-center text-sm lg:mt-32 lg:space-y-3 lg:text-base">
      <h2 className="text-base text-primary lg:text-lg">// HUBUNGI KAMI</h2>
      <h1 className="pb-5 font-playfair text-xl font-bold capitalize lg:text-3xl">
        Kami siap menjawab pertanyaan Anda. Jangan ragu untuk menghubungi tim
        kami kapan pun.
      </h1>

      <form className="space-y-2 lg:space-y-4" onSubmit={handleFormSubmit}>
        <div className="flex gap-4">
          <FloatingInput
            type={"text"}
            name={"name"}
            label={"Nama Anda"}
            value={formData.name}
            onChange={handleInputChange}
          />
          <FloatingInput
            type={"email"}
            name={"email"}
            label={"Email Anda"}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <FloatingInput
          type={"text"}
          name={"subject"}
          label={"Subjek"}
          value={formData.subject}
          onChange={handleInputChange}
        />
        <FloatingInput
          name={"message"}
          label={"Pesan"}
          value={formData.message}
          onChange={handleInputChange}
          textArea
        />
        <button
          className="rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-hover disabled:cursor-not-allowed disabled:bg-yellow-400 lg:px-8 lg:py-4"
          disabled={isSubmitting}
        >
          Kirim Pesan
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default Contact;
