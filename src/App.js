import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './style.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
//import { Greeting } from './components/Containers/ItemListContainer';
import ProductosJson from './components/Containers/ItemListContainer';
import Home from './Routes/Home';


/*  <Greeting nombre={'Lucas Egea'} />*/

function App() {
  return (
   
     <BrowserRouter>  
            <div className="Header"><Header/></div> 
            <div className="Menu"><NavBar/> </div>
           
            
            <Routes>
              <Route exact path='/items' element={<ProductosJson />} />    
              <Route exact path='/home' element={<Home />} />         
            </Routes>
          
            
          </BrowserRouter>



  
  );
}

export default App;
