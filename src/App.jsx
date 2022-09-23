import "./App.css";
import { Route } from "wouter";
import { Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import UndrawComponent from "./components/UndrawComponent";
import { undrawData } from "./constants/undrawData";
import DesingSection from "./components/DesingSection";
import FooterContainer from "./components/Footer/FooterContainer";
function App() {
  return (
    <>
      <Stack alignItems="center" maxWidth="1200px" margin="0 auto">
        <Navbar />
        <Header />
        <Stack flexWrap="wrap" direction="row" p={2} justify="center">
          {undrawData.map((element, index) => (
            <UndrawComponent data={element} key={index} />
          ))}
        </Stack>
        <DesingSection />
        <Route path="/links">About Us</Route>
        <Route path="/web#desing">About Us</Route>
        <Route path="/app#desing">About Us</Route>
        <Route path="/app#project">About Us</Route>
      </Stack>
      <FooterContainer />
    </>
  );
}

export default App;
