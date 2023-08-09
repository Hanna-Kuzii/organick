import React from "react";
import "./App.css";
import "./scss/style.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Order } from "./pages/Order/Order";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to={"/"} replace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
