import React, { useState } from "react";
import warning from "../../assets/warning.png";
import css from "../Genre/Genre.module.css";
import Block from "./Block";
import { allGenres } from "../Constants";
import { useNavigate } from "react-router-dom";
const Genre = () => {
  const [category, setCategory] = useState([]);
  const [length, setLength] = useState(false);
  const navigate = useNavigate();
  const removeCategory = (value) => {
    const updated = category.filter((cat) => cat !== value);
    setCategory(updated);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.length < 3) {
      setLength(true);
    } else {
      setLength(false);
      navigate("/home");
      localStorage.setItem("genre", JSON.stringify(category));
    }
  };
  return (
    <>
      <div className={css.main}>
        <div className={css.left}>
          <h3>Super app</h3>
          <h1>Choose your entertainment category</h1>
          <div className={css.choice}>
            {category.map((e) => {
              return (
                <button className={css.span} key={e}>
                  {e} <span onClick={() => removeCategory(e)}>X</span>
                </button>
              );
            })}
          </div>
          {length ? (
            <div className={css.warning}>
              <img src={warning} className={css.danger} alt="" />
              <span>Minimum 3 category required</span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={css.right}>
          {allGenres.map((e) => {
            return (
              <Block
                key={e.id}
                color={e.color}
                id={e.id}
                image={e.image}
                categories={category}
                setCategory={setCategory}
              />
            );
          })}
        </div>
        <button onClick={handleSubmit} className={css.btn}>
          Next Page
        </button>
      </div>
    </>
  );
};
export default Genre;
