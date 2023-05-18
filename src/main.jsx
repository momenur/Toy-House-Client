import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// React Router
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gray-500'>
    <div className='w-10/12 mx-auto'>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
    </div>
  </div>
)
