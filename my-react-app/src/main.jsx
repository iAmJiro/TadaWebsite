import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
