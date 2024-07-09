import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import About from "./pages/About.tsx";
import Catalog from "./pages/Catalog.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import Contact from "./pages/Contact.tsx";
import Delivery from "./pages/Delivery.tsx";
import Partnership from "./pages/Partnership.tsx";

const router =createBrowserRouter(createRoutesFromElements(
    <Route path={"/"} element={<MainLayout/>} >
        <Route path={"/about"} element={<About/>}/>
        <Route index element={<About/>}/>
        <Route path={"/catalog"} element={<Catalog/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
        <Route path={"/delivery"} element={<Delivery/>}/>
        <Route path={"/partnership"} element={<Partnership/>}/>
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>,
)
