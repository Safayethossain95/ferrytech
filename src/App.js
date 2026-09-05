import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./Components/Desktop/SubComponents/ScrollTop";
import ScrollToTop from "./helpers/ScrollToTop";
import AboutUsPage from "./pages/AboutUsPage";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage";
import ContactPage from "./pages/ContactPage";
import CookiesInfoPage from "./pages/CookiesInfoPage";
import IndustryCardPage from "./pages/Dashboard/IndustryCardPage";
import IntroCompDashPage from "./pages/Dashboard/IntroCompDashPage";
import PartnerBrandsPage from "./pages/Dashboard/PartnerBrandsPage";
import DashboardPage from "./pages/DashboardPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ProductPage from "./pages/ProductPage";
import ServicesPage from "./pages/ServicesPage";
import TermsnConditionsPage from "./pages/TermsnConditionsPage";

import { Toaster } from "react-hot-toast";
import AboutDashPage from "./pages/Dashboard/AboutUsDashPage";
import BoardOfDirectorsdashPage from "./pages/Dashboard/BoardOfDirectorsdashPage";
import ContactInfoPage from "./pages/Dashboard/ContactInfoPage";
import FAQEditPage from "./pages/Dashboard/FAQEditPage";
import NavbarDashPage from "./pages/Dashboard/NavbarDashPage";
import ProductDashPage from "./pages/Dashboard/ProductDashPage";
import ProductLinePage from "./pages/Dashboard/ProductLinePage";
import ProtectedRoute from "./pages/Dashboard/ProtectedRoute/ProtectedRoute";
import ServiceDashPage from "./pages/Dashboard/ServiceDashPage";
import ServiceMainTextDash from "./pages/Dashboard/ServiceMainTextDash";
import SignUpDashPage from "./pages/Dashboard/SignUpDashPage";
import WhyFerrytechCompDashPage from "./pages/Dashboard/WhyFerrytechCompDashPage";
import ProductSingleCommonPage from "./pages/ProductSingleCommonPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" />
        <ScrollToTop />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<DashboardPage />} />}
          />
          <Route
            path="/dashboard/signup"
            element={<ProtectedRoute element={<SignUpDashPage />} />}
          />
          <Route
            path="/dashboard/partner-brands"
            element={<ProtectedRoute element={<PartnerBrandsPage />} />}
          />
          <Route
            path="/dashboard/product-line"
            element={<ProtectedRoute element={<ProductLinePage />} />}
          />
          <Route
            path="/dashboard/industrycards"
            element={<ProtectedRoute element={<IndustryCardPage />} />}
          />
          <Route
            path="/dashboard/faqedit"
            element={<ProtectedRoute element={<FAQEditPage />} />}
          />
          <Route
            path="/dashboard/contact"
            element={<ProtectedRoute element={<ContactInfoPage />} />}
          />
          <Route
            path="/dashboard/aboutpage"
            element={<ProtectedRoute element={<AboutDashPage />} />}
          />
          <Route
            path="/dashboard/productpage"
            element={<ProtectedRoute element={<ProductDashPage />} />}
          />
          <Route
            path="/dashboard/servicepage"
            element={<ProtectedRoute element={<ServiceDashPage />} />}
          />
          <Route
            path="/dashboard/servicemaintext"
            element={<ProtectedRoute element={<ServiceMainTextDash />} />}
          />
          <Route
            path="/dashboard/navbar"
            element={<ProtectedRoute element={<NavbarDashPage />} />}
          />
          <Route
            path="/dashboard/bod"
            element={<ProtectedRoute element={<BoardOfDirectorsdashPage />} />}
          />
          <Route
            path="/dashboard/whyferrytech"
            element={<ProtectedRoute element={<WhyFerrytechCompDashPage />} />}
          />
          <Route
            path="/dashboard/introcomp"
            element={<ProtectedRoute element={<IntroCompDashPage />} />}
          />

          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/boardofdirectors" element={<BoardOfDirectorsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/product-single/:prodname"
            element={<ProductSingleCommonPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookies-information" element={<CookiesInfoPage />} />
          <Route path="/terms-conditions" element={<TermsnConditionsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
