import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { LinkContext } from "./context/LinkContext";
import { routes } from "./routes/routes";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const { handleLogout } = useContext(LinkContext);

  useEffect(() => {
    window.addEventListener("unload", () => {
      handleLogout();
    });
  }, []);

  const renderRouteElement = (isPrivate, element) => {
    if (isPrivate) {
      return <ProtectedRoutes children={element} />;
    }
    return element;
  };

  return (
    <div className="bg-light-blue font-jetbrains flex flex-col justify-center items-center h-full w-full py-4 px-4 md:px-10">
      <div className="h-full w-full md:w-[45rem]">
        <Routes>
          {routes.map((route) => {
            const elementHasChild = route.child.length > 0;

            return elementHasChild ? (
              <Route
                key={route.id}
                path={route.path}
                element={renderRouteElement(route.isPrivate, route.element)}
              >
                {route.child.map((item) => (
                  <Route
                    key={item.id}
                    path={item.path}
                    element={renderRouteElement(item.isPrivate, item.element)}
                  />
                ))}
              </Route>
            ) : (
              <Route
                key={route.id}
                element={renderRouteElement(route.isPrivate, route.element)}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
