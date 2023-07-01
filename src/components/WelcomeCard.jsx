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
          <li className="c-welcome-card__navigation-item">
            <a href="">Daily</a>
          </li>
          <li className="c-welcome-card__navigation-item">
            <a href="">Weekly</a>
          </li>
          <li className="c-welcome-card__navigation-item">
            <a href="">Monthly</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
