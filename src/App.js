
import './App.css';

import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer";
import Contacto from './components/Contacto';
import Footer from "./components/Footer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/productos' element={<ItemListContainer />}/>
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />}/> 
        <Route path='/item/:productId' element={<ItemDetailContainer />}/> 
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
