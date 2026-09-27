import { BrowserRouter, Routes, Route } from "react-router-dom";

import SmoothScroll from "./animations/SmoothScroll";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import PortfolioDetail from "./pages/PortfolioDetail";
import Portfolio from "./pages/Portfolio";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";
import JobDetail from "./pages/JobDetail";
import Careers from "./pages/Careers";
import Application from "./pages/Application";
import BusinessHealthCheckup from "./pages/BusinessHealthCheckup";
import LeadMagnet from "./pages/LeadMagnet";

function App() {
  return (
    <BrowserRouter>
      {/* Lenis Smooth Scrolling */}
      <SmoothScroll />

      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Consultation */}
        <Route
          path="/consultation"
          element={<Consultation />}
        />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Services Overview */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* Individual Service */}
        <Route
          path="/services/:slug"
          element={<ServiceDetail />}
        />

        {/* Portfolio */}
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/portfolio/:slug"
          element={<PortfolioDetail />}
        />

        {/* Blog */}
        <Route
          path="/blog/:slug"
          element={<BlogDetail />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        {/* Careers */}
        <Route
          path="/careers/:slug"
          element={<JobDetail />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        <Route
          path="/careers/:slug/apply"
          element={<Application />}
        />

        {/* Business Health Checkup */}
        <Route
          path="/business-health-checkup"
          element={<BusinessHealthCheckup />}
        />

        {/* Lead Magnet */}
        <Route
          path="/software-project-planning-guide"
          element={<LeadMagnet />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;