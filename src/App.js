import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import './App.css';
import './style.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
//import { Greeting } from './components/Containers/ItemListContainer';
import { ItemListContainer} from './components/Containers/ItemListContainer';
import Home from './Routes/Home';
import ItemDetailsProvider from './components/Item/ItemDetail';
import { ItemListFiltered } from './components/Containers/GetDataFiltered';
/*  <Greeting nombre={'Lucas Egea'} />*/

function ProductPage() {
  let {id} =useParams();
}

function App() {
  return (
   
     <BrowserRouter>  
            <div className="Header"><Header/></div> 
            <div className="Menu"><NavBar/> </div>
            <Routes>
              <Route exact path='/items' element={<ItemListContainer/>} />    
              <Route exact path='/home' element={<Home />} />              
              <Route path='/ItemDetail/' element ={<ItemListFiltered/>} />
            </Routes>
      </BrowserRouter>



  
  );
}

export default App;
