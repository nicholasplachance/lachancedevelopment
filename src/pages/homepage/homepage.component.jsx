import Container from "../../components/Container/Container";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Section from "../../components/Sections/Section";

const HomePage = () => {
  return (
    <div className='homepage'>
      <HeroBanner />
      <main className='spacer'></main>
      <Container>
        <Section
          title={"About Me"}
          subtitle={"Performance Test Engineer"}
          services={[
            "Experienced in JMeter, LoadRunner, Performance Center",
            "Expertise in creating performance testing strategies",
            "Proven track record of identifying and resolving performance bottlenecks",
            "Adept at analyzing performance metrics and optimizing systems"
          ]}
          address={"St. Louis, Missouri"}
        />
        <Section
          title={"Skill Set"}
          services={[
            "Holiday load testing",
            "SFRA load testing",
            "Client-side performance testing with Sitespeed.io",
            "Load testing using JMeter and hosting the tests using BlazeMeter",
            "Architect and set up load and performance testing frameworks in enterprise environments"
          ]}
        />
        <Section
          id='contact'
          title={"Contact info"}
          services={["Email:", "nicholasplachance@gmail.com"]}
        />
      </Container>
    </div>
  );
};

export default HomePage;
