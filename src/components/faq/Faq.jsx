import { startOptimizedAppearAnimation } from "framer-motion";
import React from "react";
import { useState } from "react";
import "./faq.scss";

const Faq = () => {
  const [plus, setPlus] = useState(false);

  const toggleAnimPlus = () => {
    if (plus === true) {
      return "faq-plus faq-plus-animation1";
    } else {
      return "faq-plus faq-plus-animation2";
    }
  };

  const toggleAnimLongext = () => {
    if (plus === true) {
      return "faq-longtext1 faq-text-movingTopToBottom";
    } else {
      return "faq-longtext2 faq-text-movingBottomToTop";
    }
  };

  const toggleState = () => {
    if (plus === false) {
      setPlus(true);
    } else {
      setPlus(false);
    }
  };

  return (
    <div className="faq-section">
      <h1 className="faq-naslov">Često postavljana pitanja</h1>

      <div className="faq-box">
        <div className="faq-horizontal">
          <p className="faq-text">Ko se može prijaviti</p>
          <p
            className={toggleAnimPlus()}
            onClick={() => {
              toggleState();
            }}
          >
            +
          </p>
        </div>

        <p className={toggleAnimLongext()}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim,
          nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam
          labore expedita quis. Eius, libero tempore delectus laboriosam
          consequuntur exercitationem veniam.
        </p>

        <span class="faq-horizontal-line"></span>

        <div className="faq-horizontal">
          <p className="faq-text">Ko se može prijaviti</p>
          <p
            className={toggleAnimPlus()}
            onClick={() => {
              toggleState();
            }}
          >
            +
          </p>
        </div>

        <p className={toggleAnimLongext()}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim,
          nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam
          labore expedita quis. Eius, libero tempore delectus laboriosam
          consequuntur exercitationem veniam.
        </p>

        <span class="faq-horizontal-line"></span>

        <div className="faq-horizontal">
          <p className="faq-text">Ko se može prijaviti</p>
          <p className="faq-plus">+</p>
        </div>

        <p className="faq-longtext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim,
          nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam
          labore expedita quis. Eius, libero tempore delectus laboriosam
          consequuntur exercitationem veniam.
        </p>

        <span class="faq-horizontal-line"></span>

        <div className="faq-horizontal">
          <p className="faq-text">Ko se može prijaviti</p>
          <p className="faq-plus">+</p>
        </div>

        <p className="faq-longtext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim,
          nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam
          labore expedita quis. Eius, libero tempore delectus laboriosam
          consequuntur exercitationem veniam.
        </p>

        <span class="faq-horizontal-line"></span>
      </div>
    </div>
  );
};

export default Faq;
