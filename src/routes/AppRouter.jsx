import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Process from "../pages/Process";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/:serviceType" element={<Service />} />
      <Route path="/process" element={<Process />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
