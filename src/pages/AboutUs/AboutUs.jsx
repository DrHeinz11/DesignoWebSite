import { Divider, Grid, Stack } from "@chakra-ui/react";
import PagesHeading from "./PagesHeading";
import { dataCountry } from "../../constants/dataCountry";
import CountryCard from "./CountryCard";
import CompanyCard from "../../components/CompanyCard";
import ImgReal from "../../assets/image-real-deal.f3117a64.jpg";
import ImgWorld from "../../assets/image-world-class-talent.7588c45e.jpg";

const AboutUs = () => {
  return (
    <Stack gap={16} px='4'>
      <PagesHeading
        heading="About Us"
        copy={`Typically enjoy cooking, but I don't always have the time. Omsom has made me step my game up. Their ready-to-use starter pouches of spices and sauces have helped me churn out Asian dishes quickly minus the hassle of store-hopping and buying larger quantities than I need. Still, I always end up buying more than intended when I'm on their site because it not only looks delicious, but the copy is a huge motivator to click add-to-cart.`}
        imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Divider />
      <CompanyCard
        imgUrl={ImgReal}
        imgAlt="Real"
        title="The real deal"
        text={`As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.

We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`}
      />
      <Grid
        minH="50vh"
        gap={4}
        w="full"
        gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        justifyItems={"center"}
      >
        {dataCountry?.map((element) => (
          <CountryCard props={element} key={element.key} />
        ))}
      </Grid>
      <CompanyCard
        imgUrl={ImgWorld}
        imgAlt="World"
        title="World-class talent"
        text={`We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.

Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.`}
      />
    </Stack>
  );
};

export default AboutUs;
