"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import Styles from "./contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { emailJsConfig } from "../../../lib/environmen";
interface IFormInput {
  name: string;
  email: string;
  message: string;
}
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    emailjs
      .send(
        emailJsConfig.YOUR_SERVICE_ID,
        emailJsConfig.YOUR_TEMPLATE_ID,
        {
          from_name: data.name,
          message: data.message,
          reply_to: data.email,
        },
        emailJsConfig.YOUR_PUBLIC_KEY
      )
      .then((response) => {
        setIsSuccess(true);
        setMessage("Mensaje enviado con éxito!");
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Hubo un error al enviar el mensaje.");
      });
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className={Styles.contact} id="contact">
      <div className={Styles.content_form}>
        <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
          <fieldset>
            <div className={Styles.box_form}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                autoComplete="false"
                className={Styles.input_text}
                id="name"
                {...register("name", { required: "Nombre es requerido" })}
              />
              {errors.name && (
                <div className="mt-1 text-red">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>
            {/*  <div className={Styles.box_form}>
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                placeholder="Teléfono"
                className={Styles.input_text}
                id="phone"
              />
            </div> */}
            <div className={Styles.box_form}>
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                placeholder="Email"
                className={Styles.input_text}
                id="email_address"
                {...register("email", {
                  required: "Correo es requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Correo no es válido",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>
            <div className={Styles.box_form}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                placeholder="Mensaje"
                className={Styles.input_text}
                id="message"
                {...register("message", { required: "Mensaje es requerido" })}
              />
              {errors.message && (
                <div className="mt-1 text-red">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>
            <div className="flex alinear_derecha w_sm_100">
              <button type="submit" className="btn .w_sm_100">
                Enviar
              </button>
            </div>
          </fieldset>
        </form>
        {message && (
          <div
            className={`mt-5 p-4 text-center ${
              isSuccess ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {message}
          </div>
        )}
      </div>
      <div className={Styles.img}>
        <img
          src="https://images.unsplash.com/photo-1590935216525-e35827458736?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Di"
          alt="imagen-contacto"
        />
      </div>
    </section>
  );
}
