import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Index";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import About from "./pages/About";
import Article from "./pages/Article";
import Award from "./pages/Award";
import Contact from "./pages/Contact";

// const location = useLocation

export default function App() {

  const location = useLocation()


  const validRoute = ["/home"];
  const isValidRoute = validRoute.includes(location.pathname);

  return (
    <>
      {isValidRoute && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article/>} />
        <Route path="/award" element={<Award />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {isValidRoute && <Footer/>}
    </>
  );
}
