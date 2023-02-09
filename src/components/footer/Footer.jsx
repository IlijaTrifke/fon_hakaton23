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
      <div className="footer-content">
        <div className="footer-text">
          <h1 className="footer-h">Nesto</h1>
          <p className="footer-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam
            impedit quidem dolore cupiditate aut dolorum architecto magnam
            provident enim quos labore accusamus debitis modi commodi
            distinctio, corporis repellat voluptas.
          </p>
          <HashLink to="/Prijava" className="footer-button">
            <span>PRIJAVI SE!</span>
          </HashLink>
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
