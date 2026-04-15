import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/friend/${friend.id}`, { state: friend });
  };

  const statusColor =
    friend.status === "overdue"
      ? "bg-red-500 text-white font-medium"
      : friend.status === "almost due"
      ? "bg-yellow-500 text-white font-medium"
      : "bg-[#244d3f] text-white font-medium";

  return (
    <div
      onClick={handleClick}
      className="bg-white px-4 py-8 rounded-lg shadow cursor-pointer hover:shadow-lg transition text-center"
    >
      <img
        src={friend.picture}
        className="w-20 h-20 rounded-full mx-auto"
      />

      <h2 className="font-bold mt-3">{friend.name}</h2>

      <p className="text-sm text-gray-500">
        {friend.days_since_contact} days ago
      </p>

      {/* TAGS MOVED TO TOP */}
      <div className="flex justify-center flex-wrap gap-1 mt-2">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded-full bg-green-100 text-black font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* STATUS MOVED TO BOTTOM */}
      <div className={`mt-3 inline-block px-3 py-1 rounded-full text-xs ${statusColor}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;