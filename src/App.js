import './App.css';
import './style.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Greeting } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <div className="Header"><Header/></div> 
      <div className="Menu"><NavBar/> </div>
      <div className='ItemList'> <ItemListContainer /> </div>
      <div className='greeting'><Greeting nombre={'Lucas'} /></div>


    </div>
  );
}

export default App;
