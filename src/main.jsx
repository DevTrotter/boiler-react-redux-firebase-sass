import React from 'react'
import 'sanitize.css';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Shop } from './pages/Shop/Shop';
import { Provider } from 'react-redux'
import { store } from './utils/redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
