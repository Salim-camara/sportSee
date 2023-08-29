import React from "react";
import ChartBar from "../components/charts/ChartBar";
import ChartLine from "../components/charts/ChartLine";
import ChartCircle from "../components/charts/ChartCircle";
import CardInfo from "../components/CardInfo";
import { useData } from "../hooks/useData";
import ChartRadar from "../components/charts/ChartRadar";
import InfoCardData from "../services/dataFormater/infoCardData";

const Home = () => {
  const { user, userInfos, manageError } = useData();
  const usableCardData = new InfoCardData(userInfos).data;

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__logo">
          <img
            src={require("./../assets/images/logo.png")}
            className="home__header__logo--img"
            alt="logo"
          />
          <p className="home__header__logo--text">SportSee</p>
        </div>
        <div className="home__header__menu">
          <div className="home__header__menu--text">Accueil</div>
          <div className="home__header__menu--text">Profil</div>
          <div className="home__header__menu--text">Réglage</div>
          <div className="home__header__menu--text">Communauté</div>
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__menu">
          <div className="home__content__menu__btn">
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_1.png")}
                className="home__content__menu__btn--first"
                alt="menu_1"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_2.png")}
                className="home__content__menu__btn--second"
                alt="menu_2"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_3.png")}
                className="home__content__menu__btn--third"
                alt="menu_3"
              />
            </div>
            <div className="home__content__menu__btn--global">
              <img
                src={require("./../assets/images/menu_4.png")}
                className="home__content__menu__btn--forth"
                alt="menu_4"
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
              Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="home__content__board__bottom">
            <div className="home__content__board__bottom__left">
              <div className="home__content__board__bottom__left--barChart">
                <ChartBar />
                <div className="home__content__board__bottom__left--chartsContainer">
                  <ChartLine />
                  <ChartRadar />
                  <ChartCircle />
                </div>
              </div>
            </div>
            <div className="home__content__board__bottom__right">
              {usableCardData?.map((el, i) => (
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
