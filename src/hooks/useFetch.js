import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleFetchData = async () => {
      setIsLoading(true);
      const q = query(collection(db, "LinksDB"), orderBy("timeStamp", "desc"));
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
