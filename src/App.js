import React from 'react';
import {Routes,Route,useNavigationType,useLocation} from "react-router-dom";
import Home from './pages/Home';
import Report from "./pages/Report";
import WriteBlog from "./pages/WriteBlog";
import Contact from "./pages/Contact";
import Profile from './pages/Profile';
import Cleaning from './pages/Cleaning';
import Cooking from './pages/Cooking';
import Decoration from './pages/Decoration';
import Story from './pages/Story';
import { useEffect } from "react";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/report" element={<Report />} />
      <Route path="/writeblog" element={<WriteBlog />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/cleaning" element={<Cleaning />}/>
      <Route path="/cooking" element={<Cooking />}/>
      <Route path="/decoration" element={<Decoration />}/>
      <Route path="/story" element={<Story />}/>
    </Routes>
  );
}
export default App;
