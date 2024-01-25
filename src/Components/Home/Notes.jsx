import React, { useState } from "react";
import css from "../Home/Home.module.css";
import { useEffect } from "react";

const Notes = () => {
  const [data, setData] = useState("");
  const setText = (e) => {
    const value = e.target.value; 
    setData(value);
    localStorage.setItem("notes", JSON.stringify(value));
  };
  useEffect(() => {
    let details = localStorage.getItem("notes");
    if (details) {
     setData(JSON.parse(details)) 
    }
  }, []);
  return (
    <div className={css.notes}>
      <h1>All notes</h1>
      <textarea cols="38" rows="20" onChange={setText} value={data}></textarea>
    </div>
  );
};

export default Notes;
