import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimeline = (entry) => {
    setTimeline((prev) => [entry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;