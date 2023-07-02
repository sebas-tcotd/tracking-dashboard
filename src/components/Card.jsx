import PropTypes from "prop-types";
import ellipsisIcon from "../assets/icon-ellipsis.svg";
import { useCardType, useTimePeriod } from "../hooks";

export function Card({ category, timeframe }) {
  const {
    categoryData: { title, timeframes },
    iconPath,
  } = useCardType(category);
  const timePeriod = useTimePeriod(timeframe);

  return (
    <div className={`c-card c-card--${category}`}>
      <img
        className="c-card__icon"
        src={iconPath}
        alt={`Icon corresponding to the ${category} category`}
      />
      <div className="c-card__body">
        <div className="c-card__heading">
          <h5 className="c-card__heading-headline">{title}</h5>
          <button type="button" className="c-card__heading-button">
            <img src={ellipsisIcon} alt="Ellipsis icon" />
          </button>
        </div>
        <div className="c-card__data">
          <span className="c-card__data-current">
            {timeframes[timeframe].current}hrs
          </span>
          <span className="c-card__data-previous">
            Last {timePeriod} - {timeframes[timeframe].current}hrs
          </span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string,
  timeframe: PropTypes.string,
};
