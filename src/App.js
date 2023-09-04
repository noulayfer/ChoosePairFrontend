import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MainPage from './MainPage'; // Import your components for each route
import AddPoint from './AddPoint';
import { StudentPair } from './StudentPair';
import { StudentPairProvider } from './StudentPair'; 
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <StudentPairProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code>
            </p>

            {/* Navigation links */}
            <nav>
              <ul>
                <li>
                  <Link to="/">Main Page</Link>
                </li>
                <li>
                  <Link to="/student-pair">Student Pair</Link>
                </li>
                <li>
                  <Link to="/add-point">Add Point</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/student-pair" element={<StudentPair />} />
              <Route path="/add-point" element={<AddPoint />} />
            </Routes>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </StudentPairProvider>
    </Router>
  );
}

export default App;
