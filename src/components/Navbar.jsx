import { Stack } from "@chakra-ui/react";
import CustomLink from "./CustomLink";
import dataLink from "../constants/dataLink";
import { Link } from "wouter";
import Logo from "./Logo";

const Navbar = ({ fontColor = "deepGray" }) => {
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
        {dataLink.map((element, index) => (
          <CustomLink
            key={index}
            fontColor={fontColor}
            route={element.route}
            text={element.text}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
