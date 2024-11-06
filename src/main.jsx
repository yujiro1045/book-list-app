import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

//console.log(import.meta.env.VITE_API_URL);

createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </>
);
