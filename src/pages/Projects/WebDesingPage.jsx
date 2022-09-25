import { Heading, Grid, GridItem, Box, Stack } from "@chakra-ui/react";
import gridItemData from "../../constants/gridItemData";
import OptionsDesign from "../../components/OptionsDesign";
import { dataProjects } from "../../constants/dataProjects";

const WebDesingPage = ({ params }) => {
  const prueba = dataProjects.filter((element) => element.id === params.id);
  console.log(prueba, params);
  return (
    <>
      <Grid
        w="full"
        p={4}
        gap={10}
        gridTemplateColumns={"repeat(auto-fill,minmax(250px,1fr))"}
      >
        {}
      </Grid>
      {gridItemData && (
        <Stack direction="row" wrap={"wrap"} gap="10">
          {gridItemData?.map(
            (element, index) =>
              element.key !== params.id && (
                <Box h="xs" w="sm" key={element.index}>
                  <OptionsDesign
                    key={element.key}
                    route={element.route}
                    title={element.title}
                    urlBackground={element.urlBackground}
                  />
                </Box>
              )
          )}
        </Stack>
      )}
    </>
  );
};

export default WebDesingPage;
