import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Header from "./Component/header";
import Home from "./Component/Home";
import Videos from "./Component/Videos";
import FreeVideos from "./Component/FreeVideos"
import Upload from "./Component/Upload"
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Signup from "./Component/Signup";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/videos?category=free" element={<FreeVideos/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
