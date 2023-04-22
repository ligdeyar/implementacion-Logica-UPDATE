import React from 'react';
import logo from './logo.svg';
import logo1 from './logo.png';
import logo2 from './logos-UNAH-11.png';
import './App.css';

import Color from './pages/Color';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
              <img src={logo1} alt="Logo.png" width="50" />
              <img src={logo2} alt="logos-UNAH-11.png" width="90"/>
          <li>
            <li>
              <Link to="/home">
               Home
              </Link>
            </li>
            <Link to="/Colors">
             Veterinaria Colors
            </Link>
            <body>
              <div id="root"></div>
              <script src="index.js"></script>
            </body>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
        path="/home"
        element={<h1>Welcome to my test </h1>}
        />
        <Route
        path="/colors"
        element={<Color />}
        />
      </Routes>
    </Router>
    
  );
}

export default App;
