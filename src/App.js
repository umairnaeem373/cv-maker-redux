import "./App.css";
import Basic from "./Components/Basic Information/Basic";
import Login from "./Components/Login";
import ContactInfo from "./Components/ContactInformation/ContactInfo";
import Home from "./Components/HomePage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience/Experience";
import Review from "./Components/Review";
import Download from "./Components/Download";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basicinfo" element={<Basic />} />
          <Route path="/contactinfo" element={<ContactInfo/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/download" element={<Download/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
