import React, { useState } from "react";
import FloatingInput from "./FloatingInput";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log(formData);
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
            id={"name"}
            label={"Nama Anda"}
            value={formData.name}
            onChange={handleInputChange}
          />
          <FloatingInput
            type={"email"}
            id={"email"}
            label={"Email Anda"}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <FloatingInput
          type={"text"}
          id={"subject"}
          label={"Subjek"}
          value={formData.subject}
          onChange={handleInputChange}
        />
        <FloatingInput
          id={"message"}
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
    </div>
  );
};

export default Contact;
