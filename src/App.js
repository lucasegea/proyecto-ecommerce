import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './style.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import GetItemListContainerFire from './components/Containers/GetItemContainerFirebase';
import Home from './Routes/Home';
import ItemDetails from './components/Item/ItemDetails';
import CartPage from './Routes/Cart';
import {CartItemProvider} from './contexts/CartContext';

function App() {

  return (
    <CartItemProvider>
      <BrowserRouter>
        <div className="Header"><Header /></div>
        <div className="Menu"><NavBar /> </div>
        <Routes>
          <Route exact path='/items' element={<GetItemListContainerFire />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/itemdetail/:id' element={<ItemDetails />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartItemProvider>
  );
}

export default App;
