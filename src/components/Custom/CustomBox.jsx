import { Box } from "@chakra-ui/react";
import BubbleBG from "../assets/BubleBg.svg";
const CustomBox = ({ children }) => {
  return (
    <Box
      backgroundImage={`url(${BubbleBG})`}
      backgroundPosition={{ base: "14rem 0", md: "8rem -8rem" }}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundColor="mainOrange"
      borderRadius="xl"
      w={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      maxW="full"
    >
      {children}
    </Box>
  );
};

export default CustomBox;
