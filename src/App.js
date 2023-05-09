import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './helpers/ScrollToTop';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUsPage from './pages/AboutUsPage';

function App() {

  
  return (
    <>
       <BrowserRouter>
        
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
