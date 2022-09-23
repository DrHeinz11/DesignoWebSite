import { Stack } from "@chakra-ui/react";
import React from "react";
import {
  BehanceIcon,
  FacebookIcon,
  InstagramIcon,
  LinkdinIcon,
  TwitterIcon,
} from "../Icons/index";

const MediaIcon = () => {
  const props = { width: "2rem", height: "2rem" };
  return (
    <Stack direction="row" spacing={5} alignItems="center">
      <BehanceIcon props={props} route="/links" />
      <FacebookIcon props={props} route="/links" />
      <InstagramIcon props={props} route="/links" />
      <TwitterIcon props={props} route="/links" />
      <LinkdinIcon props={props} route="/links" />
    </Stack>
  );
};

export default MediaIcon;
