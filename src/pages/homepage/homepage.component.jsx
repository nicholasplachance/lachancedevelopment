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
            "Specialist in performance testing tools: Apache JMeter, BlazeMeter, and Sitespeed.io",
            "Experience with Lotus for backend and API testing",
            "Skilled in load testing, stress testing, and performance analysis",
            "Comfortable working in CI/CD pipelines for performance regression"
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
