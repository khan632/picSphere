import { LogIn } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Signup from "./pages/signup";
import Home from "./pages/home";
import MyPhotos from "./pages/myphotos";
import Profile from "./pages/profile";
import CreatePost from "./pages/Post";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LogIn />,
        errorElement: <Error />
    },
    {
        path: '/signup',
        element: <Signup />,
        errorElement: <Error />
    },
    {
        path: '/home',
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: '/myphotos',
        element: <MyPhotos />,
        errorElement: <Error />
    },
    {
        path: '/post',
        element: <CreatePost />,
        errorElement: <Error />
    },
    {
        path: '/profile',
        element: <Profile />,
        errorElement: <Error />
    },
]);

export default router;