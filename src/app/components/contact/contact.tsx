"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import Styles from "./contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { emailJsConfig, recaptchaConfig } from "@/lib/environmen"; // 👈 corrige aquí

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    if (!executeRecaptcha) {
      setIsSuccess(false);
      setMessage("⚠️ reCAPTCHA no está listo, intenta de nuevo.");
      return;
    }

    try {
      // Ejecuta reCAPTCHA v3 con acción "submit"
      const token = await executeRecaptcha("submit");
      console.log("Token generado por reCAPTCHA:", token);

      // Envía el token a tu backend para validarlo con SECRET_KEY
      const verify = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const result = await verify.json();
      console.log("Respuesta del backend:", result);

      // Ajusta el umbral de score según tu caso (0.3 recomendado)
      if (!result.success || result.score < 0.3) {
        console.warn("Validación reCAPTCHA fallida:", result);
        setIsSuccess(false);
        setMessage("⚠️ Validación reCAPTCHA fallida, intenta de nuevo.");
        return;
      }

      // Si el backend confirma que es válido, recién llamas a EmailJS
      const emailResponse = await emailjs.send(
        emailJsConfig.YOUR_SERVICE_ID,
        emailJsConfig.YOUR_TEMPLATE_ID,
        {
          from_name: data.name,
          message: data.message,
          reply_to: data.email,
        },
        emailJsConfig.YOUR_PUBLIC_KEY
      );

      console.log("Respuesta de EmailJS:", emailResponse);

      setIsSuccess(true);
      setMessage("✅ ¡Mensaje enviado con éxito!");
      reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setIsSuccess(false);
      setMessage("❌ Hubo un error al enviar el mensaje.");
    }
  };

  // Ocultar mensaje después de 3 segundos
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
      <fieldset>
        <div className={Styles.box_form}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            autoComplete="off"
            className={Styles.input_text}
            id="name"
            aria-label="Nombre"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: "Nombre es requerido" })}
          />
          {errors.name && (
            <div className="mt-1 text-red">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className={Styles.box_form}>
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            placeholder="Email"
            className={Styles.input_text}
            id="email"
            aria-label="Correo"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Correo es requerido",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
            aria-label="Mensaje"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", { required: "Mensaje es requerido" })}
          />
          {errors.message && (
            <div className="mt-1 text-red">
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <div className="flex alinear_derecha w_sm_100">
          <button type="submit" className="btn w_sm_100">
            Enviar
          </button>
        </div>

        {message && (
          <div
            className={`mt-5 p-4 text-center ${
              isSuccess ? Styles.successMessage : Styles.errorMessage
            }`}
          >
            {message}
          </div>
        )}
      </fieldset>
    </form>
  );
}

export default function Contact() {
  return (
    <section className={Styles.contact} id="contact">
      <div className={Styles.content_form}>
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaConfig.SITE_KEY}>
          <ContactForm />
        </GoogleReCaptchaProvider>
      </div>
      <div className={Styles.img}>
        <img
          src="https://images.unsplash.com/photo-1590935216525-e35827458736?q=80&w=1974&auto=format&fit=crop"
          alt="imagen-contacto"
        />
      </div>
    </section>
  );
}
