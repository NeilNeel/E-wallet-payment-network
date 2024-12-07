import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.js";
import Statements from "./components/Statements.js";
import TransactionHistory from "./components/TransactionHistory.js";
import Home from "./components/Home.js";
import Transactions from "./components/Transactions.js";
import Profile from "./components/Profile.js";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transaction form" element={<Transactions />} />
            <Route path="/statements" element={<Statements />} />
            <Route path="/transactions" element={<TransactionHistory />} />
            <Route path="/profile" element={<Profile />} />

            {/* Catch-all route */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
