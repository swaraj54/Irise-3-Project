import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Mens from './Components/Mens';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/single-product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search/:query' element={<Search />} />
        {/* <Route /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
