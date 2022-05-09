import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [home_content, setHome_content] = useState(window.innerWidth > 1024);

  window.addEventListener("resize", () => {
    setHome_content(window.innerWidth > 1024);
    console.log(window.innerWidth)
  });

    useEffect(() => {
      window.addEventListener("resize", ()=> {
        setHome_content(window.innerWidth > 1024)
        console.log(window.innerWidth)
      })
    })
  return (
    <Router>
    <div className="app">
      {window.innerWidth > 1024 || home_content ? (
      <>
       <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Routes>


        </Routes>
      </>)
      : (<h1 style={{color: "white"}}>This website is currently under development and doesn't support
      screens of width less than 1024px.</h1>)
    }
      
       

      
    </div>
    </Router>
  );
}

export default App;
