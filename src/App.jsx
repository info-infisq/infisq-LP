import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import ScrollToTop from "./components/layouts/scrollToTop/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}
