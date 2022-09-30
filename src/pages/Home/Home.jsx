import { undrawData } from "../../constants/undrawData";
import DesingSection from "../../components/DesingSection";
import UndrawComponent from "../../components/UndrawComponent";
import Header from "./Header";
import { Grid } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Header />
      <Grid
        gridTemplateColumns={"repeat(auto-fill,minmax(300px,1fr))"}
        justifyItems="center"
        alignItems="center"
        w="full"
        minH="100vh"
        gap={2}
        p={2}
      >
        {undrawData.map((element, index) => (
          <UndrawComponent data={element} key={index} />
        ))}
      </Grid>
      <DesingSection />
    </>
  );
};

export default Home;
