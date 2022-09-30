import { Stack, Box, Image, Button, Heading } from "@chakra-ui/react";
import UndrawBG from "../../assets/UndrawBG.svg";
const CountryCard = ({ props: { country, imgUrl } }) => {
  return (
    <Box
      backgroundImage={`url(${UndrawBG})`}
      backgroundPosition="top"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      h='full'
    >
      <Stack h='inherit' alignItems="center" textAlign='center' justifyItems="center">
        <Image src={imgUrl} alt={country} />
        <Stack alignItems="center">
          <Heading>{country}</Heading>
          <Button
            fontWeight="300"
            color="white"
            bg="mainOrange"
            textTransform="Uppercase"
            borderRadius="md"
            _hover={{ bg: "#ffad9b" }}
          >
            see location
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CountryCard;
