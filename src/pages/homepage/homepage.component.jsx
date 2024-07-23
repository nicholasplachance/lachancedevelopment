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
            "Experienced in performance testing tools such as JMeter, LoadRunner, and Performance Center",
            "Expertise in developing and implementing performance testing strategies",
            "Proven ability to identify and resolve performance bottlenecks",
            "Skilled in analyzing performance metrics and optimizing system performance"
          ]}
          address={"St. Louis, Missouri"}
        />
        <Section
          title={"Skill Set"}
          services={[
            "Holiday peak load testing",
            "Salesforce Commerce Cloud (SFCC) performance testing",
            "Client-side performance testing with tools like Sitespeed.io",
            "Load testing using JMeter and BlazeMeter",
            "Designing and implementing load and performance testing frameworks for enterprise environments"
          ]}
        />
        <Section
          id='contact'
          title={"Contact Information"}
          services={["Email: nicholasplachance@gmail.com"]}
        />
      </Container>
    </div>
  );
};

export default HomePage;
