import React from "react";
import CountUp from "react-countup";
import "./statistika.scss";

const Statistika = () => {
  return (
    <div className="stk-section">
      <ul>
        <li>
          <p className="stk-numbers">
            <CountUp
              start={0}
              end={80}
              duration={2}
              delay={0}
              suffix="+"
              useEasing="yes"
              enableScrollSpy
            />
          </p>
          <span class="stk-vertical-line"></span>
          <p className="stk-text">različitih timova u finalu</p>
        </li>
        <li>
          <p className="stk-numbers">
            <CountUp
              start={0}
              end={100}
              duration={2}
              delay={0}
              suffix="+"
              useEasing="yes"
              enableScrollSpy
            />
          </p>
          <span class="stk-vertical-line"></span>
          <p className="stk-text">kompanija podržalo FON Hakaton</p>
        </li>
        <li>
          <p className="stk-numbers">
            <CountUp
              start={0}
              end={10}
              duration={2}
              delay={0}
              useEasing="yes"
              enableScrollSpy
            />
          </p>
          <span class="stk-vertical-line"></span>
          <p className="stk-text">godina održavanja</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistika;
