import "./App.css";
import Routes from "./routes/Routes";
import { Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import FooterContainer from "./components/Footer/FooterContainer";
function App() {
  return (
    <>
      <Stack alignItems="center" maxWidth="1200px" margin="0 auto">
        <Navbar menu={true} />
        <Routes />
      </Stack>
      <FooterContainer />
    </>
  );
}

export default App;
