import "./projects.styles.css";
import Container from "../../components/Container/Container";

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-commerce Platform Performance Testing",
      description: "Used JMeter to simulate high user traffic and identified performance bottlenecks that led to a 30% improvement in load times.",
      tools: ["JMeter", "Grafana", "Kibana"]
    },
    {
      title: "Banking Application Load Testing",
      description: "Implemented LoadRunner scripts to test the performance of a banking application under peak load conditions, achieving a 25% increase in transaction processing speed.",
      tools: ["LoadRunner", "Performance Center"]
    }
  ];

  return (
    <div className='projects-page'>
      <h2>Projects</h2>
      <Container>
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tools:</strong> {project.tools.join(", ")}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProjectsPage;
