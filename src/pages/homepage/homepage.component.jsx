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
          title={"LaChance Development"}
          subtitle={"Established 2021."}
          services={[
            "- Freelance Web Developer",
            "",
            "- Design and build custom websites and web apps",
            "",
            "- Completely custom code and layout",
            "",
            "- Mobile friendly responsive design",
            "",
            "- SEO Optimized",
          ]}
          address={"St. Louis, Missouri"}
        />
        <Section
          id='contact'
          title={"About"}
          services={[
            "Hi, my name is Nicholas LaChance, one of my greatest passions is technology. With my passion I taught myself many technologies that allow me to create websites and web applications. My goal is to provide mobile responsive and SEO friendly websites written with clean code.",
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
