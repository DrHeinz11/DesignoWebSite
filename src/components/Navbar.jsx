import { Heading, Stack, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      align="center"
      justify="space-between"
      w="full"
      p={4}
    >
      <Logo />
      <Stack direction="row" spacing={4}>
        <Link href="/links">
          <Text
            color={"deepGray"}
            fontWeight="500"
            textTransform="uppercase"
            letterSpacing={2}
          >
            our company
          </Text>
        </Link>
        <Link href="/links">
          <Text
            color={"deepGray"}
            fontWeight="500"
            textTransform="uppercase"
            letterSpacing={2}
          >
            locations
          </Text>
        </Link>
        <Link href="/links">
          <Text
            color={"deepGray"}
            fontWeight="500"
            textTransform="uppercase"
            letterSpacing={2}
          >
            contact
          </Text>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
