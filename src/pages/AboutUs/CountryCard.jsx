import { Stack, Box, Image, Button, Heading } from "@chakra-ui/react";
import { Link } from "wouter";
import handleScrollTop from "../../utils/handleScrollTop";
import UndrawBG from "../../assets/UndrawBG.svg";
const CountryCard = ({ props: { country, imgUrl, route } }) => {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      justifyContent="space-between"
    >
      <Box
        backgroundImage={`url(${UndrawBG})`}
        backgroundPosition="top"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      >
        <Image src={imgUrl} alt={country} />
      </Box>

      <Stack alignItems="center">
        <Heading>{country}</Heading>
        <Link onClick={handleScrollTop} href={route}>
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
        </Link>
      </Stack>
    </Stack>
  );
};

export default CountryCard;
