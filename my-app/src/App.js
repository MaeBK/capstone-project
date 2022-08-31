import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from  "./components/Projects";
import Contact from "./components/Contact";

import './App.css';
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
