
import './App.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Fullinfo from './component/Fullinfo';
import About from './component/About';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
function App() {
  
  return (
    <Router>
     <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:productid" element={<Fullinfo/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/galery" element={<Gallery/>}/>
    
  </Routes>
  <Footer/>
       </Router>
    
  );
  }

export default App;
//product/:products  ori wertili amatebs dinamiurobas sias 