import react from "react";
import './App.css';
import RootLayout from './components/RootLayout/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Admin from './components/Admin/Admin';
import User from './components/User/User';

function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/signup",
          element:<SignUp />
        },
        {   
          path:"/user",
          element:<User />,
          },
        {
          path:"/admin",
          element:<Admin />,
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;