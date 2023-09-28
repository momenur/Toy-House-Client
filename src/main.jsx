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
  <div className=''>
    <div className='mx-auto md:w-10/12'>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
    </div>
  </div>
)
