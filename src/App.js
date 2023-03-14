import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ProductDetilas from "./Components/ProductDetilas";
import ProductsList from "./Components/ProductsList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/productsList" element={<ProductsList />} />
        <Route path="/productDetails/:id" element={<ProductDetilas />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
