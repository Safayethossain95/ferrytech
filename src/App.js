import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './helpers/ScrollToTop';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {

  
  return (
    <>
       <BrowserRouter>
        
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
