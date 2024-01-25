import React, { useEffect, useState } from "react";
import css from "../Genre/Genre.module.css";

const Block = ({ color, id, image, categories, setCategory }) => {
  const [isSelected, setIsSelected] = useState(true);
  const selectCategory = (value) => {
    const existingValues = categories.filter((category) => category === value);
    if (!existingValues.length) {
      setCategory([...categories, value]);
      setIsSelected(false);
    } else {
      const updated = categories.filter((category) => category !== value);
      setCategory(updated);
      setIsSelected(true);
    }
  };
  useEffect(() => {
    const value = categories.includes(id) == false;
    setIsSelected(value);
  });
  return (
    <div
      onClick={() => {
        selectCategory(id);
      }}
      style={{ backgroundColor: color, borderRadius: "20px" }}
    >
      <div
        style={
          isSelected
            ? { border: "4px solid white" }
            : { border: "4px solid green" }
        }
        className={css.rightHead}
      >
        <span className={css.title}>{id}</span>
        {image}
      </div>
    </div>
  );
};
export default Block;
