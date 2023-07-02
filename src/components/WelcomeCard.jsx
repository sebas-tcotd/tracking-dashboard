import PropTypes from "prop-types";
import { Timeframes } from "../enums";
import profilePicture from "../assets/image-jeremy.png";
import { useState } from "react";
import { toCapitalCase } from "../utils/capitalCase";

export function WelcomeCard({ onClickTimeframe }) {
  const [selectedItem, setSelectedItem] = useState(false);
  const timeframes = Object.values(Timeframes);

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
    onClickTimeframe(item);
  };

  return (
    <div className="c-welcome-card">
      <header className="c-welcome-card__header">
        <img
          src={profilePicture}
          alt="Your profile picture"
          className="c-welcome-card__photo"
        />
        <div className="c-welcome-card__info">
          <p className="c-welcome-card__report">Report for</p>
          <h1 className="c-welcome-card__user-name">Jeremy Robson</h1>
        </div>
      </header>
      <nav className="c-welcome-card__navigation">
        <ul className="c-welcome-card__navigation-items">
          {timeframes.map((timeframe) => (
            <li
              key={timeframe}
              className={`c-welcome-card__navigation-item ${
                selectedItem === timeframe ? "u-active" : ""
              }`}
              onClick={() => handleSelectedItem(timeframe)}
            >
              {toCapitalCase(timeframe)}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

WelcomeCard.propTypes = {
  onClickTimeframe: PropTypes.func,
};
