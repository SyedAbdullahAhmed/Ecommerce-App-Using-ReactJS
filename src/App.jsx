import React, { useState } from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { Categories } from "./Pages/Categories/Categories";
import { About } from "./Pages/About/About";
import { SinglePage } from "./Pages/SinglePage/SinglePage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Newsletter } from "./Components/Newsletter/Newsletter";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path = "/" element={<Home/>}>home</Route>
          <Route exact path = "/login" element={<Login/>}>login</Route>
          <Route exact path = "/signup" element={<Signup/>}>signup</Route>
          <Route exact path = "/categories" element={<Categories/>}>categories</Route>
          <Route exact path = "/singlepage" element={<SinglePage/>}>singlepage</Route>
          <Route exact path = "/about" element={<About/>}>about</Route>
      </Routes>
      <Newsletter/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App