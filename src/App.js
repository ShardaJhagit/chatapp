import "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navi from './pages/Navi';
import Login from './pages/Login';
import Private from './pages/Private';
import Register from './pages/Register';
import Chat from './pages/Chat';




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
        
        </Route>
        
        
        
        
        
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={ <Login/> } />
      </Routes>
      

      
      
    </div>
  )
}

export default App;
