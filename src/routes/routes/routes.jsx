import React from 'react'
import {createBrowserRouter} from "react-router-dom";
// import pages
import Main from '../../layout/Main';
import Home from '../../pages/home/home/Home';
import Login from '../../pages/login/Login';
import Registration from '../../pages/registration/Registration';
import AllToys from '../../pages/allToys/AllToys';
import MyToys from '../../pages/myToys/MyToys';
import AddAToy from '../../pages/addAToy/AddAToy';
import UpdateToy from '../../pages/updateToy/UpdateToy';
import ToyDetails from '../../pages/allToys/ToyDetails';
import Error from '../../pages/error/Error';
import Blogs from '../../pages/blogs/Blogs';
import PrivetRoute from '../privetRoute/PrivetRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"all_toys",
          element:<AllToys></AllToys>,
          loader:()=>fetch(`https://toy-marketplace-server-developersridoy-gmailcom.vercel.app/totalToys`)
        },
        {
          path:"toy_details/:id",
          element:<PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
          loader:({params})=>fetch(`https://toy-marketplace-server-developersridoy-gmailcom.vercel.app/toys/${params.id}`)
        },
        {
          path:"my_toys",
          element:<PrivetRoute><MyToys></MyToys></PrivetRoute>
        },
        {
          path:"toy_update/:id",
          element:<PrivetRoute><UpdateToy></UpdateToy></PrivetRoute>,
          loader:({params})=>fetch(`https://toy-marketplace-server-developersridoy-gmailcom.vercel.app/toys/${params.id}`)
        },
        {
          path:"add_a_toy",
          element:<PrivetRoute><AddAToy></AddAToy></PrivetRoute>
        },
        {
          path:"blogs",
          element:<Blogs></Blogs>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"registration",
          element:<Registration></Registration>
        }
      ]
    },
    {
      path:"*",
      element:<Error></Error>
    }
  ]);


export default router