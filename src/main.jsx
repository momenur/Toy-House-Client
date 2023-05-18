import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// React Router
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gray-500'>
    <div className='w-10/12 mx-auto'>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  </div>
)
