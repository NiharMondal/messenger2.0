import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/messenger2.0/login" element={<Login />} />
      <Route path="/messenger2.0/register" element={<Register />} />
      <Route path="/messenger2.0/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/messenger2.0/register" />} />
    </Routes>
  );
};

export default App;
