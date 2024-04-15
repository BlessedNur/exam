import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
// import Navbar from "./Components/Navbar/Header";
import AuthProvider from "./AuthProvider/AuthProvider";
import Footer from "./Components/Navbar/Footer";
import Details from "./Pages/Details";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Details />} />

        </Routes>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
