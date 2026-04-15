import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaCommentDots, FaVideo, FaClock, FaArchive, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useTimeline } from "../../context/TimelineContext";

const FriendDetails = () => {

  const { addEvent } = useTimeline();

  const handleAction = (type) => {
    toast.success(`${type} with ${friend.name}`);
    addEvent(type, friend.name);
  };
  const { state: friend } = useLocation();

  if (!friend) {
    return (
      <div className="text-center py-10 text-gray-500">
        No friend data found
      </div>
    );
  }

  const statusColor =
    friend.status === "overdue"
      ? "bg-red-100 text-red-600"
      : friend.status === "almost due"
        ? "bg-yellow-100 text-yellow-600"
        : "bg-green-100 text-green-600";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10">

      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center">
          <img src={friend.picture} className="w-24 h-24 rounded-full" />

          <h2 className="text-xl font-bold mt-4">{friend.name}</h2>

          <div className={`mt-2 px-3 py-1 rounded-full text-xs ${statusColor}`}>
            {friend.status}
          </div>

          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 italic mt-4">{friend.bio}</p>

          <p className="text-sm text-gray-600 mt-2">Email: {friend.email}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">

          <button className="btn w-full flex items-center gap-2">
            <FaClock /> Snooze 2 Weeks
          </button>

          <button className="btn w-full flex items-center gap-2">
            <FaArchive /> Archive
          </button>

          <button className="btn w-full flex items-center gap-2 text-red-500">
            <FaTrash /> Delete
          </button>

        </div>

      </div>

      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-3 gap-4">

          <div className="bg-white p-4 rounded-lg shadow text-center flex flex-col justify-center">
            <p className="text-2xl font-bold text-gray-800">{friend.days_since_contact}</p>
            <h3 className="text-sm text-gray-500 mt-2">Days Since Contact</h3>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center flex flex-col justify-center">
            <p className="text-2xl font-bold text-gray-800">{friend.goal}</p>
            <h3 className="text-sm text-gray-500 mt-2">Goal (Days)</h3>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center flex flex-col justify-center">
            <p className="text-2xl font-bold text-gray-800">{friend.next_due_date}</p>
            <h3 className="text-sm text-gray-500 mt-2">Next Due</h3>
          </div>

        </div>

        <div className="bg-white p-4 rounded-lg shadow w-full">
          <h3 className="font-semibold text-gray-700">Relationship Goal</h3>
          <p className="text-gray-600 mt-2">
            Connect every {friend.goal} days
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow w-full">
          <h3 className="font-semibold text-gray-700 mb-3">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-3">

            <button
              onClick={() => handleAction("Call")}
              className=" cursor-pointer bg-base-300 hover:bg-base-200 w-full py-4 rounded-lg flex flex-col items-center gap-2"
            >
              <FaPhoneAlt className="text-xl text-[#244D3F]" />
              <span className="text-sm text-gray-700">Call</span>
            </button>

            <button
              onClick={() => handleAction("Text")}
              className="cursor-pointer bg-base-300 hover:bg-base-200 w-full py-4 rounded-lg flex flex-col items-center gap-2"
            >
              <FaCommentDots className="text-xl text-[#244D3F]" />
              <span className="text-sm text-gray-700">Text</span>
            </button>

            <button
              onClick={() => handleAction("Video")}
              className="cursor-pointer bg-base-300 hover:bg-base-200 w-full py-4 rounded-lg flex flex-col items-center gap-2"
            >
              <FaVideo className="text-xl text-[#244D3F]" />
              <span className="text-sm text-gray-700">Video</span>
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default FriendDetails;