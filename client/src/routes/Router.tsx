import ChatApp from "@/chatBot/ChatApp";
import LandingPage from "@/pages/LandingPage";
import RecipePage from '@/pages/RecipePage';
import RecipeDetails from "@/pages/RecipeDetails";
import { Routes, Route } from "react-router-dom";
// import { ClerkProvider } from "@clerk/clerk-react";

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

const RouterDom = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage />} />
        
          <Route path="/chat" element={<ChatApp />} />
        
          <Route path='/recipes' element={<RecipePage/>}/>
        
          <Route path="/recipe/:id" element={<RecipeDetails/>} />
      </Routes>
    </>
  );
};

export default RouterDom;
