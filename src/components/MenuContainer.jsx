import React from "react";
import { Box, Stack, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dataLink from "../constants/dataLink";
import CustomLink from "./CustomLink";
import { CloseIcon } from "@chakra-ui/icons";
import { MenuSignal } from "../services/ClickOutside-manager.service";

const MenuContainer = ({ toggleMenu }) => {
  const handleClick = (toggleMenu) => {
    MenuSignal.setSignal(!toggleMenu);
  };

  const animationKeyframes = keyframes`
  0% { transform: translate3d(0, -25rem, 0px) }
  100% { transform: translate3d(0, 0, 0px) }
`;

  const animation = `${animationKeyframes} 1s ease-in-out`;

  return (
    <>
      {toggleMenu && (
        <Box
          position="absolute"
          top="0"
          left="0"
          margin="0 !important"
          w="full"
          h="100vh"
          bg={"blackAlpha.400"}
          zIndex="popover"
          onClick={() => handleClick(toggleMenu)}
        >
          <Stack
            as={motion.div}
            animation={animation}
            direction="row"
            position="relative"
            justify="center"
            h="50vh"
            w="full"
            background="lightGray"
          >
            <Stack direction="column" justify="center" gap={10} h="full">
              {dataLink.map((element, index) => (
                <CustomLink
                  key={index}
                  route={element.route}
                  text={element.text}
                />
              ))}
            </Stack>
            <CloseIcon
              position="absolute"
              right="4"
              top="4"
              boxSize="2rem"
              onClick={() => handleClick(toggleMenu)}
            />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default MenuContainer;
