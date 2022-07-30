import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { Router } from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react";

import { UserNameContext } from "./privider/UserNameContext";

import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserNameContext>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserNameContext>
    </ChakraProvider>
  );
}
