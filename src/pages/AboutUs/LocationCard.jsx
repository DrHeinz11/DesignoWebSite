import { Grid, Image, Heading, Text, Stack, Box } from "@chakra-ui/react";

const LocationCard = ({ props: { heading, imgUrl, contact, location } }) => {
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
      p={1}
      bg="#f7f7f7"
      boxShadow="sm"
      borderRadius="xl"
    >
      <Stack
        justify={"center"}
        aling="center"
        area={"copy"}
        gridArea={{ sm: "1 / 1 / 2 / 3" }}
        p={{ base: 4, md: 8 }}
        borderRadius="xl"
        backgroundColor="#fdf3f0"
      >
        <Heading color="mainOrange">{heading}</Heading>
        <Stack direction="row" gap={{ base: 2, md: 6 }} wrap="wrap">
          <Box>
            <Text fontWeight="500">Designo {location.country} Office</Text>
            <Text>{location.address}</Text>
            <Text>{location.coordinates}</Text>
          </Box>
          <Box>
            <Text fontWeight="500">Contact</Text>
            <Text>P:{contact.phone}</Text>
            <Text>M:{contact.email}</Text>
          </Box>
        </Stack>
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
          src={imgUrl}
          alt={heading}
        />
      </Box>
    </Grid>
  );
};

export default LocationCard;
