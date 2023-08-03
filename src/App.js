import "react-router-dom"
import './App.css';
import Home from './pages/Home';
//import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Navi from './pages/Navi';
import Login from './pages/Login';
import Private from './pages/Private';
import Register from './pages/Register';
//import Enroll from './pages/Enroll';
import Chat from './pages/Chat';
import Log from './pages/Log';
import ChatPrivacy from './pages/ChatPrivacy';



import {Routes,Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navi/>
      
      <Routes>
        <Route element={<Private/>}>
        
          
          
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        
        <Route path="/chat" element={ <Chat/> } />
        <Route path="/username" element={ <Log/> } />
        </Route>
        
        
        
        
        
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={ <Login/> } />
      </Routes>
      

      
      
    </div>
  )
}

export default App;
