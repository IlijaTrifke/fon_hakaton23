import React from "react";
import "./iskustva.scss";
import photo from "./photo.jpg";
const iskustva = () => {
  return (
    <div className="iskustva">
      <div className="title">
        <h1>Iskustva</h1>
      </div>
      <div className="top">
        <div className="top-left-button">
          <button>lijevo</button>
        </div>
        <div className="top-left-box">
          <img src={photo} alt="photo" className="top-photo1" />
          <div className="top-left-box-name">Nemanja Petronijevic</div>
          <hr className="top-left-box-hr" />
        </div>
        <div className="top-right-box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            ratione unde laborum voluptas, nobis quod ducimus quae itaque ab
            earum saepe doloremque aliquid atque dolore.
          </p>
        </div>
        <div className="top-right-button">
          <button>desno</button>
        </div>
      </div>
      <div className="down">
        {/* <div className="down-image-box1"> */}
        <img src={photo} alt="photo" className="down-photo1" />
        {/* </div> */}
        {/* <div className="down-image-box2"> */}
        <img src={photo} alt="photo" className="down-photo2" />
        {/* </div> */}
        {/* <div className="down-image-box3"> */}
        <img src={photo} alt="photo" className="down-photo3" />
        {/* </div> */}
        {/* <div className="down-image-box4"> */}
        <img src={photo} alt="photo" className="down-photo4" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default iskustva;
