"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Styles from "./contact.module.css";
import AOS from "aos";
import { emailJsConfig, recaptchaConfig } from "../../../lib/environmen";

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
  const [loading, setLoading] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    if (!executeRecaptcha) {
      setIsSuccess(false);
      setMessage("reCAPTCHA no está listo, intenta de nuevo.");
      return;
    }

    setLoading(true);

    try {
      const token = await executeRecaptcha("submit");

      const verify = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const result = await verify.json();

      if (!result.success || result.score < 0.5) {
        throw new Error("Actividad sospechosa detectada");
      }

      await emailjs.send(
        emailJsConfig.YOUR_SERVICE_ID,
        emailJsConfig.YOUR_TEMPLATE_ID,
        {
          from_name: data.name,
          message: data.message,
          reply_to: data.email,
        },
        emailJsConfig.YOUR_PUBLIC_KEY,
      );

      setIsSuccess(true);
      setMessage("¡Mensaje enviado con éxito!");
      reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setIsSuccess(false);
      setMessage("Hubo un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
      <fieldset className={Styles.fieldset}>
        <div className={Styles.row}>
          <div className={Styles.field}>
            <label htmlFor="name" className={Styles.label}>
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              autoComplete="off"
              className={`${Styles.input} ${errors.name ? Styles.inputError : ""}`}
              id="name"
              aria-label="Nombre"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name", { required: "Nombre es requerido" })}
            />
            {errors.name && (
              <small className={Styles.errorMsg}>{errors.name.message}</small>
            )}
          </div>

          <div className={Styles.field}>
            <label htmlFor="email" className={Styles.label}>
              Correo
            </label>
            <input
              type="email"
              placeholder="tu@correo.com"
              className={`${Styles.input} ${errors.email ? Styles.inputError : ""}`}
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
              <small className={Styles.errorMsg}>{errors.email.message}</small>
            )}
          </div>
        </div>

        <div className={Styles.field}>
          <label htmlFor="message" className={Styles.label}>
            Mensaje
          </label>
          <textarea
            placeholder="Cuéntame sobre tu proyecto..."
            className={`${Styles.input} ${Styles.textarea} ${errors.message ? Styles.inputError : ""}`}
            id="message"
            aria-label="Mensaje"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", { required: "Mensaje es requerido" })}
          />
          {errors.message && (
            <small className={Styles.errorMsg}>{errors.message.message}</small>
          )}
        </div>

        <button type="submit" className={Styles.submitBtn} disabled={loading}>
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>

        {message && (
          <div
            className={`${Styles.feedback} ${isSuccess ? Styles.feedbackSuccess : Styles.feedbackError}`}
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
      <div className={Styles.content_form} data-aos="fade-right">
        <p className={Styles.eyebrow}>Contacto</p>
        <h2 className={Styles.titulo}>Creemos algo increíble juntos</h2>
        <p className={Styles.sub}>
          Completa el formulario y te respondo a la brevedad.
        </p>
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaConfig.SITE_KEY}>
          <ContactForm />
        </GoogleReCaptchaProvider>
      </div>
      <div className={Styles.img} data-aos="fade-left">
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop"
          alt="imagen-contacto"
        />
      </div>
    </section>
  );
}
