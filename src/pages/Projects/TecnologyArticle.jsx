import { Stack, Text } from "@chakra-ui/react";
import CustomTag from "../../components/CustomTag";

const TecnologyArticle = ({ technology }) => {
  return (
    <>
      <Text fontSize="xs">Technology</Text>
      <Stack spacing={2} direction="row" wrap={"wrap"}>
        {technology.map((element) => (
          <CustomTag
            key={element.key}
            technologyName={element.technologyName}
            technologyUrl={element.technologyUrl}
          />
        ))}
      </Stack>{" "}
    </>
  );
};

export default TecnologyArticle;
