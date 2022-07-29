import { BrowserRouter } from "react-router-dom";
import "./styles.css";

import { Router } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
