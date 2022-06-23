import React, { useState } from "react";
// Styles
import "normalize.css";
import "./App.scss";
// Components
import { Header } from "./components/Header/Header";
import MyCarousel from "./components/Carousel/Carousel";
import { Shop } from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Cart } from "./components/Cart/Cart";
//Auth
import { AuthProvider } from "./authContext";

window.addEventListener('click', (e) =>{
  if(e.target === document.getElementById('signupWrapper')){
    document.querySelector(".Signup")?.classList.remove("show");
    document.body.classList.remove("scrollLock");
  }
}
)

window.addEventListener('click', (e) =>{
  if(e.target === document.getElementById('login')){
    document.querySelector(".Login")?.classList.remove("show");
    document.body.classList.remove("scrollLock");
  }
}
)

window.addEventListener('click', (e) =>{
  if(e.target === document.getElementById('cartContainer')){
    document.querySelector(".Cart")?.classList.remove("show");
  }
}
)

export default function App() {
  const [cartItems, setItems] = useState<
    {
      name: string;
      id: number;
      description?: string;
      pic?: string;
      price: string;
      weight?: string;
      quantaty?: number;
    }[]
  >([]);
  function updateState(a: any) {
    setItems(a);
  }

  return (
    <AuthProvider>
      <div className="App">
        <Header cartItems={cartItems} />
        <div className="Cart">
          <Cart updateState={updateState} cartItems={cartItems} />
        </div>
        <div className="Login">
          <Login />
        </div>
        <div className="Signup">
          <Signup />
        </div>
        <MyCarousel />
        <Shop updateState={updateState} cartItems={cartItems} />
        <Footer />
      </div>
    </AuthProvider>
  );
}
