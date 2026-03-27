import { BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation();
  const hideFooter = ["/login", "/register", "/teachers"].some(p => location.pathname.startsWith(p));

  return (
    <>
      <Navbar />
      <AppRoutes />
      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}