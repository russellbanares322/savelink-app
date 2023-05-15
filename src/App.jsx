import Home from "./pages/home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import GoogleSignin from "./pages/signin/GoogleSignin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebaseConfig";
import { useEffect, useContext } from "react";
import { LinkContext } from "./context/LinkContext";

function App() {
  const [user] = useAuthState(auth);
  const { handleLogout } = useContext(LinkContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate("/links");
    } else {
      return navigate("/");
    }
  }, [user]);

  useEffect(() => {
    window.addEventListener("unload", () => {
      handleLogout();
    });
  }, []);

  return (
    <div className="bg-light-blue font-jetbrains flex flex-col justify-center items-center h-full w-full py-4 px-4 md:px-10">
      <div className="h-full w-full md:w-[45rem]">
        <Routes>
          <Route path="/" element={<GoogleSignin />} />
          <Route path="/links" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
