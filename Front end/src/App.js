import './App.css';


import Home from './Component/Home';
import HomeNavbar from './Component/HomeNavbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Component/About';
import ContactUs from './Component/ContactUs';
import Products from './Component/Products';
import Authentication from './Component/Authentication/Registration';


import Login from './Component/Login';
import SubCategory from './Component/Subcategory';
import ProductDetails from './Component/Product_Details';
import Footer from './Component/Footer';
import CartPage from './Component/Shop';
import Search from './Component/Search';
import Registration from './Component/Authentication/Registration';

function App() {
  return (
    <>
      <HomeNavbar />
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productsByCat/:code" element={<Products />} />
            <Route path="/search/:code" element={<Search />} />
            <Route path="/subcategories/:code" element={<SubCategory />} />
            <Route path="/productdetails/:code" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
