import { Outlet } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';


function App (){
  return(
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  ) 
}

export default App;