import React from "react";
import css from "../Home/Home.module.css";
import profile from "../../assets/profileBig.png";

const Profile = () => {
  const category = localStorage.getItem("genre");
  const genrearr = JSON.parse(category);
  let details = localStorage.getItem("UserData");

  if (details) {
    details = JSON.parse(details);
  }
  // console.log(details);

  return (
    <div className={css.profile}>
      <div className={css.profileIemage}>
        <img src={profile} alt="" />
      </div>
      <div className={css.profileRight}>
        <div className={css.profileDetails}>
          <h3>{details.name}</h3>
          <h2>{details.email}</h2>
          <h1>{details.username}</h1>
        </div>
        <div className={css.profileCategories}>
          {genrearr.map((e, i) => (
            <button className={css.btn} key={i} disabled  >
              {e}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
