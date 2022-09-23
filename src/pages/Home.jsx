import { undrawData } from "../constants/undrawData";
import DesingSection from "../components/DesingSection";
import UndrawComponent from "../components/UndrawComponent";
import Header from "../components/Header";
import { Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Header />
      <Stack flexWrap="wrap" direction="row" p={2} justify="center">
        {undrawData.map((element, index) => (
          <UndrawComponent data={element} key={index} />
        ))}
      </Stack>
      <DesingSection />
    </>
  );
};

export default Home;
