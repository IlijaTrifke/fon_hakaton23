import React from "react";
import "./prijava.scss";
import Kevin from "./img/cube.webm";
import Iks from "./img/pr-exit.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { Upload } from "upload-js";
import Popup from "reactjs-popup";
import { HashLink } from "react-router-hash-link";

const upload = Upload({ apiKey: "public_FW25b4V4ALwH6oZJdyGdwaxjzmZX" });

const FileUploadButton = (props) => {
  async function onFileSelected(event) {
    const [file] = event.target.files;
    console.log(event.target.files);
    const { fileUrl } = await upload.uploadFile(file, {
      onBegin: ({ cancel }) => console.log("File upload started!"),
      onProgress: ({ progress }) =>
        console.log(`File uploading... ${progress}%`),
    });
    console.log(`File uploaded! ${fileUrl}`);
    console.log(file.name);
    //document.getElementById("pr-test").innerHTML = file.name;
    props.onChange(fileUrl);
  }

  // <input type="file" class="pr-text" onChange={(e) => onFileSelected(e)} />
  // {/* <label for="file-upload" class="custom-file-upload" id="pr-test">
  //   <i class="fa fa-cloud-upload"></i>Izaberi fajl
  // </label> */}
  return (
    <>
      <input
        id={props.id}
        className={`pr-text ${props.error && !props.prom ? "errorClass" : ""}`}
        type="file"
        onChange={(e) => onFileSelected(e)}
        required
      />
      {props.error && !props.prom && (
        <label class="pr-lable-error">CV je obavezan!</label>
      )}
    </>
  );
};

const PopupExample = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);

const Prijava = () => {
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
  const [error1, setError1] = useState(false);

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
        "https://fh-server-main.onrender.com/prijave/api",
        // "http://localhost:5000/prijave/api",
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
      !imejl1 ||
      !imejl2 ||
      !imejl3 ||
      !brojTelefona1 ||
      !brojTelefona2 ||
      !brojTelefona3 ||
      !imeSkole1 ||
      !imeSkole2 ||
      !imeSkole3 ||
      !pitanje1 ||
      !pitanje2 ||
      !pitanje3 ||
      !pitanje4 ||
      !validateEmail(imejl1) ||
      !validateEmail(imejl2) ||
      !validateEmail(imejl3) ||
      cv1 === null ||
      cv2 === null ||
      cv3 === null
    ) {
      setError(true);

      //radi testiranja praznjenja kopirati ovde
      return;
    }

    if (ime4 || imeSkole4 || brojTelefona4 || validateEmail(imejl4) || cv4) {
      if (
        !(ime4 && imeSkole4 && brojTelefona4 && validateEmail(imejl4) && cv4)
      ) {
        setError1(true);

        return;
      }
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
        // ...(someCondition && {b: 5})
        ...(ime4 && imeSkole4 && brojTelefona4 && validateEmail(imejl4) && cv4
          ? [
              {
                imePrezime: ime4,
                email: imejl4,
                brojTelefona: brojTelefona4,
                status: status4,
                imeSkole: imeSkole4,
                linkCV: cv4,
              },
            ]
          : [
              {
                imePrezime: "/",
                email: "/",
                brojTelefona: "/",
                status: "/",
                imeSkole: "/",
                linkCV: "/",
              },
            ]),
      ],
    };

    postPrijava(prijava);

    //praznjenje polja
    setIme1("");
    setIme2("");
    setIme3("");
    setIme4("");
    setImejl1("");
    setImejl2("");
    setImejl3("");
    setImejl4("");
    setbrojTelefon1("");
    setbrojTelefon2("");
    setbrojTelefon3("");
    setbrojTelefon4("");
    setimeSkole1("");
    setimeSkole2("");
    setimeSkole3("");
    setimeSkole4("");
    setPitanje1("");
    setPitanje2("");
    setPitanje3("");
    setPitanje4("");
    setCv1("");
    setCv2("");
    setCv3("");
    setCv4("");
    document.getElementById("pr-team-data").reset();
    setError1(false);
    setError(false);
  };

  return (
    <div class="pr-prijava">
      <div class="pr-header">
        <h1 class="pr-h1">Forma za prijavu</h1>
        <HashLink to="/#pocetna" class="pr-exit-text">
          <p className="pr-exit-p">Početna</p>
          <img class="pr-exit" src={Iks} alt="Exit"></img>
        </HashLink>
      </div>
      {/* {modalOpen && } */}
      <form class="pr-team-data" id="pr-team-data">
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
              {error && !validateEmail(imejl1) && (
                <label class="pr-lable-error">
                  Imejl je obavezan i mora biti u formatu!
                </label>
              )}
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
              {error && brojTelefona1 === "" && (
                <label class="pr-lable-error">Broj telefona je obavezan!</label>
              )}
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
                required
              ></input>
              {error && imeSkole1 === "" && (
                <label class="pr-lable-error">Naziv je obavezan!</label>
              )}
              <lable class="pr-lable" for="pr-cv_m1">
                Vaš CV
              </lable>

              <FileUploadButton
                id="pr-cv_m1"
                onChange={(fileUrl) => {
                  setCv1(fileUrl);
                }}
                error={error}
                prom={cv1}
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
              {error && !validateEmail(imejl2) && (
                <label class="pr-lable-error">
                  Imejl je obavezan i mora biti u formatu!
                </label>
              )}
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
              {error && brojTelefona2 === "" && (
                <label class="pr-lable-error">Broj telefona je obavezan!</label>
              )}
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
              {error && imeSkole2 === "" && (
                <label class="pr-lable-error">Naziv je obavezan!</label>
              )}
              <lable class="pr-lable" for="pr-cv_m2">
                Vaš CV
              </lable>

              <FileUploadButton
                id="pr-cv_m2"
                onChange={(fileUrl) => {
                  setCv2(fileUrl);
                }}
                error={error}
                prom={cv2}
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
              {error && ime3 === "" && (
                <label class="pr-lable-error">Ime je obavezno!</label>
              )}
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
              {error && !validateEmail(imejl3) && (
                <label class="pr-lable-error">
                  Imejl je obavezan i mora biti u formatu!
                </label>
              )}
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
              {error && brojTelefona3 === "" && (
                <label class="pr-lable-error">Broj telefona je obavezan!</label>
              )}
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
              {error && imeSkole3 === "" && (
                <label class="pr-lable-error">Naziv je obavezan!</label>
              )}
              <lable class="pr-lable" for="pr-cv_m3">
                Vaš CV
              </lable>

              <FileUploadButton
                id="pr-cv_m3"
                onChange={(fileUrl) => {
                  setCv3(fileUrl);
                }}
                error={error}
                prom={cv3}
              />
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 4 (Opcionalno)</h1>
              <lable class="pr-lable" for="pr-name_m4">
                Ime i prezime
              </lable>
              <input
                type="text"
                class={`pr-text ${error1 && !ime4 ? "errorClass" : ""}`}
                id="pr-name_m4"
                onChange={(e) => {
                  setIme4(e.target.value);
                }}
              ></input>
              {error1 && !ime4 && (
                <label class="pr-lable-error">Ime je obavezno!</label>
              )}
              <lable class="pr-lable" for="pr-email_m4">
                Imejl
              </lable>
              <input
                type="email"
                class={`pr-text ${
                  error1 && !validateEmail(imejl4) ? "errorClass" : ""
                }`}
                id="pr-email_m4"
                onChange={(e) => {
                  setImejl4(e.target.value);
                }}
              ></input>
              {error1 && !validateEmail(imejl4) && (
                <label class="pr-lable-error">
                  Imejl je obavezan i mora biti u formatu!
                </label>
              )}
              <lable class="pr-lable" for="pr-phone_m4">
                Broj telefona
              </lable>
              <input
                type="text"
                class={`pr-text ${
                  error1 && brojTelefona4 === "" ? "errorClass" : ""
                }`}
                id="pr-phone_m4"
                onChange={(e) => {
                  setbrojTelefon4(e.target.value);
                }}
              ></input>
              {error1 && !brojTelefona4 && (
                <label class="pr-lable-error">Broj telefona je obavezan!</label>
              )}
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
                  error1 && imeSkole4 === "" ? "errorClass" : ""
                }`}
                onChange={(e) => {
                  setimeSkole4(e.target.value);
                }}
              ></input>
              {error1 && !imeSkole4 && (
                <label class="pr-lable-error">Naziv je obavezan!</label>
              )}
              <lable class="pr-lable" for="pr-cv_m4">
                Vaš CV
              </lable>

              <FileUploadButton
                id="pr-cv_m4"
                onChange={(fileUrl) => {
                  setCv4(fileUrl);
                }}
                error={error1}
                prom={cv4}
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
                Ime Tima
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
              {error && pitanje1 === "" && (
                <label class="pr-lable-error">Ime tima je obavezno!</label>
              )}
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
              {error && pitanje2 === "" && (
                <label class="pr-lable-error">Ovo polje je obavezno!</label>
              )}
              <lable class="pr-lable" for="pr-vrline">
                Šta vas je navelo da se prijavite na hakaton i šta želite da
                postignete i naučite učestvovanjem na ovom takmičenju?
              </lable>
              <textarea
                class={`pr-text-team_textarea ${
                  error && pitanje3 === "" ? "errorClass" : ""
                }`}
                id="pr-pit3"
                onChange={(e) => {
                  setPitanje3(e.target.value);
                }}
                required
              ></textarea>
              {error && pitanje3 === "" && (
                <label class="pr-lable-error">Ovo polje je obavezno!</label>
              )}
              <lable class="pr-lable" for="pr-vrline">
                Šta biste istakli kao svoje vrline i mane koje bi uticale na
                uspeh celog tima na takmičenju?
              </lable>
              <textarea
                class={`pr-text-team_textarea ${
                  error && pitanje4 === "" ? "errorClass" : ""
                }`}
                id="pr-pit4"
                onChange={(e) => setPitanje4(e.target.value)}
                required
              ></textarea>
              {error && pitanje4 === "" && (
                <label class="pr-lable-error">Ovo polje je obavezno!</label>
              )}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prijava;
