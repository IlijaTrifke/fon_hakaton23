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
          <h1 className="footer-h">ŠTA TI PRUŽA FON HAKATON?</h1>
          <p className="footer-p">
          FON Hakaton je odlična prilika za usavršavanje postojećih i sticanje novih veština i znanja. 
          Tokom timskog rada i konsultacija sa mentorima, imaćeš priliku da na praktičan način stekneš mnoge interesantne i 
          primenljive veštine. Takmičenje ovakvog tipa motivisaće te da nastaviš da istražuješ nove tehnologije, ali i da se 
          usavršavaš na profesionalnom nivou. Takođe, FON Hakaton je godinama unazad poznat po pozitivnoj atmosferi koja vlada među takmičarima. Iskoristi priliku da je osetiš i ti!
          </p>
          <h1 className="footer-button">
            <span>PRIJAVI SE!</span>
          </h1>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-box">
        <div className="footer-icons">
          <div className="footer-globe">
            <a className="footer-gl" href="https://fonis.rs/">
              <FaGlobe />
              fonis.rs
            </a>
          </div>
          <div className="footer-socials">
            <a className="footer-ig" href="https://www.instagram.com/fonis_fon/">
              <FaInstagram />
            </a>
            <a className="footer-fb" href="https://www.facebook.com/fonis.rs">
              <FaFacebookF />
            </a>
            <a
              className="footer-in"
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
          <p>Jove Ilića 154, Beograd</p>
        </div>
      </div>
    </div>
  );
}
