import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider,} from"react-router";
import Layouts from './Layouts/Layouts.jsx';
import UserDetails from '../components/UserDetails.jsx';
import UpdateUser from '../components/UpdateUser.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts ,
    children: [
      {
      index: true, Component: App
     },
     {
      path: 'user/:id',
      loader: ({params})=> fetch(`http://localhost:3000/user/${params.id}`),
      Component: UserDetails,
     },
     {
      path: "/update/:id",
      loader: ({params})=> fetch(`http://localhost:3000/user/${params.id}`),
      Component: UpdateUser,
     },
  
  ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
