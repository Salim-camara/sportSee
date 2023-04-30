import React, { useState } from "react";
import ChartBar from "../components/charts/ChartBar";
import ChartLine from "../components/ChartLine";

const Home = () => {
  const [logements, setlogements] = useState();

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__logo">
          <img
            src={require("./../assets/images/logo.png")}
            className="home__header__logo--img"
          />
          <p className="home__header__logo--text">SportSee</p>
        </div>
        <div className="home__header__menu">
          <a className="home__header__menu--text" href="#">
            Accueil
          </a>
          <a className="home__header__menu--text" href="#">
            Profil
          </a>
          <a className="home__header__menu--text" href="#">
            Réglage
          </a>
          <a className="home__header__menu--text" href="#">
            Communauté
          </a>
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__menu">
          <div className="home__content__menu__btn">
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_1.png")}
                className="home__content__menu__btn--first"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_2.png")}
                className="home__content__menu__btn--second"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_3.png")}
                className="home__content__menu__btn--third"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_4.png")}
                className="home__content__menu__btn--forth"
              />
            </div>
          </div>
          <p className="home__content__menu--text">Copirygth SportSee 2020</p>
        </div>
        <div className="home__content__board">
          <div className="home__content__board__top">
            <div className="home__content__board__top__title">
              <p className="home__content__board__top__title--hello">Bonjour</p>
              <p className="home__content__board__top__title--name">Thomas</p>
            </div>
            <p className="home__content__board__top__subtitle">
              Félicitations ! Vous avez explosé vos objectifs hier{" "}
            </p>
          </div>
          <div className="home__content__board__bottom">
            <div className="home__content__board__bottom__left">
              <div className="home__content__board__bottom__left--barChart">
                <ChartBar />
                <div className="home__content__board__bottom__left--chartsContainer">
                  <ChartLine />
                </div>
              </div>
            </div>
            <div className="home__content__board__bottom__right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
