import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Main from '../../layout/Main';
import Home from '../../pages/home/home/Home';
import Login from '../../pages/login/Login';
import Registration from '../../pages/registration/Registration';
import AllToys from '../../pages/allToys/AllToys';
import MyToys from '../../pages/myToys/MyToys';
import AddAToy from '../../pages/addAToy/AddAToy';
import UpdateToy from '../../pages/updateToy/UpdateToy';
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
          element:<AllToys></AllToys>
        },
        {
          path:"my_toys",
          element:<MyToys></MyToys>
        },
        {
          path:"toy_update/:id",
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`http://localhost:5000/toyMarketplace/${params.id}`)
        },
        {
          path:"add_a_toy",
          element:<AddAToy></AddAToy>
        },
        {
          path:"blogs",
          element:<></>
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
  ]);


export default router