import React from "react";
import "./ProjectView.css";
import FullScreenOverlay from "../FullScreenOverlay/FullScreenOverlay";

const ProjectView = () => {
  const openModal = (el) => {
    var modal = document.getElementById(el);
    console.log(modal);
    modal.style.display = "block";
  };
  const closeModal = (el) => {
    var modal = document.getElementById(el);
    modal.style.display = "none";
  };
  return (
    <>
      <FullScreenOverlay />
      <div className="project_container">
        <div className="project_box">
          <h1>PROJECTS</h1>
          <span>
            All projects described below are personal one. Official Work doesn't
            shown here due to security concern.
          </span>
          <div className="project_content">
            <div className="project_1" onClick={() => openModal("hotel")}></div>
            <div className="modal" id="hotel">
              <div className="modal-content_1">
                <span
                  className="close"
                  id="hotel"
                  onClick={() => closeModal("hotel")}
                >
                  &times;
                </span>
                <h1 className="modal_title">HOTEL ECOMMERCE</h1>
                <p className="modal__overview">
                  This project is for restaurant ecommerce where user can visit
                  the menu and order the same from portal only. For Login, user
                  has to register their account with Phone Number which
                  generates the OTP to registered mobile number using Firebase
                  and Firebase UI. Skills used to develop: REACT, NODE, EXPRESS,
                  FIREBASE, FIREBASE UI, HTML5, CSS3, HEROKU
                </p>
                <button className="modal_btn_red">
                  <a
                    href="https://github.com/Kumar-Ankur/hotel_ecommerce"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Code
                  </a>
                </button>
                <button className="modal_btn_list">
                  <a
                    href="http://hotelreact.herokuapp.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    DEMO
                  </a>
                </button>
              </div>
            </div>
            <div
              className="project_2"
              onClick={() => openModal("netflix")}
            ></div>
            <div className="modal" id="netflix">
              <div className="modal-content_2">
                <span className="close" onClick={() => closeModal("netflix")}>
                  &times;
                </span>
                <h1 className="modal_title">NETFLIX CLONE</h1>
                <p className="modal__overview">
                  This project is cloning of NETFLIX. Try to implement all the
                  UI related features that are in NETFLIX. Bascially working on
                  Animation, Playing Video at background, Flex Box etc. Skills
                  used to develop: REACT, NODE, EXPRESS, FIREBASE, FIREBASE UI,
                  HTML5, CSS3, HEROKU
                </p>
                <button className="modal_btn_red">
                  <a
                    href="https://github.com/Kumar-Ankur/netflix_clone"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Code
                  </a>
                </button>
                <button className="modal_btn_list">
                  <a
                    href="https://netflix-clone-ankur.herokuapp.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    DEMO
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="project_content">
            <div
              className="project_3"
              onClick={() => openModal("falcone")}
            ></div>
            <div className="modal" id="falcone">
              <div className="modal-content_3">
                <span className="close" onClick={() => closeModal("falcone")}>
                  &times;
                </span>
                <h1 className="modal_title">FIND FALCONE GAME</h1>
                <p className="modal__overview">
                  This project is a game where you need to search your luck
                  you're able to find the Falcone or not. You just need to
                  select any 4 planets out of 6 planets. After each selection of
                  planet, list will appear that shows the vechicle detail. From
                  vechicle list, you have to select 1 vechicle for each planet.
                  After filling all fields, find Falcone button gets enable.
                  Click on find Falcone, shows your luck viz. are you able to
                  find Falcone or not.. Skills used to develop: REACT, NODE,
                  EXPRESS, HTML5, CSS3, HEROKU
                </p>
                <button className="modal_btn_red">
                  <a
                    href="https://github.com/Kumar-Ankur/Find-Falcone/tree/feature/develop"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Code
                  </a>
                </button>
                <button className="modal_btn_list">
                  <a
                    href="https://falconefind.herokuapp.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    DEMO
                  </a>
                </button>
              </div>
            </div>
            <div className="project_4" onClick={() => openModal("list")}></div>
            <div className="modal" id="list">
              <div className="modal-content_4">
                <span className="close" onClick={() => closeModal("list")}>
                  &times;
                </span>
                <h1 className="modal_title">TO DO LIST</h1>
                <p className="modal__overview">
                  This project is my first project on REACT as a Full stack
                  developer with Express and MongoDB. In this application, user
                  can add his/her task and same task has added in his/her inbox.
                  User can also reset password by click on reset button and mail
                  is sent to his/her registered mobile number.Skills used to
                  develop: REACT, NODE, MONGODB, EXPRESS, HTML5, CSS3, HEROKU
                </p>
                <button className="modal_btn_red">
                  <a
                    href="https://github.com/Kumar-Ankur/todoList"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Code
                  </a>
                </button>
                <button className="modal_btn_list">
                  <a
                    href="https://todolist-ankur.herokuapp.com/#/Login"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    DEMO
                  </a>
                </button>
              </div>
            </div>
            <div className="project_5" onClick={() => openModal("calc")}></div>
            <div className="modal" id="calc">
              <div className="modal-content_5">
                <span className="close" onClick={() => closeModal("calc")}>
                  &times;
                </span>
                <h1 className="modal_title">CALCULATOR</h1>
                <p className="modal__overview">
                  This project is Bascially a small project where i tried to
                  create the mobile like calculator. Skills used to develop:
                  REACT, NODE, EXPRESS, FIREBASE, FIREBASE UI, HTML5, CSS3,
                  HEROKU
                </p>
                <button className="modal_btn_red">
                  <a
                    href="https://github.com/Kumar-Ankur/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Code
                  </a>
                </button>
                <button className="modal_btn_list">
                  <a
                    href="https://calculator-ankur.herokuapp.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    DEMO
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
