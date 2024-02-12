import "./App.css";

import { useApi } from "./hooks/use-api";

// BrowserRouter wraps everywhere we want to use the router, Router wraps all individual routes, Route creates a single route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Pages and components
import Home from "./pages/home";
import Admin from "./pages/admin";
import Exams from "./pages/exams";
import CreateExam from "./pages/CreateExam";
import Patient from "./pages/patient";
import Login from "./pages/login";
//import Navbar from './components/Navbar'

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      {/*<header className="App-header">
        <p>
          {response}
        </p>
      </header>
  */}
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/exam/create" element={<CreateExam />} />
            <Route path="/patient" element={<Patient />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
