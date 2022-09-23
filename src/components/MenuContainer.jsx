import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import dataLink from "../constants/dataLink";
import CustomLink from "./CustomLink";
import { CloseIcon } from "@chakra-ui/icons";
import { MenuSignal } from "../services/ClickOutside-manager.service";

const MenuContainer = ({ toggleMenu }) => {
  const handleClick = (toggleMenu) => {
    MenuSignal.setSignal(!toggleMenu);
  };

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
          <Stack direction="row" h="50vh" w="full" background="lightGray">
            <Box>
              {dataLink.map((element, index) => (
                <CustomLink
                  key={index}
                  route={element.route}
                  text={element.text}
                />
              ))}
            </Box>
            <CloseIcon onClick={() => handleClick(toggleMenu)} />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default MenuContainer;
