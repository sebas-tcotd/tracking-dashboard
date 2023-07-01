import { Categories } from "../enums/categories";
import MockData from "../mock/data.json";
import WorkIcon from "../assets/icon-work.svg";
import ExcersiceIcon from "../assets/icon-exercise.svg";
import PlayIcon from "../assets/icon-play.svg";
import SelfCareIcon from "../assets/icon-self-care.svg";
import SocialIcon from "../assets/icon-social.svg";
import StudyIcon from "../assets/icon-study.svg";

/**
 * A hook that
 * @param {string} category The type of card to be shown in the dashboard
 */
export function useCardType(category) {
  const foundItem = MockData.find((data) => data.title === category);
  let iconPath = "";

  switch (category) {
    case Categories.WORK:
      iconPath = WorkIcon;
      break;
    case Categories.EXERCISE:
      iconPath = ExcersiceIcon;
      break;
    case Categories.PLAY:
      iconPath = PlayIcon;
      break;
    case Categories.SELF_CARE:
      iconPath = SelfCareIcon;
      break;
    case Categories.SOCIAL:
      iconPath = SocialIcon;
      break;
    case Categories.STUDY:
      iconPath = StudyIcon;
      break;
  }

  return { categoryData: foundItem, iconPath };
}
