
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Reusables/NavBar';
import Home from './components/Pages/Home'
import SignIn from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Reusables/Footer';


function App() {
  return (
    <router>
      <NavBar/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/SignIn'  element={<SignIn/>} />
        <Route path='/SignUp'  element={<SignUp/>} />
      </Routes>
      <Footer/>
    </router>
    
     
    
  );
}

export default App;
