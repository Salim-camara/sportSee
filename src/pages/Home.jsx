import React, { useEffect, useState } from "react";
import ChartBar from "../components/charts/ChartBar";
import ChartLine from "../components/charts/ChartLine";
// import ChartRadar from "../components/charts/ChartRadar";
import ChartCircle from "../components/charts/ChartCircle";
import CardInfo from "../components/CardInfo";
import { useData } from "../hooks/useData";
import DataFormater from "../services/dataFormater";

const Home = () => {
  const { user, userInfos, manageError } = useData();
  const [infoCard, setInfoCard] = useState();
  console.log("l13 ", user);

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
              <p
                className="home__content__board__top__title--hello"
                style={manageError ? { color: "red" } : { marginRight: 10 }}
              >
                {!manageError
                  ? `Bonjour${" "}`
                  : `Une erreur est survenue: ${manageError}`}
              </p>
              {!manageError && (
                <p className="home__content__board__top__title--name">
                  {user?.firstName}
                </p>
              )}
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
                  {/* <ChartRadar /> */}
                  <ChartCircle />
                </div>
              </div>
            </div>
            <div className="home__content__board__bottom__right">
              {DataFormater.InfoCard(userInfos)?.map((el, i) => (
                <CardInfo
                  key={i}
                  title={el.title}
                  bgc={el.bgc}
                  number={el.number}
                  value={el.value}
                  icon={el.icon}
                  iconStyle={el.iconStyle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
