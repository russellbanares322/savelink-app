import { signOut } from "firebase/auth";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortByDate, setSortByDate] = useState("desc");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const userData = JSON.parse(localStorage.getItem("user-info"));

  const handleSortChange = (e) => {
    setSortByDate(e.target.value);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully logged out");
      localStorage.removeItem("user-info");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (user !== null) {
      setIsLoading(true);
      const q = query(
        collection(db, "LinksDB"),
        where("userId", "==", user?.uid),
        orderBy("timeStamp", sortByDate)
      );
      onSnapshot(q, (snapshot) => {
        const linksData = snapshot.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(linksData);
        setIsLoading(false);
      });
    }
  }, [user, sortByDate]);

  return (
    <LinkContext.Provider
      value={{
        userData,
        data,
        isLoading,
        sortByDate,
        handleSortChange,
        handleLogout,
        setSelectedLanguage,
        selectedLanguage,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContextProvider;
