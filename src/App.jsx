import profilePicture from "./assets/image-jeremy.png";

function App() {
  return (
    <main className="o-container">
      <div className="welcome-card">
        <header className="welcome-card__header">
          <img src={profilePicture} alt="Your profile picture" />
          <div className="welcome-card__info">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </header>
        <nav className="welcome-card__navigation">
          <ul>
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default App;
