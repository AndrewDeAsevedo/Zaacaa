import "./App.css";

import { useApi } from "./hooks/use-api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Exams from "./pages/exams";
import Patient from "./pages/patient";
import Admin from "./pages/admin";

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      {/*
      Not super sure what this does, and quite frankly it 
      keeps breaking the code. Lmk if this messes anything up -Andrew

      <header className="App-header">
        <p>{response}</p>
      </header>  
      */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
