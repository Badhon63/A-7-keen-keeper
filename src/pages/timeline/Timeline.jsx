import { useTimeline } from "../../context/TimelineContext";

const Timeline = () => {
  const { timeline } = useTimeline();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      {timeline.length === 0 ? (
        <p className="text-gray-500">No interactions yet</p>
      ) : (
        <div className="space-y-4">

          {timeline.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >

              <div>
                <h2 className="font-semibold">
                  {item.type === "Call" && "📞 "}
                  {item.type === "Text" && "💬 "}
                  {item.type === "Video" && "🎥 "}
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Timeline;