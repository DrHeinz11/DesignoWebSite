import { Divider, Grid, Stack } from "@chakra-ui/react";
import PagesHeading from "./PagesHeading"
import { dataCountry } from "../../constants/dataCountry";
import CountryCard from "./CountryCard";

const AboutUs = () => {

  return (
    <Stack gap={10}>
      <PagesHeading heading='About Us' copy={`Typically enjoy cooking, but I don't always have the time. Omsom has made me step my game up. Their ready-to-use starter pouches of spices and sauces have helped me churn out Asian dishes quickly minus the hassle of store-hopping and buying larger quantities than I need. Still, I always end up buying more than intended when I'm on their site because it not only looks delicious, but the copy is a huge motivator to click add-to-cart.`} imageUrl='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
      <Divider/>
      <Grid
        minH="50vh"
        gap={4}
        w="full"
        gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        justifyItems={"center"}
      >
        {dataCountry?.map((element) => (
          <CountryCard
            props={element}
            key={element.key}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default AboutUs;
