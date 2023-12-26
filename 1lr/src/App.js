import React from 'react';
import "./main.css";
import Header from "./pages/Header";
import FooterBlock from "./pages/FooterBlock";
import Career from "./pages/Career";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomeBlock from "./pages/HomeBlock";
import HeaderOnOtherPages from "./pages/HeaderOnOtherPages";
function App() {
  return (
      <div>
          <BrowserRouter basename="/">
              <header>
                  <Routes>
                      <Route path="/" element={<Header/>}/>
                      <Route path="/career" element={<HeaderOnOtherPages/>}/>
                  </Routes>
              </header>
              <main>
                  <Routes>
                      <Route path="/" element={<HomeBlock/>}/>
                      <Route path="/career" element={<Career />}/>
                  </Routes>
              </main>
              <footer>
                <FooterBlock/>
              </footer>
          </BrowserRouter>
      </div>
  );
}


export default App;