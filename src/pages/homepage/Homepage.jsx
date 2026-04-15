import Banner from "../../components/homepage/Banner";
import AllFriends from "../../components/homepage/AllFriends";

const Homepage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      <Banner />

      <div className="mt-10 border-t border-gray-300 pt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 mt-5">
          Your Friends
        </h2>

        <AllFriends />
      </div>

    </div>
  );
};

export default Homepage;