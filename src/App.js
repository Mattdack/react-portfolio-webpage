import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="h-screen">
       <Router basename="/">
        <Header/>
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="*" element={<h1>404 page</h1>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
