
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/fruits' element={<ShopCategory category="fruits"/>}></Route>
          <Route path='/vegetables' element={<ShopCategory category="vegetables"/>}></Route>
          <Route path='/freshnuts' element={<ShopCategory category="freshnuts"/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
             <Route path=':productId' element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
