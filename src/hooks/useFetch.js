import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebaseConfig";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortByDate, setSortByDate] = useState("desc");
  const [user] = useAuthState(auth);

  const handleSortChange = (e) => {
    setSortByDate(e.target.value);
  };

  const handleFetchLink = () => {
    setIsLoading(true);
    const q = query(
      collection(db, "LinksDB"),
      where("userId", "==", user?.uid),
      orderBy("timeStamp", sortByDate)
    );
    onSnapshot(q, (snapshot) => {
      const linksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(linksData);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    handleFetchLink();
  }, [sortByDate]);

  return { data, isLoading, handleSortChange, sortByDate };
};

export default useFetch;
