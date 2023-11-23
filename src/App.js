import React from'react';
import Homepage from './pages/homepage/homepage';
import Future from './pages/future/future';
import ContactUs from './pages/contactus/contactus';
import SoFar from './pages/sofar/sofar';
import Layout from "./components/layout/layout";
import pages from "./pages/pages";
import GlobePage from './pages/globe/globe';
import './App.css'
import { Route, Routes } from "react-router-dom";

const App =()=> {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path={pages.get("homepage").path} element={<Homepage />} />
          <Route path={pages.get("future").path} element= {<Future />} />
          <Route path={pages.get("contactus").path} element= {<ContactUs />} />
          <Route path={pages.get("sofar").path} element= {<SoFar />} />
          <Route path={pages.get("globe").path} element= {<GlobePage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;