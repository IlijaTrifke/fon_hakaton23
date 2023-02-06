import React from "react";
import CountUp from "react-countup";
import "./prijava.scss";
import Kevin from "./img/pr-kocka.png";
import Iks from "./img/pr-exit.png";

const Prijava = () => {
  return (
    <div class="pr-prijava">
      <div class="pr-header">
        <h1 class="pr-h1">Forma za prijavu</h1>
        <div class="pr-exit-text">
          Izađi
          <img class="pr-exit" src={Iks}></img>
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
                <option value="srednjoskolac">srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m1">
                Godina i naziv fakulteta/ srednje škole
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
                <option value="srednjoskolac">srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m1">
                Godina i naziv fakulteta/ srednje škole
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
                <option value="srednjoskolac">srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m1">
                Godina i naziv fakulteta/ srednje škole
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
                <option value="srednjoskolac">srednjoškolac</option>
              </select>
              <lable class="pr-lable" for="pr-year_m1">
                Godina i naziv fakulteta/ srednje škole
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
              <input type="text" class="pr-text-team" id="pr-teamname"></input>
              <lable class="pr-lable" for="pr-motivation">
                Navedite i opišite prethodna iskustva u grupnom radu,a ako do
                sada niste radili zajedno, opišite vaša pojedinačna iskustva.
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-motivation"
              ></textarea>
              <lable class="pr-lable" for="pr-motivation">
                Šta vas je navelo da se prijavite na hakaton i šta želite da
                postignete i naučite učestvovanjem na ovom takmičenju.
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-motivation"
              ></textarea>
              <lable class="pr-lable" for="pr-motivation">
                Šta biste naveli kao svoje vrline i mane koje bi uticale na
                uspeh celog tima na takmičenju.
              </lable>
              <textarea
                class="pr-text-team_textarea"
                id="pr-motivation"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="pr-footer">
          <input
            type="submit"
            id="pr-submit"
            class="pr-submit"
            value="Posalji prijavu"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Prijava;
