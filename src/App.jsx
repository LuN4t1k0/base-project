import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Galeria from "./components/Galeria";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Galeria/>} />
          <Route path="/favoritos" element={ <h1>Favoritos</h1> }/>
          <Route path="*" element={ <h1>:( Pagina no encontrada</h1> }/>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
