import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import HookUseState from "./pages/Ganchos/UseState/HookUseState";
import HookUseContext from "./pages/Ganchos/UseContext/HookUseContext";
import { AprendaContext } from "./context/AprendaContext";

/*
Criar páginas que expliquem cada hook, dentro dela, mostrar exemplos executando
*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
        <AprendaContext.Provider value={{nome: "Gabriel"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hooks/useState" element={<HookUseState />} />
            <Route path="/hooks/useContext" element={<HookUseContext />} />
          </Routes>
          </AprendaContext.Provider>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
