import React from "react";
import "./slikeOrg.scss";
import slika from "./god.png";

const SlikeOrg = () => {
  return (
    <div className="org-section">
      <h2 className="org-header">Organizacioni tim</h2>
      <div className="org-content">
        <div className="org-text">
          <h2 className="org-h2">LOREM IPSUM</h2>
          <p className="org-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor non
            iure, quidem ea, reiciendis voluptate tempore libero alias
            repudiandae atque voluptatibus reprehenderit omnis distinctio
            repellat pariatur similique? Voluptate, dolor quia!
          </p>
        </div>
        <div className="org-photo-hold">
          <img className="org-photo" src={slika} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default SlikeOrg;
