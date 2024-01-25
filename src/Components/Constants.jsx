import React from "react";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";

export const allGenres = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img
        style={{ width: "120px", height: "75px" }}
        src={action}
        alt="Action genre"
      />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "120px", height: "75px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "120px", height: "75px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "120px", height: "75px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "120px", height: "75px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "120px", height: "75px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "120px", height: "75px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "120px", height: "75px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "120px", height: "75px" }} src={western} />,
  },
];
