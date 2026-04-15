import { useEffect, useState } from "react";
import friendsData from "../../data/friends.json";
import FriendCard from "../ui/FriendCard";

const AllFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner text-[#244D3F] loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default AllFriends;