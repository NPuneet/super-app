import React, { useState } from "react";
import css from "../Home/Home.module.css";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const incrementHour = () => {
    if (hour === 59) {
      return;
    }
    setHour(hour + 1);
  };
  const decrementHour = () => {
    if (hour === 0) {
      return;
    }
    setHour(hour - 1);
  };
  const incrementMinute = () => {
    if (minute === 59) {
      return;
    }
    setMinute(minute + 1);
  };
  const decrementMinute = () => {
    if (minute === 0) {
      return;
    }
    setMinute(minute - 1);
  };
  const incrementSecond = () => {
    if (second === 59) {
      return;
    }
    setSecond(second + 1);
  };
  const decrementSecond = () => {
    if (second === 0) {
      return;
    }
    setSecond(second - 1);
  };
  return (
    <div className={css.Timer}>
      <div className={css.circular}>
        <div className={css.time}>
          <div className={css.valueInside}>
            <CountdownCircleTimer
              isPlaying={isTimerStarted}
              duration={700}
              size={150}
              trailColor={"#d9d9d9"}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[7, 5, 2, 0]}
            >
              {({ remainingTime }) => (
                <span
                  style={{
                    fontFamily: "Roboto",
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  {remainingTime}
                </span>
              )}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
      <div className={css.controller}>
        <div className={css.hour}>
          <p>Hour</p>
          <img src={up} alt="" onClick={incrementHour} />
          <span>{hour}</span>
          <img src={down} alt="" onClick={decrementHour} />
        </div>
        <div className={css.minute}>
          <p>Minute</p>
          <img src={up} alt="" onClick={incrementMinute} />
          <span>{minute} </span>
          <img src={down} alt="" onClick={decrementMinute} />
        </div>
        <div className={css.second}>
          <p>Second</p>
          <img src={up} alt="" onClick={incrementSecond} />
          <span>{second}</span>
          <img src={down} alt="" onClick={decrementSecond} />
        </div>
        <button
          className={css.buttonToStart}
          onClick={() => {
            setIsTimerStarted(!isTimerStarted);
          }}
        >
          {isTimerStarted ? (
            <p
              onClick={() => {
                setIsTimerStarted(!isTimerStarted);
                setMinute(0);
                setHour(0);
                setSecond(0);
              }}
            >
              Stop
            </p>
          ) : (
            <p>Start</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Timer;
