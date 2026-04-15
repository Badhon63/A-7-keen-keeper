import { useEffect, useState } from "react";
import AllFriends from "../../components/homepage/AllFriends";
import Banner from "../../components/homepage/Banner";
import Loader from "../../components/ui/Loader";

import friendsData from "../../assets/friends.json";

const Homepage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 800); // simulate fetch delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Banner />

      {loading ? (
        <Loader />
      ) : (
        <AllFriends friends={friends} />
      )}
    </div>
  );
};

export default Homepage;