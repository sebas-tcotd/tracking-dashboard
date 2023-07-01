import PropTypes from "prop-types";
import { Timeframes } from "../enums";
import profilePicture from "../assets/image-jeremy.png";

export function WelcomeCard({ onClickTimeframe }) {
  const handleListItemClick = (timeframe) => {
    onClickTimeframe(timeframe);
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
          <li
            className="c-welcome-card__navigation-item"
            onClick={() => handleListItemClick(Timeframes.DAILY)}
          >
            Daily
          </li>
          <li
            className="c-welcome-card__navigation-item"
            onClick={() => handleListItemClick(Timeframes.WEEKLY)}
          >
            Weekly
          </li>
          <li
            className="c-welcome-card__navigation-item"
            onClick={() => handleListItemClick(Timeframes.MONTHLY)}
          >
            Monthly
          </li>
        </ul>
      </nav>
    </div>
  );
}

WelcomeCard.propTypes = {
  onClickTimeframe: PropTypes.func,
};
