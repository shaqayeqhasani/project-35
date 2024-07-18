import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import TrackOrder from "./pages/TrackOrder";
import Faq from "./pages/Faq";
import Dashboard from "./pages/Dashboard";
import Cart from "./components/Cart";
import Whishlist from "./components/Whishlist";
import Pcomparison from "./components/Pcomparison";
import AllProduct from "./pages/AllProduct";
import SellerApplication from "./pages/SellerApplication";
import SingleProduct from "./pages/SingleProduct";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="About" element={<About/>} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="Blog" element={<Blog/>} />
        <Route path="TrackOrder" element={<TrackOrder/>} />
        <Route path="Faq" element={<Faq/>} />
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="Cart" element={<Cart/>} />
        <Route path="Whishlist" element={<Whishlist/>} />
        <Route path="Pcomparison" element={<Pcomparison/>} />
        <Route path="AllProduct" element={<AllProduct/>} />
        <Route path="SellerApplication" element={<SellerApplication/>} />
        <Route path="SingleProduct" element={<SingleProduct/>} />
      </Route>
    </Routes>
  );
}

export default App;
