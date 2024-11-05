import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoute";
import "./global.css";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
