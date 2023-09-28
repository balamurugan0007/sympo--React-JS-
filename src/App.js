import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Eventpage from "./pages/Event/Eventpage";
import Errorpage from "./pages/404/Errorpage";
import Navbar from "./components/navbar";
import Page from "./pages/register/Page";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/register" element={<Page/>}/>
              <Route path="/event/:id/:name" element={<Eventpage/>}/>
              <Route path="*" element={<Errorpage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
