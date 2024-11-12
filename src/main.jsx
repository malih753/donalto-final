import "animate.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { JobContextProvider } from "./context/jobContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </JobContextProvider>
  </StrictMode>
);
