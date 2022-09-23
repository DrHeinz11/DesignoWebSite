import "./App.css";
import { Route } from "wouter";
import Home from "./pages/Home";
import WebDesingPage from "./pages/WebDesingPage";
import { Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

import FooterContainer from "./components/Footer/FooterContainer";
function App() {
  return (
    <>
      <Stack alignItems="center" maxWidth="1000px" gap={2} margin="0 auto">
        <Navbar menu={true} />
        <Route path="/">
          <Home />
        </Route>
        <Route path="/links">About Us</Route>
        <Route path="/project/:id">
          {(params) => <WebDesingPage params={params} />}
        </Route>
      </Stack>
      <FooterContainer />
    </>
  );
}

export default App;
