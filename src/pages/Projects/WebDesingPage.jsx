import { Grid, Box, Stack } from "@chakra-ui/react";
import gridItemData from "../../constants/gridItemData";
import OptionsDesign from "../../components/OptionsDesign";
import ProjectsCard from "./ProjectsCard";
import { dataProjects } from "../../constants/dataProjects";

const WebDesingPage = ({ params }) => {
  const DataFilter = dataProjects.filter(
    (element) => element.id === params.id && element.data
  );

  return (
    <>
      <Grid
        w="full"
        p={4}
        gap={10}
        gridTemplateColumns={"repeat(auto-fill,minmax(250px,1fr))"}
        alignItems="center"
      >
        {DataFilter?.map((element) =>
          element.data?.map((element, i) => (
            <ProjectsCard
              key={i + Date.now()}
              title={element.title}
              route={element.route}
              technology={element.technology}
              urlThumbnail={element.urlThumbnail}
              description={element.description}
            />
          ))
        )}
      </Grid>
      {gridItemData && (
        <Stack direction="row" wrap={"wrap"} gap="10">
          {gridItemData?.map(
            (element, index) =>
              element.key !== params.id && (
                <Box
                  margin="0 !important"
                  h="2xs"
                  w={{ base: "full", md: "sm" }}
                  key={index}
                >
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
