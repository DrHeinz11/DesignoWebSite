import { Grid } from "@chakra-ui/react";
import React from "react";
import OptionsDesign from "./OptionsDesign";
import gridItemData from "../constants/gridItemData";

const DesingSection = () => {
  const gridArea = {
    base: "none",
    md: `"a1 b2"
  "a1 b3"`,
  };
  return (
    <Grid
      id="DesingSection"
      gridTemplateRows={{
        base: "auto",
        sm: "repeat(2,1fr)",
      }}
      px={{ base: 2, md: 10 }}
      gridTemplateColumns={{
        base: "repeat(autofit,minmax(100px,1fr))",
        sm: "repeat(2,1fr)",
      }}
      gridTemplateAreas={gridArea}
      w={{ base: "full", md: "container.md", lg: "container.lg" }}
      m="0 auto"
      gap={13}
      h="md"
    >
      {gridItemData.map((element) => (
        <OptionsDesign
          key={element.key}
          route={element.route}
          title={element.title}
          gridArea={element.gridArea}
          urlBackground={element.urlBackground}
        />
      ))}
    </Grid>
  );
};

export default DesingSection;
