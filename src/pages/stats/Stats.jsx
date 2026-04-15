import { useTimeline } from "../../context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const { timeline } = useTimeline();

  const callCount = timeline.filter((t) => t.type === "Call").length;
  const textCount = timeline.filter((t) => t.type === "Text").length;
  const videoCount = timeline.filter((t) => t.type === "Video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#244D3F", "#A855F7", "#22C55E"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-bold mb-6">
        Friendship Analytics
      </h1>

      {timeline.length === 0 ? (
        <p className="text-gray-500">No interaction data available</p>
      ) : (
        <div className="relative bg-white p-6 rounded-lg shadow h-[420px]">

          {/* TOP RIGHT TEXT */}
          <div className="absolute top-4 left-4 text-sm text-gray-500 font-medium">
            By Interaction Type
          </div>

          {/* CHART */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

        </div>
      )}

    </div>
  );
};

export default Stats;