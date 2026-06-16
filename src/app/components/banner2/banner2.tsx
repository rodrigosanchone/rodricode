"use client";
import React, { useEffect } from "react";
import Styles from "./banner2.module.css";
import AOS from "aos";
import { emailJsConfig } from "../../../lib/environment";

export default function Banner2() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <div className={Styles.banner2}>
      <div className={Styles.inner} data-aos="fade-up">
        <div className={Styles.texto}>
          <p className={Styles.eyebrow}>Hablemos</p>
          <h2 className={Styles.titulo}>
            Estoy aquí para ayudarte.
            <br />
            ¡Escríbeme!
          </h2>
          <p className={Styles.sub}>
            Cuéntame tu idea y construimos algo increíble juntos.
          </p>
        </div>

        <div className={Styles.pills}>
          <a href="tel:70676978" className={Styles.pill}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7F77DD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5l5 2v4a2 2 0 0 1-2 2C8.527 20.21 3.79 15.473 3 8a2 2 0 0 1 2-4" />
            </svg>
            70676978
          </a>
          <a href="mailto:servicio@rodricode.com" className={Styles.pill}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7F77DD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            servicio@rodricode.com
          </a>
        </div>

        <div className={Styles.footer}>
          <p className={Styles.footerText}>
            O completa el formulario de contacto abajo
          </p>
        </div>
      </div>
    </div>
  );
}
