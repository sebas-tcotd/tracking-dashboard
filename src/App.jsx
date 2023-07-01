import { useMemo } from "react";
import { WelcomeCard, Card } from "./components";
import { Categories } from "./enums/categories";

function App() {
  const activities = useMemo(() => Object.values(Categories), []);

  return (
    <main className="o-container o-dashboard">
      <WelcomeCard />

      {activities.map((activity) => (
        <Card category={activity} key={activity} />
      ))}
    </main>
  );
}

export default App;
