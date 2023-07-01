import { Timeframes } from "../enums";
import { useState, useEffect } from "react";

export const useTimePeriod = (timeframe) => {
  const [timePeriod, setTimePeriod] = useState("");

  useEffect(() => {
    switch (timeframe) {
      case Timeframes.DAILY:
        setTimePeriod("Day");
        break;
      case Timeframes.MONTHLY:
        setTimePeriod("Month");
        break;
      case Timeframes.WEEKLY:
        setTimePeriod("Week");
        break;
      default:
        setTimePeriod("Time");
    }
  }, [timeframe]);

  return timePeriod;
};
