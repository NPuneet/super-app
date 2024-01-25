import React, { useEffect, useState } from "react";
// import css from "../Home/Home.module.css";
// import.meta.env.VITE_APP_NEWS_API_KEY;
const useFetchNews = () => {
  const [title, setTitle] = useState();
  const [urlToImage, setUrlToImage] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    const gg = async () => {
      const apiKey = import.meta.env.VITE_NEWS_API;
      const api = `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`;
      const moye = await fetch(api);
      const toye = await moye.json();
      setTitle(toye.articles[2].title);
      setUrlToImage(toye.articles[2].urlToImage);
      setDescription(toye.articles[2].description);
    };
    gg();
  }, []);
  return { title, urlToImage, description };
};

export default useFetchNews;
