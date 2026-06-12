"use client";
import React, { useEffect } from "react";
import Styles from "./banner2.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Banner2() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={Styles.banner2}>
      <div className={Styles.content_banner2}>
        <h2 data-aos="fade-right">Estoy aquí para ayudarte, ¡escríbeme!</h2>
        <div className={Styles.info}>
          <ul data-aos="fade-left">
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9933cc"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="40"
                  height="40"
                  strokeWidth="1.5"
                >
                  <path d="M20 4l-2 2"></path>
                  <path d="M22 10.5l-2.5 -.5"></path>
                  <path d="M13.5 2l.5 2.5"></path>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>
              </span>
              <p>70676978</p>
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9933cc"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="40"
                  height="40"
                  strokeWidth="1.5"
                ></svg>
              </span>
              <p>servicio@rodricode.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
