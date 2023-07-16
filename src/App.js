import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import LoginE from './components/LoginE';

import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';

function App() {


  return (
    
<>
<Router>
   <Navbar title="DevHub"  login="Login" />

   <div className="container my-3">
    <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route exact path='/login' element={<Login/>}/>
     <Route exact path='/logine' element={<LoginE/>}/>
     <Route exact path='/register' element={<Register/>}/>
   </Routes>
   </div>
   </Router>
   </>
  );
  
}

export default App;


