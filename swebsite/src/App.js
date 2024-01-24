import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutPage"
import Projects from "./pages/ProjectPage"
import Navbar from "./pages/Navbar"
import Highlights from "./pages/HighlightsPage"

function App() {
  const images = ['/carousel/At IG.jpg','/carousel/Bank Buildings.jpg','/carousel/Haight.jpg','/carousel/NYC.jpg','/carousel/SF Botanical Gardens.jpg','/carousel/UC Botanical Garden.jpg','/carousel/UC Botanical Gardens 2.jpg','/carousel/UCB.jpg'];
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<AboutMe images={images}/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/highlights" element={<Highlights/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
