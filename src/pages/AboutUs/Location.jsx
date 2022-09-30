import { Divider, Grid, Stack } from "@chakra-ui/react";
import LocationCard from "./LocationCard";
import PagesHeading from "./PagesHeading";
import {dataLocation} from '../../constants/dataLocation'

const Location = () => {
  return (
    <>
      <Stack p="4" gap="8">
        <PagesHeading
          copy="              Our location is in all the country in east of Europe,includes
              Poland and Ukraine."
          heading="Location"
          imageUrl="https://sites.google.com/site/mrrungsunklinkaeo115/_/rsrc/1504414442768/home/Google%20Earth%2C%20Luxembourg%2C%20Mr.%20Rungsun%20Klinkaeo%2C%20September%203%2C%202017..jpg"
        />
          <Divider/>
        <Grid minH="100vh" gap={8}>
          {dataLocation.map((element) => (
            <LocationCard props={element} key={element.key} />
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default Location;
