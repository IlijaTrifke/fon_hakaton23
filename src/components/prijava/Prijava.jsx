import React from "react";
import CountUp from "react-countup";
import "./prijava.scss";
import Kevin from "./img/pr-kocka.png";
import Iks from "./img/pr-exit.png";
import Strelica from "./img/pr-strelica-dugme.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

const Prijava = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const ref = useRef(null);
  const [ime1, setIme1] = useState("");
  const [ime2, setIme2] = useState("");
  const [ime3, setIme3] = useState("");
  const [ime4, setIme4] = useState("");
  const [imejl1, setImejl1] = useState("");
  const [imejl2, setImejl2] = useState("");
  const [imejl3, setImejl3] = useState("");
  const [imejl4, setImejl4] = useState("");
  const [brojTelefona1, setbrojTelefon1] = useState("");
  const [brojTelefona2, setbrojTelefon2] = useState("");
  const [brojTelefona3, setbrojTelefon3] = useState("");
  const [brojTelefona4, setbrojTelefon4] = useState("");
  const [status1, setStatus1] = useState("Zaposlen");
  const [status2, setStatus2] = useState("Zaposlen");
  const [status3, setStatus3] = useState("Zaposlen");
  const [status4, setStatus4] = useState("Zaposlen");
  const [imeSkoleFirme1, setimeSkoleFirme1] = useState("");
  const [imeSkoleFirme2, setimeSkoleFirme2] = useState("");
  const [imeSkoleFirme3, setimeSkoleFirme3] = useState("");
  const [imeSkoleFirme4, setimeSkoleFirme4] = useState("");
  const [cv1, setCv1] = useState("");
  const [cv2, setCv2] = useState("");
  const [cv3, setCv3] = useState("");
  const [cv4, setCv4] = useState("");
  const [git1, setGit1] = useState("");
  const [git2, setGit2] = useState("");
  const [git3, setGit3] = useState("");
  const [git4, setGit4] = useState("");
  const [pitanje1, setPitanje1] = useState("");
  const [pitanje2, setPitanje2] = useState("");
  const [pitanje3, setPitanje3] = useState("");
  const [pitanje4, setPitanje4] = useState("");

  const [error, setError] = useState(false);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = (poruka) => {
    setModalMessage(poruka);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalMessage("");
    setModalOpen(false);
  };

  const postPrijava = async (prijava) => {
    // console.log("Post zahtev za prijava");
    console.log(prijava);

    try {
      const response = await fetch("http://localhost:5000/prijave/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prijava),
      });
      const data = await response.json();
      if (data.success) {
        openModal("Uspesno poslata prijava");
      } else {
        openModal(data.msg);
      }
    } catch (e) {
      openModal(e.message);
    } finally {
    }
  };

  const posaljiPrijavu = async () => {
    if (!ime1 || !ime2 || !validateEmail(imejl1)) {
      setError(true);
      return;
    }

    const prijava = {
      pitanje1,
      pitanje2,
      pitanje3,
      pitanje4,
      clanovi: [
        {
          imePrezime: ime1,
          email: imejl1,
          brojTelefona: brojTelefona1,
          status: status1,
          godinaStudija: imeSkoleFirme1,
          linkCV: cv1,
          linkGit: git1,
        },
        {
          imePrezime: ime2,
          email: imejl2,
          brojTelefona: brojTelefona2,
          status: status2,
          godinaStudija: imeSkoleFirme2,
          linkCV: cv2,
          linkGit: git2,
        },
        {
          imePrezime: ime3,
          email: imejl3,
          brojTelefona: brojTelefona3,
          status: status3,
          godinaStudija: imeSkoleFirme3,
          linkCV: cv3,
          linkGit: git3,
        },
        {
          imePrezime: ime4,
          email: imejl4,
          brojTelefona: brojTelefona4,
          status: status4,
          godinaStudija: imeSkoleFirme4,
          linkCV: cv4,
          linkGit: git4,
        },
      ],
    };

    postPrijava(prijava);
  };

  // function ProverPitanja() {
  //   if (pitanje1 === "") {
  //     document
  //       .getElementById("pr-teamname")
  //       .style.setProperty("border", "double 8px red");
  //   } else {
  //     document
  //       .getElementById("pr-motivation")
  //       .style.setProperty("border", "double 4px transparent");
  //   }
  // }

  return (
    <div class="pr-prijava">
      <div class="pr-header">
        <h1 class="pr-h1">Forma za prijavu</h1>
        <div class="pr-exit-text">
          <p onClick={goBack}>Izađi</p>
          <img class="pr-exit" src={Iks} onClick={goBack}></img>
        </div>
      </div>
      <form class="pr-team-data">
        <div class="pr-content">
          <div class="pr-members">
            <div class="pr-member">
              <h1 class="pr-h1_m">Član 1</h1>
              <lable class="pr-lable" for="pr-name_m1">
                Ime i prezime
              </lable>
              <input
                type="text"
                class={`pr-text ${error && ime1 === "" ? "errorClass" : ""}`}
                id="pr-name_m1"
                onChange={(e) => {
                  setIme1(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-email_m1">
                Imejl
              </lable>
              <input
                type="email"
                class={`pr-text ${
                  error && !validateEmail(imejl1) ? "errorClass" : ""
                }`}
                id="pr-email_m1"
                onChange={(e) => {
                  setImejl1(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-phone_m1">
                Broj Telefona
              </lable>
              <input
                type="text"
                class="pr-text"
                id="pr-phone_m1"
                required
                onChange={(e) => {
                  setbrojTelefon1(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-select_m1">
                Status: zaposlen, student, srednjoškolac
              </lable>
              <select
                class="pr-select"
                id="pr-select_m1"
                onChange={(e) => {
                  setStatus1(e.target.value);
                }}
                required
              >
                <option value="zaposlen">Zaposlen</option>
                <option value="student">Student</option>
                <option value="srednjoskolac">Srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m1">
                Godina i naziv studija/ srednje škole
              </lable>
              <input
                type="text"
                class="pr-text"
                onChange={(e) => {
                  setimeSkoleFirme1(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-cv_m1">
                Link ka CV-ju
              </lable>
              <input
                type="File"
                class="pr-text"
                id="pr-cv_m1"
                placeholder=""
                onClick={(e) => {
                  setCv1(e.target.files[0]);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-git_m1">
                Link ka repozitorijumu na GitHub-u
              </lable>
              <input
                type="url"
                class="pr-text"
                id="pr-git_m1"
                onChange={(e) => {
                  setGit1(e.target.value);
                }}
                required
              ></input>
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 2</h1>
              <lable class="pr-lable" for="pr-name_m2">
                Ime i prezime
              </lable>
              <input
                type="text"
                class={`pr-text ${error && ime2 === "" ? "errorClass" : ""}`}
                id="pr-name_m2"
                onChange={(e) => {
                  setIme2(e.target.value);
                }}
                required
              ></input>
              {error && ime2 === "" && <label>Ime je obavezno!</label>}
              <lable class="pr-lable" for="pr-email_m2">
                Imejl
              </lable>
              <input
                type="email"
                class="pr-text"
                id="pr-email_m2"
                onChange={(e) => {
                  setImejl2(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-phone_m2">
                Broj Telefona
              </lable>
              <input
                type="text"
                class="pr-text"
                id="pr-phone_m2"
                onChange={(e) => {
                  setbrojTelefon2(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-select_m2">
                Status: zaposlen, student, srednjoškolac
              </lable>
              <select
                class="pr-select"
                id="pr-select_m2"
                onClick={(e) => {
                  setStatus2(e.target.value);
                }}
              >
                <option value="zaposlen">Zaposlen</option>
                <option value="student">Student</option>
                <option value="srednjoskolac">Srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m2">
                Godina i naziv studija/ srednje škole
              </lable>
              <input
                type="text"
                class="pr-text"
                onChange={(e) => {
                  setimeSkoleFirme2(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-cv_m2">
                Link ka CV-ju
              </lable>
              <input
                type="file"
                class="pr-text"
                id="pr-cv_m2"
                placeholder=""
                onClick={(e) => {
                  setCv2(e.target.files[0]);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-git_m2">
                Link ka repozitorijumu na GitHub-u
              </lable>
              <input
                type="url"
                class="pr-text"
                id="pr-git_m2"
                onChange={(e) => {
                  setGit2(e.target.value);
                }}
                required
              ></input>
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 3</h1>
              <lable class="pr-lable" for="pr-name_m3">
                Ime i prezime
              </lable>
              <input
                type="text"
                class="pr-text"
                id="pr-name_m3"
                onChange={(e) => {
                  setIme3(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-email_m3">
                Imejl
              </lable>
              <input
                type="email"
                class="pr-text"
                id="pr-email_m3"
                onChange={(e) => {
                  setImejl3(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-phone_m3">
                Broj Telefona
              </lable>
              <input
                type="text"
                class="pr-text"
                id="pr-phone_m3"
                onChange={(e) => {
                  setbrojTelefon3(e.target.value);
                }}
                required
              ></input>
              <lable
                class="pr-lable"
                for="pr-select_m3"
                onChange={(e) => {
                  setStatus3(e.target.value);
                }}
              >
                Status: zaposlen, student, srednjoškolac
              </lable>
              <select class="pr-select" id="pr-select_m3">
                <option value="zaposlen">Zaposlen</option>
                <option value="student">Student</option>
                <option value="srednjoskolac">Srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m3">
                Godina i naziv studija/ srednje škole
              </lable>
              <input
                type="text"
                class="pr-text"
                onChange={(e) => {
                  setimeSkoleFirme3(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-cv_m3">
                Link ka CV-ju
              </lable>
              <input
                type="file"
                class="pr-text"
                id="pr-cv_m3"
                placeholder=""
                onClick={(e) => {
                  setCv3(e.target.files[0]);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-git_m3">
                Link ka repozitorijumu na GitHub-u
              </lable>
              <input
                type="url"
                class="pr-text"
                id="pr-git_m3"
                onChange={(e) => {
                  setGit3(e.target.value);
                }}
                required
              ></input>
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 4</h1>
              <lable class="pr-lable" for="pr-name_m4">
                Ime i prezime
              </lable>
              <input
                type="text"
                class="pr-text"
                id="pr-name_m4"
                onChange={(e) => {
                  setIme4(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-email_m4">
                Imejl
              </lable>
              <input
                type="email"
                class="pr-text"
                id="pr-email_m4"
                onChange={(e) => {
                  setImejl4(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-phone_m4">
                Broj Telefona
              </lable>
              <input
                type="text"
                class="pr-text"
                id="pr-phone_m4"
                onChange={(e) => {
                  setbrojTelefon4(e.target.value);
                }}
                required
              ></input>
              <lable
                class="pr-lable"
                for="pr-select_m4"
                onClick={(e) => {
                  setStatus4(e.target.value);
                }}
              >
                Status: zaposlen, student, srednjoškolac
              </lable>
              <select class="pr-select" id="pr-select_m4">
                <option value="zaposlen">Zaposlen</option>
                <option value="student">Student</option>
                <option value="srednjoskolac">Srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m4">
                Godina i naziv fakulteta/ srednje škole
              </lable>
              <input
                type="text"
                class="pr-text"
                onChange={(e) => {
                  setimeSkoleFirme4(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-cv_m4">
                Link ka CV-ju
              </lable>
              <input
                type="file"
                class="pr-text"
                id="pr-cv_m4"
                placeholder=""
                onClick={(e) => {
                  setCv4(e.target.files[0]);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-git_m4">
                Link ka repozitorijumu na GitHub-u
              </lable>
              <input
                type="url"
                class="pr-text"
                id="pr-git_m4"
                onChange={(e) => {
                  setGit4(e.target.value);
                }}
                required
              ></input>
            </div>
          </div>
          <div class="pr-team">
            <div class="pr-kevin">
              <img src={Kevin} class="pr-kevin-img" />
            </div>

            <div class="pr-team-info">
              <h1 class="pr-h1_m">Tim</h1>
              <lable class="pr-lable" for="pr-teamname">
                Ime Tima
              </lable>
              <input
                ref={ref}
                type="text"
                class="pr-text"
                id="pr-teamname"
                onChange={(e) => setPitanje1(e.target.value)}
                required
              ></input>
              <lable class="pr-lable" for="pr-motivation">
                Navedite i opišite prethodna iskustva u grupnom radu, a ako do
                sada niste radili zajedno, opišite vaša pojedinačna iskustva.
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-motivation"
                onChange={(e) => setPitanje2(e.target.value)}
                required
              ></textarea>
              <lable class="pr-lable" for="pr-vrline">
                Šta vas je navelo da se prijavite na hakaton i šta želite da
                postignete i naučite učestvovanjem na ovom takmičenju?
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-vrline"
                onChange={(e) => {
                  setPitanje3(e.target.value);
                }}
                required
              ></textarea>
              <lable class="pr-lable" for="pr-motivation">
                Šta biste istakli kao svoje vrline i mane koje bi uticale na
                uspeh celog tima na takmičenju?
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-motivation"
                onChange={(e) => setPitanje4(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div class="pr-footer">
          <div class="pr-footer-dugme">
            <input
              type="submit"
              id="pr-submit"
              class="pr-submit"
              value="Pošalji prijavu"
              onClick={(e) => {
                e.preventDefault();
                posaljiPrijavu();
                //ProverPitanja();
              }}
            ></input>
            <img src={Strelica} class="pr-strelica-img"></img>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prijava;
