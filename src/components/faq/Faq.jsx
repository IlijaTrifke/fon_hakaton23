import React from "react";
import "./faq.scss";

const Faq = () => {
  return (
    <div className="faq-section">
      <h1 className="faq-naslov">Često postavljana pitanja</h1>

      <div className="faq-box">
        <div className="faq-horizontal">
          <p>Ko se može prijaviti</p>
          <div className="faq-plus">+</div>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim,
          nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam
          labore expedita quis. Eius, libero tempore delectus laboriosam
          consequuntur exercitationem veniam.
        </p>
      </div>
    </div>
  );
};

export default Faq;
