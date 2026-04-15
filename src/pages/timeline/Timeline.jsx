import { useState } from "react";
import { useTimeline } from "../../context/TimelineContext";

const Timeline = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      {/* FILTER DROPDOWN */}
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-48"
        >
          <option value="All">All</option>
          <option value="Call">📞 Call</option>
          <option value="Text">💬 Text</option>
          <option value="Video">🎥 Video</option>
        </select>
      </div>

      {/* TIMELINE LIST */}
      {filteredTimeline.length === 0 ? (
        <p className="text-gray-500">No interactions yet</p>
      ) : (
        <div className="space-y-4">

          {filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow"
            >

              {/* TITLE + ICON */}
              <div className="flex items-center gap-2 font-semibold">

                <span>
                  {item.type === "Call" && "📞"}
                  {item.type === "Text" && "💬"}
                  {item.type === "Video" && "🎥"}
                </span>

                <span>{item.title}</span>

              </div>

              {/* DATE BELOW */}
              <p className="text-sm text-gray-500 mt-1">
                {item.date}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Timeline;