import { Grid, Image, Stack, Box, Heading, Text } from "@chakra-ui/react";
import BubbleBG from "../../assets/BubleBg.svg";

const PagesHeading = ({ imageUrl, heading, copy }) => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "repeat(3,1fr)",
      }}
      gridTemplateRows={{ base: "repeat(2,1fr)", sm: "1fr" }}
      gridTemplateAreas={{
        base: `'copy',
'image'`,
        sm: "none",
      }}
      gap={{ base: 2, md: 4 }}
      bg="#f7f7f7"
      backgroundImage={`url(${BubbleBG})`}
      backgroundRepeat="no-repeat"
      boxShadow="md"
      borderRadius="xl"
    >
      <Stack
        justify={"center"}
        aling="center"
        area={"copy"}
        gridArea={{ sm: "1 / 1 / 2 / 3" }}
        backdropFilter="blur(50px)"
        p={{ base: 10, md: 14 }}
        borderRadius="xl"
      >
        <Heading color="#6c1e0f">{heading}</Heading>
        <Text fontSize="lg">{copy}</Text>
      </Stack>
      <Box
        area={"image"}
        gridArea={{ sm: "1 / 3 / 2 / 4" }}
        borderRadius="xl"
        backgroundColor="#fdf3f0"
      >
        <Image
          borderRadius="xl"
          h="full"
          w="full"
          objectFit="cover"
          src={imageUrl}
          alt={'${heading} Img'}
        />
      </Box>
    </Grid>
  );
};

export default PagesHeading;
