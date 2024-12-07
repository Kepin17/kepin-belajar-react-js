import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home";
import { blogLoader, postLoader } from "../Loaders/loader";
import PostPage from "../pages/home/contents/blog/_id";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        loader: blogLoader
    }, {
        path: "/blog/:id",
        element: <PostPage/>,
        loader: postLoader
    }
])

export default router