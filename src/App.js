import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Shared/Navbar';
import Users from './components/Auth/Users';
import Applications from './components/Applications/ApplicationsPage';

export default function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Users} />
          <Route exact path='/applications' component={Applications} />
        </Routes>
      </div>
    </Router>
  );
}