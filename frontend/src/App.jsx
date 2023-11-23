import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Auth from "./pages/Auth/Auth";
import OneModal from "./pages/ResetPassword/OneModal/OneModal";
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <GoogleOAuthProvider clientId="562637798189-br1bjlrul0vo4qin18l2uaq7u2q5m759.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reset-to-email" element={<OneModal />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;