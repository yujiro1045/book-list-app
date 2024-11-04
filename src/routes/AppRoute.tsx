import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Books from "../pages/books/Books";
import { Paths } from "../constant/path";
import ReadingList from "../pages/books/ReadingList";
import Navbar from "../components/navbar/Navbar";

function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Layout>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path={Paths.LOGIN} element={<Login onLogin={handleLogin} />} />
        <Route path={Paths.REGISTER} element={<Register />} />
        <Route
          path={Paths.BOOKS}
          element={isAuthenticated ? <Books /> : <Navigate to={Paths.LOGIN} />}
        />
        <Route
          path={Paths.LIST}
          element={
            isAuthenticated ? <ReadingList /> : <Navigate to={Paths.LOGIN} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
