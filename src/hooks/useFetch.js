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
  const [user] = useAuthState(auth);

  useEffect(() => {
    const handleFetchData = async () => {
      setIsLoading(true);
      const q = query(
        collection(db, "LinksDB"),
        where("userId", "==", user?.uid),
        orderBy("timeStamp", "desc")
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
    handleFetchData();
  }, []);

  return { data, isLoading };
};

export default useFetch;
