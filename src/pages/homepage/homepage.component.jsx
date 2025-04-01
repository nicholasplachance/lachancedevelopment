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
          title={"Load & Performance Testing"}
          subtitle={"Scaling systems under pressure"}
          services={[
            "Simulate high-traffic scenarios with JMeter and BlazeMeter",
            "Identify bottlenecks and tune system performance",
            "Test APIs, databases, and frontend under load",
            "Generate detailed test reports and dashboards"
          ]}
        />

        <Section
          title={"Frontend Performance Optimization"}
          subtitle={"Improving real user experience"}
          services={[
            "Use Sitespeed.io and Lighthouse for web vitals auditing",
            "Analyze Time-to-First-Byte, LCP, CLS, and TTI",
            "Optimize frontend assets, lazy loading, and JS execution",
            "Benchmark against industry leaders"
          ]}
        />

        <Section
          id='contact'
          title={"CI/CD & Automation"}
          subtitle={"Catch regressions before release"}
          services={[
            "Integrate load tests into GitHub Actions workflows",
            "Use Lotus for rapid API and backend stress testing",
            "Set performance budgets and gate builds",
            "Automated dashboards with Sitespeed or Grafana"
          ]}
        />

      </Container>
    </div>
  );
};

export default HomePage;
