import Fade from "react-reveal/Fade";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import { experience } from "../portfolio";

const Experience = () => {
  return (
    experience && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-warning">
                  <i className="ni ni-briefcase-24 text-warning" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-warning">Experience</h4>
              </div>
            </div>
            <Row className="row-grid align-items-start">
              {experience.map((data, i) => {
                return <ExperienceCard {...data} key={i} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Experience;
