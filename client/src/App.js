import "./App.css";

import { useApi } from "./hooks/use-api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exams from "./pages/exams";
import Patient from "./pages/patient";
import Admin from "./pages/admin";
import Login from "./pages/login";

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
          <Route index element={<Login />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
