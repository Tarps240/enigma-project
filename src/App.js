import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import RotorSettings from "./components/RotorSettings";
import PlugboardSettings from "./components/PlugboardSettings";
import HistoryPage from "./components/HistoryPage";
import HomePage from "./pages/HomePage";
import { enigmaMachine } from "./utils/enigmaLogic";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [rotorConfig, setRotorConfig] = useState({
    rotors: ["I", "II", "III"],
    positions: [0, 0, 0],
  });

  const [plugboardConfig, setPlugboardConfig] = useState({});
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);

  const handleEncode = () => {
    const encodedMessage = enigmaMachine(input, rotorConfig, plugboardConfig);
    setOutput(encodedMessage);
    setHistory([...history, { input, output: encodedMessage }])
  };

  return (
    <Router>
      <div className='container mt-5'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>
              Enigma Emulator
            </Link>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                  Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/emulator'>
                  Emulator
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/history'>
                  History
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path='/emulator'
            element={
              <div>
                <h1 className="text-center mb-4">Enigma Machine Emulator</h1>
                <div className='row'>
                  <div className='col-md-6'>
                    <InputSection input={input} setInput={setInput} />
                  </div>
                  <div className='col-md-6'>
                    <OutputSection output={output} />
                  </div>
                </div>
                <RotorSettings config={rotorConfig} setConfig={setRotorConfig} />
                <PlugboardSettings
                  config={plugboardConfig}
                  setConfig={setPlugboardConfig}
                />
                <div className='text-center mt-4'>
                  <button className='btn btn-success' onClick={handleEncode}>
                    Encode/Decode
                  </button>
                </div>
              </div>
            }
          />
          <Route path='/history' element={<HistoryPage history={history} />} />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;