import React from "react";
import "./App.css";
import "./scss/style.scss";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { OrderGood } from "./types/orderGood";
import { OrderListContext } from "./hooks/OrderListContext";
import { OrderEnd } from "./pages/OrderEnd/OrderEnd";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { AboutUsPage } from "./pages/AboutUs/AboutUsPage";
import { Shop } from "./pages/Shop/Shop";
import { News } from "./pages/News/News";
import { Services } from "./pages/Services/Services";
import { Quality } from "./pages/Quality/Quality";
import { Projects } from "./pages/Projects/Projects";
import { Good } from "./types/good";
import { OrderPage } from "./pages/OrderPage/OrderPage";

function App() {
  const [orderList, setOrderList] = useState<OrderGood[]>([]);
  const [products, setProducts] = useState<Good[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("http://localhost:8000/products");
        setProducts(result.data);
      }
      catch(err) {
        console.log(err)
      }
    };
    fetchProducts();
  }, []);
  
  useEffect(() => {
    const storedOrderList = localStorage.getItem('orderList');
    if (storedOrderList) {
      setOrderList(JSON.parse(storedOrderList));
    }
  }, []);

  return (
    <OrderListContext.Provider value={{ orderList, setOrderList }}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderEnd />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/shop" element={<Shop products={products}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ordersPage" element={<OrderPage />} />
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </div>
    </OrderListContext.Provider>
  );
}


export default App;
