import { startOptimizedAppearAnimation } from "framer-motion";
import React from "react";
import { useState } from "react";
import "./faq.scss";

const Faq = () => {
  const [plus, setPlus] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="faq-section">
      <h1 className="faq-naslov">Često postavljana pitanja</h1>

      <div className="faq-box">
        {dataFaq.map((item, i) => (
          <div className="faq-content" key={i}>
            <div className="faq-horizontal">
              <p className="faq-text">{item.question}</p>
              <p
                className={
                  selected === i
                    ? "faq-plus faq-plus-animation1"
                    : "faq-plus faq-plus-animation2"
                }
                onClick={() => {
                  toggle(i);
                  //toggleState();
                }}
              >
                +
              </p>
            </div>

            <p
              className={
                selected === i ? "faq-text-moving show" : "faq-text-moving"
              }
            >
              {item.answer}
            </p>
            {/* <span class="faq-horizontal-line" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

const dataFaq = [
  {
    question: "Ko se može prijaviti",
    answer:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim dedee nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam",
  },

  {
    question: "Ko se može prijaviti",
    answer:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim dedee nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam",
  },

  {
    question: "Ko se može prijaviti",
    answer:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim dedee nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam",
  },

  {
    question: "Ko se može prijaviti",
    answer:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim dedee nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam",
  },

  {
    question: "Ko se može prijaviti",
    answer:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed enim dedee nihil aut tenetur ipsam, commodi aliquam suscipit corporis, quibusdam",
  },
];

export default Faq;
