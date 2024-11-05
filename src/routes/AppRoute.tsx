import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Books from "../pages/books/Books";
import { Paths } from "../constant/path";
import ReadingList from "../pages/reading-list/ReadingList";
import Navbar from "../components/navbar/Navbar";
import useAuthStore from "../store/useAuthStore";

function AppRoutes() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route
          path={Paths.LOGIN}
          element={isAuthenticated ? <Navigate to={Paths.BOOKS} /> : <Login />}
        />
        <Route
          path={Paths.REGISTER}
          element={
            isAuthenticated ? <Navigate to={Paths.BOOKS} /> : <Register />
          }
        />
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
