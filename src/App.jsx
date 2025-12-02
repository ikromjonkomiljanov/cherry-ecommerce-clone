import "./App.css";

// Defualt imports
import { Routes, Route } from "react-router-dom";

// Routes imports
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Registion from "./components/Registion";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Card from "./components/card";
import Addedcart from "./components/addedcartlist";
import AddedWishlist from "./components/addedwishlist";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cartlist" element={<Addedcart />} />
          <Route path="/wishlist" element={<AddedWishlist />} />
          <Route path="/card/:id" element={<Card />} />
          <Route path="/registion" element={<Registion />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
        />
      </div>
    </>
  );
}

export default App;
