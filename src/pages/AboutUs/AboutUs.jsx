import { Image } from "@chakra-ui/react";
import React from "react";
import CustomHeaderBox from "../../components/Custom/CustomHeaderBox";

const AboutUs = () => {
  return (
    <>
      <CustomHeaderBox
        heading="About Us"
        paragraph="' Typically enjoy cooking, but I don’t always have the time. Omsom has made me step my game up. Their ready-to-use starter pouches of spices and sauces have helped me churn out Asian dishes quickly minus the hassle of store-hopping and buying larger quantities than I need. Still, I always end up buying more than intended when I’m on their site because it not only looks delicious, but the copy is a huge motivator to click add-to-cart.'"
      >
        <Image
          borderEndRadius={{ base: "none", md: "xl" }}
          borderBottom={{ base: "xl", sm: "none" }}
          objectFit="cover"
          objectPosition="center"
          w="full"
          h="inherit"
          minW={{ base: "300px", sm: "400px" }}
          src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
          alt="Reunión"
        />
      </CustomHeaderBox>
    </>
  );
};

export default AboutUs;
