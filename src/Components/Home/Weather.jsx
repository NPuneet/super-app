import React from "react";
import css from "../Home/Home.module.css";
// import bar from "../../assets/bar.svg"
import barLogo from "../../assets/bar.svg";
import windLogo from "../../assets/wind.svg";
import humidityLogo from "../../assets/humidity.svg";
import useFetchWeather from "../Hooks/useFetchWeather";
const Weather = () => {
  const { date, urlToImage, WeatherCondition, temp, pressure, wind, humidity } =
    useFetchWeather();

  return urlToImage ? (
    <div className={css.weather}>
      <div className={css.top}>
        <span>{date}</span>
      </div>
      <div className={css.bottom}>
        <div className={css.clouds}>
          <img src={urlToImage} alt="" />
          <p>{WeatherCondition}</p>
        </div>
        <div className={css.temperature}>
          <div className={css.degree}>
            <p>{temp}&deg;C</p>
          </div>
          <div className={css.pressur}>
            <img src={barLogo} alt="" />
            <span>
              {pressure} mbar <br /> Pressure
            </span>
          </div>
        </div>
        <div className={css.air}>
          <div className={css.wind}>
            <img src={windLogo} alt="" />
            <span>
              {" "}
              {wind} km/h <br />
              wind
            </span>
          </div>
          <div className={css.humid}>
            <img src={humidityLogo} alt="" />
            <span>
              {humidity}% <br />
              Humidity
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Weather;
