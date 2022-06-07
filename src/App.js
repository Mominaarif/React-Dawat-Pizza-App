import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Order from './components/Order';
import Product from './components/Product';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="products" element={<Products />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />} />
        <Route path="order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
