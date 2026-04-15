import FriendCard from "../ui/FriendCard";

const AllFriends = ({ friends }) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold border-t border-gray-300 pt-14 mb-4">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default AllFriends;