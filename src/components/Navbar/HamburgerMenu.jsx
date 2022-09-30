import React, { useState, useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuContainer from "./MenuContainer";
import { MenuSignal } from "../../services/ClickOutside-manager.service";

const HamburgerMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    MenuSignal.getSignal().subscribe((data) => setToggleMenu(data));
  }, []);

  const handleToggleMenu = () => setToggleMenu((prev) => !prev);
  return (
    <>
      <HamburgerIcon boxSize="2rem" onClick={handleToggleMenu} />
      <MenuContainer toggleMenu={toggleMenu} />
    </>
  );
};

export default HamburgerMenu;
