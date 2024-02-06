import './App.css';

import { useApi } from './hooks/use-api';

// BrowserRouter wraps everywhere we want to use the router, Router wraps all individual routes, Route creates a single route
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and components
import "./App.css";
import Home from './pages/Home'
import Admin from './pages/Admin'
import Exam from './pages/Exam'
import Patient from './pages/Patient'

import Navbar from './components/Navbar'

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
        <Navbar />
        <div className="pages"> 
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/admin"
              element={<Admin />}
            />
            <Route 
              path="/exam"
              element={<Exam />}
            />
            <Route 
              path="/patient"
              element={<Patient />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
