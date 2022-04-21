import React from 'react';
import Home from "./Home";
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Helmet>
        <title>Astro the Golden</title>
        <meta name="my lovely doggo" content="the goldenator" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
        <ul>
          <li>
            <Link to="/home">Navigate to Doge</Link>
          </li>
          </ul>
        <Routes>
          <Route exact path="/home" element={
            <Home />
          }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
