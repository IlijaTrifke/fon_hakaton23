import React from "react";
import "./partneri.scss";
import photoHR from "./photoHR.jpg";
import photoVR from "./photoVR.jpg";

const partneri = () => {
  return (
    <div className="partneri">
      <div className="partneri-pokrovitelj">
        <h1 className="partneri-pokrovitelj-title">Pokrovitelj takmicenja</h1>
        <div className="partneri-pokrovitelj-photo">
          <div className="partneri-pokrovitelj-photo1">
            <img src={photoHR} alt="photoHR" />
          </div>
        </div>
      </div>
      <div className="partneri-godisnji">
        <h1 className="partneri-godisnji-title">Godišnji partneri</h1>
        <div className="partneri-godisnji-photo">
          <div className="partneri-godisnji-photo1">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-godisnji-photo2">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-godisnji-photo3">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-godisnji-photo4">
            <img src={photoHR} alt="photoHR" />
          </div>
        </div>
      </div>
      <div className="partneri-naturalni">
        <h1 className="partneri-naturalni-title">Naturalni partneri</h1>
        <div className="partneri-naturalni-photo">
          <div className="partneri-naturalni-photo1">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-naturalni-photo2">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-naturalni-photo3">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-naturalni-photo4">
            <img src={photoHR} alt="photoHR" />
          </div>
        </div>
      </div>
      <div className="partneri-medijski">
        <h1 className="partneri-medijski-title">Medijski partneri</h1>
        <div className="partneri-medijski-photo">
          <div className="partneri-naturalni-photo1">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-medijski-photo2">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-medijski-photo3">
            <img src={photoHR} alt="photoHR" />
          </div>
          <div className="partneri-medijski-photo4">
            <img src={photoHR} alt="photoHR" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default partneri;
