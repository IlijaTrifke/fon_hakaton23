import "./footer.scss";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";
import logo from "./logo.png";

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
        </div>
        <h1 className="footer-button">
          <span>PRIJAVI SE!</span>
        </h1>
      </div>
      <hr />
      <div className="footer-box">
        <div className="footer-icons">
          <div className="footer-globe">
            <a href="https://fonis.rs/">
              <FaGlobe />
              fonis.rs
            </a>
          </div>
          <div className="footer-socials">
            <a
              className="footer-ig"
              href="https://www.instagram.com/fonis_fon/"
            >
              <FaInstagram />
            </a>
            <a className="footer-fb" href="https://www.facebook.com/fonis.rs">
              <FaFacebookF />
            </a>
            <a
              className="fotter-in"
              href="https://www.linkedin.com/company/fonis"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footer-img">
          <img src={logo} alt="" className="footer-logo" />
        </div>
        <div className="footer-adress">
          <p>Fakultet organizacionih nauka</p>
          <p>Jove Ilica 154, Beograd</p>
        </div>
      </div>
    </div>
  );
}
