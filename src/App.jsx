import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import GoogleSignin from "./pages/signin/GoogleSignin";
import ProtectedRoute from "./components/protected/ProtectedRoute";

function App() {
  return (
    <div className="bg-light-blue font-jetbrains flex flex-col justify-center items-center h-full w-full py-4 px-4 md:px-10">
      <div className="h-full w-full md:w-[45rem]">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <ProtectedRoute>
                <GoogleSignin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
