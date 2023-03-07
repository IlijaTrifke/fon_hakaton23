import "./footer.scss";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";
import logo from "./logo.png";
import location from "./location.png";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-purple-ball-blur" />
      <div className="footer-blue-rectangle-blur" />
      <div className="footer-content">
        <div className="footer-text">
          <h1 className="footer-h">ŠTA TI PRUŽA FON HAKATON?</h1>
          <p className="footer-p">
            FON Hakaton je odlična prilika za usavršavanje postojećih i sticanje
            novih veština i znanja. Tokom timskog rada i konsultacija sa
            mentorima, imaćeš priliku da na praktičan način stekneš mnoge
            interesantne i primenljive veštine. Takmičenje ovakvog tipa
            motivisaće te da nastaviš da istražuješ nove tehnologije, ali i da
            se usavršavaš na profesionalnom nivou. Takođe, FON Hakaton je
            godinama unazad poznat po pozitivnoj atmosferi koja vlada među
            takmičarima. Iskoristi priliku da je osetiš i ti!
          </p>
          <p className="footer-button">
            <span>PRIJAVI SE!</span>
          </p>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-box">
        <div className="footer-icons">
          <a
            className="footer-gl"
            href="https://fonis.rs/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe />
            fonis.rs
          </a>

          <div className="footer-socials">
            <a
              className="footer-ig"
              href="https://www.instagram.com/fonis_fon/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="footer-fb"
              href="https://www.facebook.com/fonis.rs"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              className="footer-in"
              href="https://www.linkedin.com/company/fonis"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footer-img">
          <img src={logo} alt="" className="footer-logo" />
        </div>
        <a
          href="https://goo.gl/maps/cqN9GxpaLVnMjsiK6"
          target="_blank"
          rel="noreferrer"
          className="footer-adress"
        >
          <div className="footer-adress-left">
            <p>Fakultet organizacionih nauka</p>
            <p>Jove Ilića 154, Beograd</p>
          </div>
          <img src={location} alt="Location" />
        </a>
      </div>
    </div>
  );
}
