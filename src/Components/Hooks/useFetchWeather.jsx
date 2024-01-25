import React, { useEffect, useState } from "react";
const useFetchWeather = () => {
  const [date, setDate] = useState("");
  const [urlToImage, setUrlToImage] = useState("");
  const [WeatherCondition, setWeatherCondition] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  useEffect(() => {
    const gg = async () => {
      const apiKey = import.meta.env.VITE_WEATHER_API;
      const defaultLocation = "bangalore";
      const api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${defaultLocation}`;
      const moye = await fetch(api);
      const toye = await moye.json();

      setDate(toye.location.localtime);
      setUrlToImage(toye.current.condition.icon);
      setWeatherCondition(toye.current.condition.text);
      setTemp(toye.current.temp_c);
      setPressure(toye.current.pressure_mb);
      setWind(toye.current.wind_kph);
      setHumidity(toye.current.humidity);
      
    };
    gg();
  }, []);
  return { date, urlToImage, WeatherCondition, temp, pressure, wind, humidity };
};

export default useFetchWeather;
