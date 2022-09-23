import { Text } from "@chakra-ui/react";
import { Link } from "wouter";

const CustomLink = ({ fontColor, route, text }) => {
  return (
    <Link href={route}>
      <Text
        cursor="pointer"
        color={fontColor}
        fontWeight="400"
        textTransform="uppercase"
        letterSpacing={2}
      >
        {text}
      </Text>
    </Link>
  );
};

export default CustomLink;
