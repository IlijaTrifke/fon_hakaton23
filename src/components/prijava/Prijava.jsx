import React from "react";
import CountUp from "react-countup";
import "./prijava.scss";
import Kevin from "./pr-kevin.JPG";
import Iks from "./pr-x.JPG";

const Prijava = () => {
  return (
    <div class="pr-prijava">
      <div class="pr-header">
        <h1 class="pr-h1">Forma za prijavu</h1>
        <img class="pr-exit" src={Iks}></img>
      </div>
      <div class="pr-content">
        <div class="pr-members">
          <form class="pr-team-data">
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
          </form>
        </div>
        <div class="pr-team">
          <div class="pr-kevin"></div>
          <img src={Kevin} />
          <div class="pr-team"></div>
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
    </div>
  );
};

export default Prijava;
