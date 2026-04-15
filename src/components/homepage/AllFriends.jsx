import friends from "../../assets/friends.json";
import FriendCard from "../ui/FriendCard";

const AllFriends = () => {
  if (!friends || friends.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No friends data found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default AllFriends;