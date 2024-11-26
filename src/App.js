import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './helpers/ScrollToTop';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesInfoPage from './pages/CookiesInfoPage';
import TermsnConditionsPage from './pages/TermsnConditionsPage';
import ScrollTop from './Components/Desktop/SubComponents/ScrollTop';
import BoardOfDirectorsPage from './pages/BoardOfDirectorsPage';
import TruckCraneProductsPage from './pages/TruckCraneProductsPage';
import TruckMountedCranePage from './pages/TruckMountedCranePage';
import ForkliftMountedCranePage from './pages/ForkliftMountedCranePage';
import SelfErectingCranePage from './pages/SelfErectingCranePage';
import ForkliftPage from './pages/ForkliftPage';
import SpiderCranePage from './pages/SpiderCranePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from "./pages/DashboardPage";
import PartnerBrandsPage from './pages/Dashboard/PartnerBrandsPage';
import IndustryCardPage from './pages/Dashboard/IndustryCardPage';
import IntroCompDashPage from './pages/Dashboard/IntroCompDashPage';

import ProductLinePage from './pages/Dashboard/ProductLinePage';
import WhyFerrytechCompDashPage from './pages/Dashboard/WhyFerrytechCompDashPage';
import FAQEditPage from './pages/Dashboard/FAQEditPage';
import ContactInfoPage from './pages/Dashboard/ContactInfoPage';
import AboutDashPage from './pages/Dashboard/AboutUsDashPage';
import ProductSingleCommonPage from './pages/ProductSingleCommonPage';
import ProductDashPage from './pages/Dashboard/ProductDashPage';


function App() {
 
  

  
  return (
    <>
       <BrowserRouter>
        
          <ScrollToTop/>
          <ScrollTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/partner-brands" element={<PartnerBrandsPage />} />
          <Route path="/dashboard/product-line" element={<ProductLinePage />} />
          <Route path="/dashboard/industrycards" element={<IndustryCardPage />} />
          <Route path="/dashboard/faqedit" element={<FAQEditPage />} />
          <Route path="/dashboard/contact" element={<ContactInfoPage />} />
          <Route path="/dashboard/aboutpage" element={<AboutDashPage />} />
          <Route path="/dashboard/productpage" element={<ProductDashPage />} />
          <Route path="/dashboard/whyferrytech" element={<WhyFerrytechCompDashPage />} />
          <Route path="/dashboard/introcomp" element={<IntroCompDashPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/boardofdirectors" element={<BoardOfDirectorsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product-single/:prodname" element={<ProductSingleCommonPage />} />
          <Route path="/truck-crane" element={<TruckCraneProductsPage />} />
          <Route path="/truck-mounted-crane" element={<TruckMountedCranePage />} />
          <Route path="/forklift-mounted-crane" element={<ForkliftMountedCranePage />} />
          <Route path="/self-erecting-crane" element={<SelfErectingCranePage />} />
          <Route path="/fork-lift" element={<ForkliftPage />} />
          <Route path="/spider-crane" element={<SpiderCranePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookies-information" element={<CookiesInfoPage />} />
          <Route path="/terms-conditions" element={<TermsnConditionsPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
