import { FaUserPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-center py-10 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">
        Keep Your Friendships Alive
      </h1>

      <p className="text-gray-600">
        Track, manage, and reconnect with your friends easily.
      </p>

      <button className="btn bg-green-700 text-white rounded-full">
        <FaUserPlus /> Add a Friend
      </button>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3>Total Friends</h3>
          <p className="text-xl font-bold">8</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3>On Track</h3>
          <p className="text-xl font-bold text-green-600">4</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3>Need Attention</h3>
          <p className="text-xl font-bold text-red-500">2</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3>Interactions</h3>
          <p className="text-xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;