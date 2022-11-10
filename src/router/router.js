import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyRevirws/MyReview";
import ReviewUpdate from "../Pages/MyRevirws/ReviewUpdate";
import ServiceDetails from "../Pages/ServiceDetails.js/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/my-reviews',
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>
            },
            {
                path: '/review-update/:id',
                element: <PrivateRouter><ReviewUpdate></ReviewUpdate></PrivateRouter>,
                loader: ({ params }) => fetch(`https://photographer-server-xi.vercel.app/rreview/${params.id}`)
            },
            {
                path: '/add-service',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path: '/service-details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://photographer-server-xi.vercel.app/service-details/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <img src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN" alt="" />
    }
])