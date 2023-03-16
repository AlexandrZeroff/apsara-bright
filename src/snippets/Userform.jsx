import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";

const Userform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [sendSuccess, setSendSuccess] = useState(false);

  const sendFormData = async (data, error) => {
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );
    reset();
    setSendSuccess(true);
  };
  return (
    <section id="feedback">
      <form
        onSubmit={handleSubmit(sendFormData)}
        className="userform flex flex-col mt-8 p-8 mx-auto rounded-2xl bg-white max-w-sm"
      >
        <label>Your name</label>
        <input
          type="text"
          {...register("name", { maxLength: 30, required: true })}
        />
        {errors.email?.type === "required" && (
          <span className="error-span">Please, enter your name</span>
        )}
        <label className="mt-4">Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <span className="error-span">Please, enter your email</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="error-span">Please, enter valid email</span>
        )}
        <label className="mt-4">Phone</label>
        <input
          type="tel"
          {...register("phone", {
            required: true,
            pattern:
              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.phone?.type === "required" && (
          <span className="error-span">Please enter your phone number</span>
        )}
        {errors.phone?.type === "pattern" && (
          <span className="error-span">Please enter a valid phone number</span>
        )}
        <label className="mt-4">Message</label>
        <input
          aria-multiline
          type="text"
          defaultValue=""
          {...register("message")}
        />
        {sendSuccess && (
          <span className="success-span">
            Thanks, your data was processed successfully!
          </span>
        )}
        <button type="submit" className="rounded-full bg-th-secondary font-bold text-th-primary text-sm py-4 px-14 mx-auto mt-8 hover:bg-th-secondary/50">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Userform;
