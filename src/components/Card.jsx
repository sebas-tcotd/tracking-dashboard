import PropTypes from "prop-types";
import ellipsisIcon from "../assets/icon-ellipsis.svg";
import { useCardType } from "../hooks/useCardType";

export function Card({ category }) {
  const { categoryData, iconPath } = useCardType(category);

  return (
    <div className={`c-card c-card--${category}`}>
      <img className="c-card__icon" src={iconPath} />
      <div className="c-card__body">
        <div className="c-card__heading">
          <h5 className="c-card__heading-headline">{categoryData.title}</h5>
          <button type="button" className="c-card__heading-button">
            <img src={ellipsisIcon} alt="" />
          </button>
        </div>
        <div className="c-card__data">
          <span className="c-card__data-current">
            {categoryData.timeframes.weekly.current}hrs
          </span>
          <span className="c-card__data-previous">
            Last Week - {categoryData.timeframes.weekly.previous}hrs
          </span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string,
};
