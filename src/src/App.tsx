import { useEffect, useState } from "react";
// Styles
import "normalize.css";
import "./App.scss";
// Components
import { Header } from "./components/Header/Header";
import MyCarousel from "./components/Carousel/Carousel";
import { Shop } from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import { Cart } from "./components/Cart/Cart";
//Auth
import { AuthProvider } from "./authContext";
//Types
import { Product } from "./Types/types";

export default function App() {
  const [cartItems, setItems] = useState<Product>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignup, setOpenSignup] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  useEffect(() => {
    openSignup || openLogin
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [openSignup, openLogin]);
  return (
    <AuthProvider>
      <div className="App">
        <Header
          cartItems={cartItems}
          setOpenLogin={setOpenLogin}
          setOpenSignup={setOpenSignup}
          setOpenCart={setOpenCart}
        />
        <Cart
          openCart={openCart}
          setOpenCart={setOpenCart}
          updateState={setItems}
          cartItems={cartItems}
        />
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          setOpenSignup={setOpenSignup}
        />
        <Signup
          openSignup={openSignup}
          setOpenLogin={setOpenLogin}
          setOpenSignup={setOpenSignup}
        />
        <MyCarousel />
        <Shop updateState={setItems} cartItems={cartItems} />
        <Footer />
      </div>
    </AuthProvider>
  );
}
