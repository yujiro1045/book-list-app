import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Books from "../pages/books/Books";
import { Paths } from "../constant/path";

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path={Paths.LOGIN} element={<Login />} />
        <Route path={Paths.REGISTER} element={<Register />} />
        <Route path={Paths.BOOKS} element={<Books />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
