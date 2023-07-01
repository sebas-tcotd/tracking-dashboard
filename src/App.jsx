import { WelcomeCard } from "./components";
import ellipsisIcon from "./assets/icon-ellipsis.svg";
import workIcon from "./assets/icon-work.svg";

function App() {
  return (
    <main className="o-container">
      <WelcomeCard />
      <div className="c-card c-card--Work">
        <img src={workIcon} className="c-card__icon" />
        <div className="c-card__body">
          <div className="c-card__heading">
            <h5 className="c-card__heading-headline">Work</h5>
            <button type="button" className="c-card__heading-button">
              <img src={ellipsisIcon} alt="" />
            </button>
          </div>
          <div className="c-card__data">
            <span className="c-card__data-current">32hrs</span>
            <span className="c-card__data-previous">Last Week - 36hrs</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
