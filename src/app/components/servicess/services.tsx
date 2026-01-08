import React from "react";
import Styles from "./services.module.css";

export default function Services() {
  return (
    <section className={`content ${Styles.services}`} id="services">
      <div>
        <div className={Styles.service}>
          <h2>Sitio web básico</h2>
          <ul>
            <li>Posicionamiento en Google</li>
            <li>Certificado de seguridad</li>
            <li>Hosting</li>
            <li>Sección de Inicio</li>
            <li>Sección de productos o servicios</li>
            <li>Sección sobre nosotros</li>
            <li>Sección de contacto</li>
          </ul>
          <p>No incluye servidor de correos</p>
          <p className={Styles.prices}>$20 Dólares mensuales</p>
        </div>
        <div className={Styles.service}>
          <h2>Sitio web avanzado</h2>
          <ul>
            <li>Posicionamiento en Google</li>
            <li>Certificado de seguridad</li>
            <li>Hosting</li>
            <li>Mantenimineto mensual</li>
            <li>Sección de Inicio</li>
            <li>Sección de productos o servicios</li>
            <li>Sección sobre nosotros</li>
            <li>Sección de contacto</li>
            <li>Servidor de correos profesional para una cuenta</li>
          </ul>
          <p className={Styles.prices}>$40 Dólares mensuales</p>
        </div>
        <div className={Styles.service}>
          <h2>Sitio web premium</h2>
          <ul>
            <li>Posicionamiento en Google</li>
            <li>Certificado de seguridad</li>
            <li>Hosting</li>
            <li>Mantenimineto mensual</li>
            <li>Sección de Inicio</li>
            <li>Sección de productos o servicios</li>
            <li>Sección sobre nosotros</li>
            <li>Sección de contacto</li>
            <li>Servidor de correos profesional para 5 cuentas</li>
            <li>Blog</li>
          </ul>
          <p className={Styles.prices}>$60 Dólares mensuales</p>
        </div>
      </div>
    </section>
  );
}
