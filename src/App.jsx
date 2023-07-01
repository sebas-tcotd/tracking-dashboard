import { useMemo, useState } from "react";
import { WelcomeCard, Card } from "./components";
import { Categories, Timeframes } from "./enums";

function App() {
  const [timeframe, setTimeframe] = useState(Timeframes.WEEKLY);
  const activities = useMemo(() => Object.values(Categories), []);

  const handleTimeframe = (timeframe) => {
    setTimeframe(timeframe);
  };

  return (
    <main className="o-container o-dashboard">
      <WelcomeCard onClickTimeframe={handleTimeframe} />

      {activities.map((activity) => (
        <Card key={activity} category={activity} timeframe={timeframe} />
      ))}
    </main>
  );
}

export default App;
