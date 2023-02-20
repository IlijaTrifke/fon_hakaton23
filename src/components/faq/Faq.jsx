import React from "react";
import { useState } from "react";
import "./faq.scss";
import Vector4 from "../../images/Vector4.png";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="faq-section">
        <div id="faq"></div>

        <h1 className="faq-naslov">Često postavljana pitanja</h1>

        <div className="faq-box-wrapper">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const dataFaq = [
  {
    question: "Ko se sve može prijaviti za učešće?",
    answer:
      "Pravo učešća na jubilarnom, desetom, FON Hakatonu imaju svi stariji od 16, a mlađi od 26 godina, bez obzira na državljanstvo i stepen formalnog obrazovanja.",
  },

  {
    question: "Da li mi je potrebno određeno predznanje?",
    answer:
      "Predznanje o određenim tehnologijama je neophodno, pre svega zbog samog procesa selekcije, gde će tvoje znanje biti testirano, ali i kasnije na samom takmičenju. Sa svojim timom ćeš prvo razvijati softversko rešenje na zadati problem, a potom ćete zajedno prezentovati isto pred stručnim žirijem.",
  },

  {
    question: "Kako izgleda selekcija?",
    answer:
      "Sama selekcija se sastoji iz dva kruga. Prvi krug predstavlja ocenjivanje timske prijave, poslatih 	CV-jeva i testa IT znanja. Najbolje rangirane timove čeka drugi krug selekcije - tehnički intervjui koji će se održati u formi speed dating-a na Fakultetu organizacionih nauka. Nakon drugog kruga selekcije, deset timova koji budu imali najveću ukupnu ocenu, dobiće priliku da svoje veštine prikažu u finalu Hakatona.",
  },

  {
    question: "Da li mi je potreban računar ili druga vrsta prateće opreme?",
    answer:
      " Bilo bi poželjno da poneseš svoj računar.  Iako će biti obezbeđena fakultetska oprema, na njoj se ne može instalirati nikakav dodatni softver, već se može koristiti samo ono što već postoji na samim računarima. ",
  },

  {
    question: "Da li se mogu prijaviti individualno?",
    answer:
      "Hakaton je timsko takmičenje, pa samim tim potrebno je da pronađeš svoj tim i da se svi zajedno prijavite.",
  },

  {
    question: "Ko su mentori na takmičenju i kako ti mogu pomoći?",
    answer:
      "Mentori su podrška timu tokom takmičenja. Oni će biti tu za sva postavljena pitanja u određenim vremenskim terminima. Mentorsku podršku čine stručnjaci, konkretno nastavnici i saradnici sa Fakulteta organizacionih nauka, kao i stručnjaci ispred partnerske kompanije i alumni članovi FONIS-a.",
  },
];

export default Faq;
