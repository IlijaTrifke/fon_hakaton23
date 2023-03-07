import React from "react";
import "./agenda.scss";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Agenda = () => {
  const scrollRef = useRef();
  const isInView = useInView(scrollRef);
  useEffect(() => {
    if (isInView) seeRef();
  }, [isInView]);
  var timlineRef = useRef();
  ////console.log(timlineRef.current);

  const seeRef = () => {
    //console.log(timlineRef.current); // <h1 ></h1>
    if (timlineRef.current !== undefined) {
      var sections = timlineRef.current.querySelectorAll(".agn-card");
      var timeline = timlineRef.current.querySelector(".agn-timeline");
      var line = timlineRef.current.querySelector(".agn-line");
      //console.log(sections);
      //console.log(timeline);
      //console.log(line);
      line.style.bottom = `calc(100% - 20px)`;
      let prevScrollY = window.scrollY;
      let up, down;
      let full = false;
      let set = 50;

      const targetY = window.innerHeight * 0.8;

      function scrollHandler(e) {
        const { scrollY } = window;
        up = scrollY < prevScrollY;
        down = !up;
        const timelineRect = timeline.getBoundingClientRect();
        //const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

        const dist = targetY - timelineRect.top + 50;
        //console.log(dist);

        if (down && !full) {
          set = Math.max(set, dist);
          line.style.bottom = `calc(100% - ${set}px)`;
        }

        if (dist > timeline.offsetHeight - 140 && !full) {
          full = true;
          line.style.bottom = `11.9%`;
        }

        sections.forEach((item) => {
          // //console.log(item);
          const rect = item.getBoundingClientRect(); //     //console.log(rect);

          if (rect.top + item.offsetHeight / 2 < targetY) {
            item.classList.add("show-me");
          }
        }); // //console.log(up, down);
        if (sections[4].classList.contains("show-me") && !full) {
          full = true;
          line.style.bottom = `11.9%`;
        }
        prevScrollY = window.scrollY;
      }

      scrollHandler();
      line.style.display = "block";
      window.addEventListener("scroll", scrollHandler);
    }
  };

  return (
    <div className="agn-section" ref={timlineRef}>
      <div id="agenda"></div>
      <div className="agn-balls-wrapper">
        <div className="agn-ball-blur" />
      </div>

      <h1 className="agn-header" ref={scrollRef}>
        Agenda
      </h1>
      <div className="agn-timeline">
        <div className="agn-line"></div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Otvaranje prijava</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">21. februar 2023.</h2>
              <p className="agn-descr">
                Voliš programiranje i spreman si za nove izazove i druženje?
                Okupi ekipu, popuni formu na sajtu i prijavi se za FON Hakaton!
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Zatvaranje prijava</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">6. mart 2023.</h2>
              <p className="agn-descr">
                Nakon zatvaranja prijava, kontaktiraćemo sve kandidate i
                objavićemo detaljnije informacije vezane za online test. Ne
                zaboravi da proveravaš svoj mejl!
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Test IT znanja</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">8. mart 2023.</h2>
              <p className="agn-descr">
                Sledeći korak jeste test IT znanja. Test će se raditi timski
                preko Moodle platforme, a rezultate selekcije ćemo objaviti u
                što kraćem roku.
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Tehnički intervju</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">10. mart 2023.</h2>
              <p className="agn-descr">
                Ono što timove deli od učešća na takmičenju je još samo tehnički
                intervju. Intervjui će se održati preko platforme Google Meet u
                vidu speed dating-a sa predstavnicima FON-a i alumnistima
                FONIS-a, nakon čega najbolje rangirani timovi prolaze u finale.
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">FON Hakaton</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">18. i 19. mart 2023.</h2>
              <p className="agn-descr">
                Za timove koji su prošli selekciju počinje izazov. Timovima je
                na raspolaganju 24 časa da osmisle i razviju svoje softversko
                rešenje, koje će nakon toga predstaviti stručnom žiriju.
                Najbolji tim osvojiće titulu pobednika desetog FON Hakatona!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
