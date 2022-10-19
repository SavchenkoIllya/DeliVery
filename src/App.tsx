import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Map from "./components/Maps/map";
//Auth
import { AuthProvider } from "./appContext";
import { About } from "./components/About/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <div className="App">
                <Header />
                <Cart />
                <Login />
                <Signup />
                <MyCarousel />
                <About/>
                <Shop />
                <Map />
                <Footer />
              </div>
            </AuthProvider>
          }
        />
      </Routes>
    </Router>
  );
}
