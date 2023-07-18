import './App.css';
import { Home, ProductDetail, Cart, Login, Register, PageNotFound, Category } from "../src/pages"
import { Routes, Route } from 'react-router-dom';
import { Navbar } from "../src/components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
