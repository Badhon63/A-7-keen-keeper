import { FaUserPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-center py-10 space-y-6">

      <h1 className="text-4xl font-bold text-gray-800">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.
      </p>

      <button className="btn bg-[#244D3F] text-white rounded-md hover:bg-[#1e3d33]">
        <FaUserPlus />
        Add a Friend
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

        <div className="bg-white p-8 rounded-lg shadow flex flex-col items-center">
          <p className="text-3xl font-bold text-black">8</p>
          <h3 className="text-sm text-gray-500 mt-2">Total Friends</h3>
        </div>

        <div className="bg-white p-8 rounded-lg shadow flex flex-col items-center">
          <p className="text-3xl font-bold text-black">4</p>
          <h3 className="text-sm text-gray-500 mt-2">On Track</h3>
        </div>

        <div className="bg-white p-8 rounded-lg shadow flex flex-col items-center">
          <p className="text-3xl font-bold text-black">2</p>
          <h3 className="text-sm text-gray-500 mt-2">Need Attention</h3>
        </div>

        <div className="bg-white p-8 rounded-lg shadow flex flex-col items-center">
          <p className="text-3xl font-bold text-black">12</p>
          <h3 className="text-sm text-gray-500 mt-2">Interactions</h3>
        </div>

      </div>

    </div>
  );
};

export default Banner;