import React from "react";
import "./prijava.scss";
import Kevin from "./img/pr-kocka.png";
import Iks from "./img/pr-exit.png";
import Strelica from "./img/pr-strelica-dugme.png";
import { useNavigate } from "react-router-dom";

const Prijava = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div class="pr-prijava">
      <div class="pr-header">
        <h1 class="pr-h1">Forma za prijavu</h1>
        <div class="pr-exit-text">
          <p onClick={goBack}>Izađi</p>
          <img class="pr-exit" src={Iks} alt="Exit" onClick={goBack}></img>
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
              <input type="text" class="pr-text" id="pr-name_m1"></input>
              <lable class="pr-lable" for="pr-email_m1">
                Imejl
              </lable>
              <input type="email" class="pr-text" id="pr-email_m1"></input>
              <lable class="pr-lable" for="pr-phone_m1">
                Broj Telefona
              </lable>
              <input type="text" class="pr-text" id="pr-phone_m1"></input>
              <lable class="pr-lable" for="pr-select_m1">
                Status: zaposlen, student, srednjoškolac
              </lable>
              <select class="pr-select" id="pr-select_m1">
                <option value="zaposlen">Zaposlen</option>
                <option value="student">Student</option>
                <option value="srednjoskolac">Srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m1">
                Godina i naziv studija/ srednje škole
              </lable>
              <input type="text" class="pr-text"></input>
              <lable class="pr-lable" for="pr-cv_m1">
                Link ka CV-ju
              </lable>
              <input
                type="url"
                class="pr-text"
                id="pr-cv_m1"
                placeholder=""
              ></input>
              <lable class="pr-lable" for="pr-git_m1">
                Link ka repozitorijumu na GitHub-u
              </lable>
              <input type="url" class="pr-text" id="pr-git_m1"></input>
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 2</h1>
              <lable class="pr-lable" for="pr-name_m2">
                Ime i prezime
              </lable>
              <input type="text" class="pr-text" id="pr-name_m2"></input>
              <lable class="pr-lable" for="pr-email_m2">
                Imejl
              </lable>
              <input type="email" class="pr-text" id="pr-email_m2"></input>
              <lable class="pr-lable" for="pr-phone_m2">
                Broj Telefona
              </lable>
              <input type="text" class="pr-text" id="pr-phone_m2"></input>
              <lable class="pr-lable" for="pr-select_m2">
                Status: zaposlen, student, srednjoškolac
              </lable>
              <select class="pr-select" id="pr-select_m2">
                <option value="zaposlen">Zaposlen</option>
                <option value="student">Student</option>
                <option value="srednjoskolac">Srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m2">
                Godina i naziv studija/ srednje škole
              </lable>
              <input type="text" class="pr-text"></input>
              <lable class="pr-lable" for="pr-cv_m2">
                Link ka CV-ju
              </lable>
              <input
                type="url"
                class="pr-text"
                id="pr-cv_m2"
                placeholder=""
              ></input>
              <lable class="pr-lable" for="pr-git_m2">
                Link ka repozitorijumu na GitHub-u
              </lable>
              <input type="url" class="pr-text" id="pr-git_m2"></input>
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 3</h1>
              <lable class="pr-lable" for="pr-name_m3">
                Ime i prezime
              </lable>
              <input type="text" class="pr-text" id="pr-name_m3"></input>
              <lable class="pr-lable" for="pr-email_m3">
                Imejl
              </lable>
              <input type="email" class="pr-text" id="pr-email_m3"></input>
              <lable class="pr-lable" for="pr-phone_m3">
                Broj Telefona
              </lable>
              <input type="text" class="pr-text" id="pr-phone_m3"></input>
              <lable class="pr-lable" for="pr-select_m3">
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
              <input type="text" class="pr-text"></input>
              <lable class="pr-lable" for="pr-cv_m3">
                Link ka CV-ju
              </lable>
              <input
                type="url"
                class="pr-text"
                id="pr-cv_m3"
                placeholder=""
              ></input>
              <lable class="pr-lable" for="pr-git_m3">
                Link ka repozitorijumu na GitHub-u
              </lable>
              <input type="url" class="pr-text" id="pr-git_m3"></input>
            </div>

            <div class="pr-member">
              <h1 class="pr-h1_m">Član 4</h1>
              <lable class="pr-lable" for="pr-name_m4">
                Ime i prezime
              </lable>
              <input type="text" class="pr-text" id="pr-name_m4"></input>
              <lable class="pr-lable" for="pr-email_m4">
                Imejl
              </lable>
              <input type="email" class="pr-text" id="pr-email_m4"></input>
              <lable class="pr-lable" for="pr-phone_m4">
                Broj Telefona
              </lable>
              <input type="text" class="pr-text" id="pr-phone_m4"></input>
              <lable class="pr-lable" for="pr-select_m4">
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
              <input type="text" class="pr-text"></input>
              <lable class="pr-lable" for="pr-cv_m4">
                Link ka CV-ju
              </lable>
              <input
                type="url"
                class="pr-text"
                id="pr-cv_m4"
                placeholder=""
              ></input>
              <lable class="pr-lable" for="pr-git_m4">
                Link ka repozitorijumu na GitHub-u
              </lable>
              <input type="url" class="pr-text" id="pr-git_m4"></input>
            </div>
          </div>
          <div class="pr-team">
            <div class="pr-kevin">
              <img src={Kevin} alt="Cube" class="pr-kevin-img" />
            </div>

            <div class="pr-team-info">
              <h1 class="pr-h1_m">Tim</h1>
              <lable class="pr-lable" for="pr-teamname">
                Ime Tima
              </lable>
              <input
                type="text"
                class="pr-text"
                id="pr-teamname"
                required
              ></input>
              <lable class="pr-lable" for="pr-motivation">
                Navedite i opišite prethodna iskustva u grupnom radu, a ako do
                sada niste radili zajedno, opišite vaša pojedinačna iskustva.
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-motivation"
                required
              ></textarea>
              <lable class="pr-lable" for="pr-motivation">
                Šta vas je navelo da se prijavite na hakaton i šta želite da
                postignete i naučite učestvovanjem na ovom takmičenju?
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-motivation"
                required
              ></textarea>
              <lable class="pr-lable" for="pr-motivation">
                Šta biste istakli kao svoje vrline i mane koje bi uticale na
                uspeh celog tima na takmičenju?
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-motivation"
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
            ></input>
            <img src={Strelica} alt="Arrow" class="pr-strelica-img"></img>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prijava;
