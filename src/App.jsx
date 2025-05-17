import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Index";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

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
        <Route path="*" element={<NotFound />} />
      </Routes>

      {isValidRoute && <Footer/>}
    </>
  );
}
