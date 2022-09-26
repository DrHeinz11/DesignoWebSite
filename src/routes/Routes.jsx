import { Route } from "wouter";
import AboutUs from "../pages/AboutUs/AboutUs";
import Location from "../pages/AboutUs/Location";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import WebDesingPage from "../pages/Projects/WebDesingPage";

const Routes = () => {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
      <Route path="/about-us/location">
        <Location />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/project/:id">
        {(params) => <WebDesingPage params={params} />}
      </Route>
    </>
  );
};

export default Routes;
