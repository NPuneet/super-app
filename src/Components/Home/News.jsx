import React from "react";
import useFetchNews from "../Hooks/useFetchNews";
import css from "../Home/Home.module.css";
// import file from "../../assets/image.png";

const News = () => {
  const { title, urlToImage, description } = useFetchNews();

  return description ? (
    <div className={css.news}>
      <img src={urlToImage} alt="" />
      <div className={css.head}>
        <span>{title}</span>
      </div>
      <div className={css.details}>
        <p className={css.ptag}>
          {description}
        </p>
      </div>
    </div>
  ) : null;
};

export default News;
