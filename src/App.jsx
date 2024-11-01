import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
