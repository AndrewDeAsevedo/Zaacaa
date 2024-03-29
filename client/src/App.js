import "./App.css";
import { useApi } from "./hooks/use-api";

// BrowserRouter wraps everywhere we want to use the router, Router wraps all individual routes, Route creates a single route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Pages and components
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Exams from "./pages/Exams";
import CreateExam from "./pages/CreateExam";
import EditExam from "./pages/EditExam";
import Patient from "./pages/Patient";
import Login from "./pages/login";
import Contact from "./pages/Contact";
import PID from "./pages/PID";
import SignUp from "./pages/signup";
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
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/exam/create" element={<CreateExam />} />
            <Route path="/exam/edit/:_id" element={<EditExam />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/pID" element={<PID />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
