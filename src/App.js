import Footer from "./Components/Core/Footer";
import Navbar from "./Components/Core/Navbar";
import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/Product-Details/Product-Details";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";
import ProductList from "./Components/Product-List/Product-List";
import ProductForm from "./Components/Product-Form/Product-Form";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/addNewProduct" element={<ProductForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
