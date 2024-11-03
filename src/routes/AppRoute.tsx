import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Books from "../pages/books/Books";
import { Paths } from "../constant/path";
import ReadingList from "../pages/books/ReadingList";

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path={Paths.LOGIN} element={<Login />} />
        <Route path={Paths.REGISTER} element={<Register />} />
        <Route path={Paths.BOOKS} element={<Books />} />
        <Route path={Paths.LIST} element={<ReadingList />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
