import PagesHeading from "../AboutUs/PagesHeading";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <PagesHeading
        heading="Contact"
        copy="Puedes contactarnos via email o por nuestras redes sociales"
        imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <ContactForm/>
    </>
  );
};

export default Contact;
