import { Image, Stack } from "@chakra-ui/react";
import CustomHeaderBox from "../../components/Custom/CustomHeaderBox";

const Location = () => {
  return (
    <Stack p="4">
      <CustomHeaderBox
        heading="Location"
        paragraph="Our location is in all the country in east of Europe,includes Poland and Ukraine."
      >
        <Image
          src="https://sites.google.com/site/mrrungsunklinkaeo115/_/rsrc/1504414442768/home/Google%20Earth%2C%20Luxembourg%2C%20Mr.%20Rungsun%20Klinkaeo%2C%20September%203%2C%202017..jpg"
          alr="LocationMap"
          objectFit="cover"
          maxH="full"
          h="inherit"
          borderRadius="xl"
          objectPosition={"right"}
        />
      </CustomHeaderBox>
    </Stack>
  );
};

export default Location;
