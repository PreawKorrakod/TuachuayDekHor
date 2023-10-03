import React, { useEffect,useState ,createContext} from 'react';
import {Routes,Route,Navigate,useNavigationType,useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Report from "./pages/Report";
import WriteBlog from './pages/WriteBlog';
import Contact from "./pages/Contact";
import Profile from './pages/Profile';
import Cleaning from './pages/Cleaning';
import Cooking from './pages/Cooking';
import Decoration from './pages/Decoration';
import Story from './pages/Story';
import CleaningDetails from './pages/CleaningDetails';
import StoryDetails from './pages/StoryDetails';
import CookingDetails from './pages/CookingDetails';
import DecorationDetails from './pages/DecorationDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Reportfinish from './pages/Reportfinish';
import Forget from './pages/Forget';
import Contactfinish from './pages/Contactfinish';
import Blogger from './pages/Blogger';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://kykxspcgnsbnzvbofapj.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl,supabaseKey);

export const General =createContext({});

function App() {
  const [session,setSession] =useState(null);
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const value = {
    supabase_for_use: supabase,
    session: session,
    user: session?.user,
  };

  return (
    <General.Provider
      value = {value}
    >
      <Routes>
        <Route path="/" element={<Navigate to ='/home'/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/report" element={<Report />} />
        <Route path="/writeblog" element={<WriteBlog />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/cleaning" element={<Cleaning />}/>
        <Route path="/cleaning/:id" element={<CleaningDetails />}/>
        <Route path="/cooking" element={<Cooking />}/>
        <Route path="/cooking/:id" element={<CookingDetails />}/>
        <Route path="/decoration" element={<Decoration />}/>
        <Route path="/decoration/:id" element={<DecorationDetails />}/>
        <Route path="/story" element={<Story />}/>
        <Route path="/story/:id" element={<StoryDetails />}/>
        <Route path="/reportfinish" element={<Reportfinish />}/>
        <Route path="/forget" element={<Forget />}/>
        <Route path="/contactfinish" element={<Contactfinish />}/>
        <Route path="/blogger" element={<Blogger />}/>
      </Routes>
    </General.Provider> 
  );
}
export default App;
