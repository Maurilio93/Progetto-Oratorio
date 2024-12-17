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
import { Galleria } from './Section/Galleria.jsx';
import { LaNostraStoria } from './Section/LaNostraStoria.jsx';
import { PrimaSquadra } from './Section/PrimaSquadra.jsx';
import { Under19 } from './Section/Under19.jsx';
import smoothscroll from "smoothscroll-polyfill";


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
  },
  {
    path: "/galleria",
    element: <Galleria />
  },
  {
    path: "/lanostrastoria",
    element: <LaNostraStoria />
  },
  {
    path: "/primasquadra",
    element: <PrimaSquadra />
  },
  {
    path: "/under19",
    element: <Under19 />
  }
]);

smoothscroll.polyfill();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
