import { BrowserRouter, Routes, Route } from "react-router-dom";

import Work from "./Pages/Work/Work";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import OneItem from "./Components/Work/OneItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/:oneItem" element={<OneItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
