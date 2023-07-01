import profilePicture from "../assets/image-jeremy.png";

export function WelcomeCard() {
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
          <li className="c-welcome-card__navigation-item">Daily</li>
          <li className="c-welcome-card__navigation-item">Weekly</li>
          <li className="c-welcome-card__navigation-item">Monthly</li>
        </ul>
      </nav>
    </div>
  );
}
