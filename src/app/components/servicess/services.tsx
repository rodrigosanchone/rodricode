"use client";
import React, { useEffect } from "react";
import Styles from "./services.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const planes = [
  {
    icono: "🚀",
    nombre: "Plan Starter",
    precio: "$150",
    descripcion: "Landing page moderna con formulario de contacto",
    features: [
      "1 cuenta de correo profesional",
      "Diseño responsive y moderno",
      "Hospedaje optimizado incluido",
      "Formulario de contacto funcional",
    ],
    destacado: false,
  },
  {
    icono: "💼",
    nombre: "Plan Business",
    precio: "$250",
    descripcion:
      "Sitio profesional: Inicio, Quiénes somos, Servicios, Contacto",
    features: [
      "2 cuentas de correo profesional",
      "SEO básico incluido",
      "Integración con Google Analytics",
      "Diseño responsive premium",
    ],
    destacado: false,
  },
  {
    icono: "⚡",
    nombre: "Plan Pro",
    precio: "$400",
    descripcion: "Sitio con blog dinámico y catálogo de productos",
    features: [
      "3 cuentas de correo profesional",
      "Panel de administración básico",
      "Optimización avanzada de rendimiento",
      "Blog y catálogo de productos",
    ],
    destacado: false,
  },
  {
    icono: "👑",
    nombre: "Plan Premium",
    precio: "$700",
    descripcion:
      "Web corporativa completa con tienda online, blog y soporte mensual",
    features: [
      "5 cuentas de correo profesional",
      "Tienda online completa (eCommerce)",
      "Seguridad avanzada incluida",
      "Mantenimiento mensual incluido",
    ],
    destacado: true,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section className={Styles.services} id="services">
      <div className={Styles.inner}>
        <div className={Styles.encabezado} data-aos="fade-up">
          <p className={Styles.eyebrow}>Servicios</p>
          <h2 className={Styles.titulo}>El plan perfecto para tu negocio</h2>
          <p className={Styles.subtitulo}>
            Elige el paquete que mejor se adapta a tus necesidades.
          </p>
        </div>

        <div className={Styles.grid}>
          {planes.map((plan, i) => (
            <div
              key={plan.nombre}
              className={`${Styles.card} ${plan.destacado ? Styles.cardDestacada : ""}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {plan.destacado && (
                <span className={Styles.badge}>Más completo</span>
              )}
              <div className={Styles.cardHeader}>
                <span className={Styles.icono}>{plan.icono}</span>
                <h3 className={Styles.planNombre}>{plan.nombre}</h3>
                <p className={Styles.planDesc}>{plan.descripcion}</p>
                <p className={Styles.precio}>
                  {plan.precio} <span>USD</span>
                </p>
              </div>
              <hr className={Styles.divider} />
              <ul className={Styles.features}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="#1D9E75"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={Styles.planBtn}>
                Solicitar plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
