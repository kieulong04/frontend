import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFound from "./pages/notFound";
import LayoutWebsite from "./components/layout";
import DetailProductPage from "./pages/detailProduct";

function App() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />}/>
          <Route path="products/:id" element={<DetailProductPage />}/>
          <Route path="shop" element={<ShopPage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="contact" element={<ContactPage />}/>
          <Route path="notfound" element={<NotFound />}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
