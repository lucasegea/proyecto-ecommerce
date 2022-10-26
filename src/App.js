import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import './App.css';
import './style.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
//import { Greeting } from './components/Containers/ItemListContainer';
import GetItemListContainerFire from './components/Containers/GetItemContainerFirebase';
import Home from './Routes/Home';

function ProductPage() {
  let {id} =useParams();
}

function App() {
  return (
   
     <BrowserRouter>  
            <div className="Header"><Header/></div> 
            <div className="Menu"><NavBar/> </div>
            <Routes>
              <Route exact path='/items' element={<GetItemListContainerFire />} />    
              <Route exact path='/home' element={<Home />} />              
              <Route path='/ItemDetail/:id' element ={<GetItemListContainerFire idToSearch="eBA9Hd3p7vyecJgQ8rgY"/>} />
            </Routes>
      </BrowserRouter>



  
  );
}

export default App;
