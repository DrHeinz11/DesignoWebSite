import { Grid, Stack } from "@chakra-ui/react";
import LocationCard from "./LocationCard";
import PagesHeading from "./PagesHeading";
const dataLocation = [
  {
    heading: "Canada",
    imgUrl:
      "https://adler-designo-app.netlify.app/static/media/image-map-canada.dce629d0.png",
    contact: { phone: "+1 253-863-8967", email: "contact@designo.com" },
    location: {
      country: "CA",
      address: "3886 Wellington Street",
      coordinates: "Toronto,Ontario M9C 3J5",
    },
    key: 1,
  },
  {
    heading: "Australia",
    imgUrl:
      "https://adler-designo-app.netlify.app/static/media/image-map-australia.3afe58f8.png",
    contact: { phone: "(02) 6720 9092", email: "contact@designo.au" },
    location: {
      country: "AU",
      address: "19 Balone Street",
      coordinates: "New South Wales,Au 2443",
    },
    key: 2,
  },
  {
    heading: "United Kingdom",
    imgUrl:
      "https://adler-designo-app.netlify.app/static/media/image-map-canada.dce629d0.png",
    contact: { phone: "078 3115 1400", email: "contact@designo.uk" },
    location: {
      country: "UK",
      address: "13 Colorado Way",
      coordinates: "London,Uk SA8 9GA",
    },
    key: 3,
  },
];
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
