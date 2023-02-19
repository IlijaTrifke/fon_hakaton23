import React from "react";
import "./prijava.scss";
import Kevin from "./img/cube.webm";
import Iks from "./img/pr-exit.png";
import Strelica from "./img/pr-strelica-dugme.png";
import Choose from "./img/choose.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { Upload } from "upload-js";
import Popup from "reactjs-popup";

const upload = Upload({ apiKey: "public_FW25b4V4ALwH6oZJdyGdwaxjzmZX" });
const leki = () => document.getElementById("selectFile").click();
const FileUploadButton = (props) => {
  async function onFileSelected(event) {
    const [file] = event.target.files;
    const { fileUrl } = await upload.uploadFile(file, {
      onBegin: ({ cancel }) => console.log("File upload started!"),
      onProgress: ({ progress }) =>
        console.log(`File uploading... ${progress}%`),
    });
    console.log(`File uploaded! ${fileUrl}`);
    props.onChange(fileUrl);
  }
  return (
    <input
      id="selectFile"
      type="file"
      className="file"
      onChange={(e) => onFileSelected(e)}
    />
  );
  //tu sam mijenjao
};

const PopupExample = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);

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
  const [imeSkole1, setimeSkole1] = useState("");
  const [imeSkole2, setimeSkole2] = useState("");
  const [imeSkole3, setimeSkole3] = useState("");
  const [imeSkole4, setimeSkole4] = useState("");
  const [cv1, setCv1] = useState("");
  const [cv2, setCv2] = useState("");
  const [cv3, setCv3] = useState("");
  const [cv4, setCv4] = useState("");
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
    try {
      const response = await fetch(
        // "https://fh-server-main.onrender.com/prijave/api",
        "http://localhost:5000/prijave/api",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(prijava),
        }
      );
      const data = await response.json();
      if (data.success) {
        //setIme1("");
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
    if (
      !ime1 ||
      !ime2 ||
      !ime3 ||
      !ime4 ||
      !imejl1 ||
      !imejl2 ||
      !imejl3 ||
      !imejl4 ||
      !brojTelefona1 ||
      !brojTelefona2 ||
      !brojTelefona3 ||
      !brojTelefona4 ||
      !imeSkole1 ||
      !imeSkole2 ||
      !imeSkole3 ||
      !imeSkole4 ||
      !pitanje1 ||
      !pitanje2 ||
      !pitanje3 ||
      !pitanje4 ||
      !validateEmail(imejl1) ||
      !validateEmail(imejl2) ||
      !validateEmail(imejl3) ||
      !validateEmail(imejl4) ||
      cv1 === null ||
      cv2 === null ||
      cv3 === null ||
      cv4 === null
    ) {
      setError(true);
      //radi testiranja praznjenja kopirati ovde
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
          imeSkole: imeSkole1,
          linkCV: cv1,
        },
        {
          imePrezime: ime2,
          email: imejl2,
          brojTelefona: brojTelefona2,
          status: status2,
          imeSkole: imeSkole2,
          linkCV: cv2,
        },
        {
          imePrezime: ime3,
          email: imejl3,
          brojTelefona: brojTelefona3,
          status: status3,
          imeSkole: imeSkole3,
          linkCV: cv3,
        },
        {
          imePrezime: ime4,
          email: imejl4,
          brojTelefona: brojTelefona4,
          status: status4,
          imeSkole: imeSkole4,
          linkCV: cv4,
        },
      ],
    };

    postPrijava(prijava);

    //praznjenje polja
    setIme1(" ");
    document.getElementById("pr-name_m1").value = " ";
    setIme2(" ");
    document.getElementById("pr-name_m2").value = " ";
    setIme3(" ");
    document.getElementById("pr-name_m3").value = " ";
    setIme4(" ");
    document.getElementById("pr-name_m4").value = " ";
    //setImejl1(" ");
    document.getElementById("pr-email_m1").value = " ";
    // setImejl2(" ");
    document.getElementById("pr-email_m2").value = " ";
    //setImejl3(" ");
    document.getElementById("pr-email_m3").value = " ";
    // setImejl4(" ");
    document.getElementById("pr-email_m4").value = " ";
    setbrojTelefon1(" ");
    document.getElementById("pr-phone_m1").value = " ";
    setbrojTelefon2(" ");
    document.getElementById("pr-phone_m2").value = " ";
    setbrojTelefon3(" ");
    document.getElementById("pr-phone_m3").value = " ";
    setbrojTelefon4(" ");
    document.getElementById("pr-phone_m4").value = " ";
    setimeSkole1(" ");
    document.getElementById("pr-year_m1").value = " ";
    setimeSkole2(" ");
    document.getElementById("pr-year_m2").value = " ";
    setimeSkole3(" ");
    document.getElementById("pr-year_m3").value = " ";
    setimeSkole4(" ");
    document.getElementById("pr-year_m4").value = " ";
    setPitanje1(" ");
    document.getElementById("pr-teamname").value = " ";
    setPitanje2(" ");
    document.getElementById("pr-motivation").value = " ";
    setPitanje3(" ");
    document.getElementById("pr-iskustvo").value = " ";
    setPitanje4(" ");
    document.getElementById("pr-vrline").value = " ";
  };

  return (
    <div class="pr-prijava">
      <div class="pr-header">
        <h1 class="pr-h1">Prijava</h1>
        <div class="pr-exit-text">
          <p onClick={goBack}>Početna</p>
          <img class="pr-exit" src={Iks} onClick={goBack} alt="Exit"></img>
        </div>
      </div>
      {/* {modalOpen && } */}
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
              {error && ime1 === "" && (
                <label class="pr-lable-error">Ime je obavezno!</label>
              )}
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
                Broj telefona
              </lable>
              <input
                type="text"
                class={`pr-text ${
                  error && brojTelefona1 === "" ? "errorClass" : ""
                }`}
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
                Godina i naziv studija/srednje škole
              </lable>
              <input
                type="text"
                id="pr-year_m1"
                class={`pr-text ${
                  error && imeSkole1 === "" ? "errorClass" : ""
                }`}
                onChange={(e) => {
                  setimeSkole1(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-cv_m1">
                Link ka CV-ju
              </lable>

              <FileUploadButton
                onChange={(fileUrl) => {
                  setCv1(fileUrl);
                }}
              />
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
              {error && ime2 === "" && (
                <label class="pr-lable-error">Ime je obavezno!</label>
              )}
              <lable class="pr-lable" for="pr-email_m2">
                Imejl
              </lable>
              <input
                type="email"
                class={`pr-text ${
                  error && !validateEmail(imejl2) ? "errorClass" : ""
                }`}
                id="pr-email_m2"
                onChange={(e) => {
                  setImejl2(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-phone_m2">
                Broj telefona
              </lable>
              <input
                type="text"
                class={`pr-text ${
                  error && brojTelefona2 === "" ? "errorClass" : ""
                }`}
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
                Godina i naziv studija/srednje škole
              </lable>
              <input
                type="text"
                id="pr-year_m2"
                class={`pr-text ${
                  error && imeSkole2 === "" ? "errorClass" : ""
                }`}
                onChange={(e) => {
                  setimeSkole2(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-cv_m2">
                Link ka CV-ju
              </lable>

              <FileUploadButton
                onChange={(fileUrl) => {
                  setCv2(fileUrl);
                }}
              />
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 3</h1>
              <lable class="pr-lable" for="pr-name_m3">
                Ime i prezime
              </lable>
              <input
                type="text"
                class={`pr-text ${error && ime3 === "" ? "errorClass" : ""}`}
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
                class={`pr-text ${
                  error && !validateEmail(imejl3) ? "errorClass" : ""
                }`}
                id="pr-email_m3"
                onChange={(e) => {
                  setImejl3(e.target.value);
                }}
                required
              ></input>
              <lable class="pr-lable" for="pr-phone_m3">
                Broj telefona
              </lable>
              <input
                type="text"
                class={`pr-text ${
                  error && brojTelefona3 === "" ? "errorClass" : ""
                }`}
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
                Godina i naziv studija/srednje škole
              </lable>
              <input
                type="text"
                id="pr-year_m3"
                class={`pr-text ${
                  error && imeSkole3 === "" ? "errorClass" : ""
                }`}
                onChange={(e) => {
                  setimeSkole3(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-cv_m3">
                Link ka CV-ju
              </lable>

              <FileUploadButton
                onChange={(fileUrl) => {
                  setCv3(fileUrl);
                }}
              />
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 4</h1>
              <lable class="pr-lable" for="pr-name_m4">
                Ime i prezime
              </lable>
              <input
                type="text"
                class={`pr-text ${error && ime4 === "" ? "errorClass" : ""}`}
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
                class={`pr-text ${
                  error && !validateEmail(imejl4) ? "errorClass" : ""
                }`}
                id="pr-email_m4"
                onChange={(e) => {
                  setImejl4(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-phone_m4">
                Broj telefona
              </lable>
              <input
                type="text"
                class={`pr-text ${
                  error && brojTelefona4 === "" ? "errorClass" : ""
                }`}
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
                Godina i naziv studija/srednje škole
              </lable>
              <input
                type="text"
                id="pr-year_m4"
                class={`pr-text ${
                  error && imeSkole4 === "" ? "errorClass" : ""
                }`}
                onChange={(e) => {
                  setimeSkole4(e.target.value);
                }}
              ></input>
              <lable class="pr-lable" for="pr-cv_m4">
                Link ka CV-ju
              </lable>

              <FileUploadButton
                onChange={(fileUrl) => {
                  setCv4(fileUrl);
                }}
              />
            </div>
          </div>
          <div class="pr-team">
            <video
              className="pr-kevin"
              autoPlay={true}
              webkit-playsinline
              playsinline="true"
              muted
              type="video/webm"
              controlBar="false"
              loadingSpinner="false"
              bigPlayButton="false"
              loop
            >
              <source src={Kevin} type="video/webm" />
            </video>

            <div class="pr-team-info">
              <h1 class="pr-h1_m">Tim</h1>
              <lable class="pr-lable" for="pr-teamname">
                Ime tima
              </lable>
              <input
                ref={ref}
                type="text"
                class={`pr-text ${
                  error && pitanje1 === "" ? "errorClass" : ""
                }`}
                id="pr-teamname"
                onChange={(e) => setPitanje1(e.target.value)}
                required
              ></input>
              <lable class="pr-lable" for="pr-iskustvo">
                Navedite i opišite prethodna iskustva u grupnom radu, a ako do
                sada niste radili zajedno, opišite vaša pojedinačna iskustva.
              </lable>
              <textarea
                class={`pr-text-team_textarea ${
                  error && pitanje2 === "" ? "errorClass" : ""
                }`}
                id="pr-motivation"
                onChange={(e) => setPitanje2(e.target.value)}
                required
              ></textarea>
              <lable class="pr-lable" for="pr-vrline">
                Šta vas je navelo da se prijavite na hakaton i šta želite da
                postignete i naučite učestvovanjem na ovom takmičenju?
              </lable>
              <textarea
                class={`pr-text-team_textarea ${
                  error && pitanje3 === "" ? "errorClass" : ""
                }`}
                id="pr-vrline"
                onChange={(e) => {
                  setPitanje3(e.target.value);
                }}
                required
              ></textarea>
              <lable class="pr-lable" for="pr-vrline">
                Šta biste istakli kao svoje vrline i mane koje bi uticale na
                uspeh celog tima na takmičenju?
              </lable>
              <textarea
                class={`pr-text-team_textarea ${
                  error && pitanje4 === "" ? "errorClass" : ""
                }`}
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
                PopupExample();
                e.preventDefault();
                posaljiPrijavu();
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
