import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friend from './components/Friend/Friend';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/contact",
//     element: <Contact6></Contact6>
//   }
// ]);



const router = createBrowserRouter([
{
  path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <First></First>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendID',
        element: <FriendDetails></FriendDetails>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
        
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path:'/post',
        element: <Posts></Posts>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postID',
        element: <PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
      },
      {
        path:'*',
        element:<div>404 Not Found</div>
      }
      
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
