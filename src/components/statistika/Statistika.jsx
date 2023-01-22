import React from "react";
import CountUp from "react-countup";
import "./statistika.scss";

const Statistika = () => {
  return (
    <div className="stk-center">
      <ul>
        <li>
          <p className="stk-numbers">
            <CountUp start={0} end={100} duration={2} delay={0} /> +
          </p>
          <span class="stk-vertical-line"></span>
          <p className="stk-text">Lorem ipsum dolor</p>
        </li>
        <li>
          <p className="stk-numbers">
            <CountUp start={0} end={100} duration={2} delay={0} /> +
          </p>
          <span class="stk-vertical-line"></span>
          <p className="stk-text">Lorem ipsum dolor</p>
        </li>
        <li>
          <p className="stk-numbers">
            <CountUp start={0} end={100} duration={2} delay={0} /> +
          </p>
          <span class="stk-vertical-line"></span>
          <p className="stk-text">Lorem ipsum dolor</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistika;
