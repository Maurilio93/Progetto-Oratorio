import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LandingPage } from './Section/LandingPage.jsx';
import { Contatti } from './Section/Contatti.jsx';
import { Classifica } from './Section/Classifica.jsx';
import { Marcatori } from './Section/Marcatori.jsx';
import { Risultati } from './Section/Risultati.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/contatti",
    element: <Contatti />
  },
  {
    path: "/classifica",
    element: <Classifica />
  },
  {
    path: "/marcatori",
    element: <Marcatori />
  },
  {
    path: "/risultati",
    element: <Risultati />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
