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
          line.style.bottom = `8%`;
        }

        sections.forEach((item) => {
          // //console.log(item);
          const rect = item.getBoundingClientRect(); //     //console.log(rect);

          if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add("show-me");
          }
        }); // //console.log(up, down);

        prevScrollY = window.scrollY;
      }

      scrollHandler();
      line.style.display = "block";
      window.addEventListener("scroll", scrollHandler);
    }
  };

  return (
    <div className="agn-section" ref={timlineRef}>
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
              <h2 className="agn-date">3. mart 2023.</h2>
              <p className="agn-descr">
                Samo nekoliko koraka deli vas od učešća na takmičenju koje će
                vam svojom uprčatljivom atmosferom pokazati moć programiranja i
                timskog rada. Popunjavanjem prijave na sajtu vaš tim će ući u
                prvi krug selekcije.
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Otvaranje prijava</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">3. mart 2023.</h2>
              <p className="agn-descr">
                Samo nekoliko koraka deli vas od učešća na takmičenju koje će
                vam svojom uprčatljivom atmosferom pokazati moć programiranja i
                timskog rada. Popunjavanjem prijave na sajtu vaš tim će ući u
                prvi krug selekcije.
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Otvaranje prijava</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">3. mart 2023.</h2>
              <p className="agn-descr">
                Samo nekoliko koraka deli vas od učešća na takmičenju koje će
                vam svojom uprčatljivom atmosferom pokazati moć programiranja i
                timskog rada. Popunjavanjem prijave na sajtu vaš tim će ući u
                prvi krug selekcije.
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Otvaranje prijava</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">3. mart 2023.</h2>
              <p className="agn-descr">
                Samo nekoliko koraka deli vas od učešća na takmičenju koje će
                vam svojom uprčatljivom atmosferom pokazati moć programiranja i
                timskog rada. Popunjavanjem prijave na sajtu vaš tim će ući u
                prvi krug selekcije.
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Otvaranje prijava</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">3. mart 2023.</h2>
              <p className="agn-descr">
                Samo nekoliko koraka deli vas od učešća na takmičenju koje će
                vam svojom uprčatljivom atmosferom pokazati moć programiranja i
                timskog rada. Popunjavanjem prijave na sajtu vaš tim će ući u
                prvi krug selekcije.
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <h1 className="agn-head">Otvaranje prijava</h1>
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">3. mart 2023.</h2>
              <p className="agn-descr">
                Samo nekoliko koraka deli vas od učešća na takmičenju koje će
                vam svojom uprčatljivom atmosferom pokazati moć programiranja i
                timskog rada. Popunjavanjem prijave na sajtu vaš tim će ući u
                prvi krug selekcije.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
