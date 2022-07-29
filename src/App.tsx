import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { Router } from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
