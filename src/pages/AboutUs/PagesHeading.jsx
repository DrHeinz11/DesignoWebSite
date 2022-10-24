import { Grid, Image, Stack, Box, Heading, Text } from "@chakra-ui/react";
import BubbleBG from "../../assets/BubleBg.svg";

const PagesHeading = ({ imageUrl, heading, copy }) => {
  return (
    <Grid
      bg="#fdf3f0"
      w="full"
      gridTemplateColumns="repeat(auto-fit,minmax(325px,1fr))"
      borderRadius="xl"
      minH='60vh'
    >
   <Box
        textAlign="start"
        textTransform="capitalize"
        py="10"
        px="5"
        margin="auto 0">

        <Heading color="#6c1e0f">{heading}</Heading>
        <Text color='blackAlpha.800' mt='10' fontSize="lg">{copy}</Text>
        </Box>
      <Box borderRadius="xl" backgroundColor="#fdf3f0" bg='#000'>
        <Image
          borderRadius="xl"
          w="99%"
          h="100%"
          objectFit="cover"
          src={imageUrl}
          alt={"${heading} Img"}
        />
      </Box>
    </Grid>
  );
};

export default PagesHeading;
