import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ProductsPage from "./pages/Products/ProductsPage";
import ContactPage from "./pages/Contact/ContactPage";
import CartPage from "./pages/Cart/CartPage";
import Navbar from "./common/Navbar/Navbar";
import Login from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
// import Profile from "./pages/Profile/Profile";
import ProfilePage from "./pages/Profile/ProfilePage";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import PageNotFoundPage from "./pages/PageNotFound/PageNotFoundPage";

function App() {
  const [count, setCount] = useState(0);
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const login = localStorage.getItem("items");
    // const login = JSON.parse(localStorage.getItem("items"));

    if (login) {
      const login1 = JSON.parse(localStorage.getItem("items"));
      navigate("/");
      // console.log(login.condition);
      setAuth(login1.condition);
    } else {
    }
  }, []);

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="*" element={<PageNotFoundPage />} />
        {auth ? (
          <Route path="/profile" element={<ProfilePage />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
