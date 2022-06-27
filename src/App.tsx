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
import { AuthProvider } from "./appContext";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Cart />
        <Login />
        <Signup />
        <MyCarousel />
        <Shop />
        <Footer />
      </div>
    </AuthProvider>
  );
}
