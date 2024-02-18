import React from "react";

const FloatingInput = ({ type, name, label, value, textArea, onChange }) => {
  const InputElement = textArea ? "textarea" : "input";

  return (
    <div className="relative w-full">
      <InputElement
        type={type}
        name={name}
        className={`peer block w-full appearance-none rounded-lg border bg-transparent p-3 text-sm focus:border-primary focus:outline-none focus:ring-0 lg:text-base ${textArea ? "resize-y" : ""}`}
        rows={textArea ? 4 : 1}
        placeholder=" "
        value={value}
        onChange={onChange}
        required
      />
      <label
        htmlFor={name}
        className="absolute start-1 top-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 lg:text-base rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
