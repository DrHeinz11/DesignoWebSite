import PagesHeading from "../AboutUs/PagesHeading";
import CountryCard from "../AboutUs/CountryCard";
import { dataCountry } from "../../constants/dataCountry";
import ContactForm from "./ContactForm";
import { Grid, Stack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Stack gap={10}>
      <PagesHeading
        heading="Contact"
        copy="Puedes contactarnos via email o por nuestras redes sociales"
        imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <ContactForm />
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

export default Contact;
