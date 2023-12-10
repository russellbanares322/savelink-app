import AuthLayout from "../components/authLayout/AuthLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    child: [],
    isPrivate: true,
  },
  {
    id: 2,
    path: "/auth",
    element: <AuthLayout />,
    child: [
      {
        id: 3,
        path: "sign-in",
        element: <SignIn />,
        child: [],
        isPrivate: false,
      },
    ],
    isPrivate: false,
  },
];
