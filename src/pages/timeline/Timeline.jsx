import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimelineEntry = (type, friendName) => {
    const entry = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setTimeline((prev) => [entry, ...prev]);
  };

  const data = {
    timeline,
    addTimelineEntry,
  };

  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;