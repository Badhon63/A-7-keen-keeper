const FriendCard = ({ friend }) => {
  const statusColor =
    friend.status === "overdue"
      ? "bg-red-100 text-red-600"
      : friend.status === "almost due"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-[#244D3F] text-white";

  return (
    <div className="bg-white rounded-lg shadow py-10 cursor-pointer hover:shadow-md transition flex flex-col items-center text-center">
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-14 h-14 rounded-full object-cover"
      />

      <h3 className="font-semibold text-2xl text-gray-800 mt-3">
        {friend.name}
      </h3>

      <p className="text-xs text-gray-500 mt-1">
        {friend.days_since_contact} days ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium px-3 py-1 bg-green-100 text-green-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;