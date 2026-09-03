import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { OrderProvider } from "./context/OrderContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MaintenanceModal from "./components/MaintenanceModal";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Order from "./pages/Order";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream font-body text-brown-darker">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MaintenanceModal />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </OrderProvider>
    </BrowserRouter>
  );
}
