import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
import { ExperienceType } from "../types/sections";

interface ExperienceCardProps extends ExperienceType {}

const ExperienceCard = ({
  id,
  companyLogo,
  company,
  role,
  date,
  desc,
  descBullets,
  technologies,
  otherProjects,
}: ExperienceCardProps) => {
  const targetId = `card-${id}`;

  return (
    <Col lg="6">
      <Card
        id={targetId}
        style={{ flex: 1, cursor: "pointer" }}
        className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100 cursor-pointer"
      >
        <CardBody>
          <img
            src={companyLogo}
            style={{
              objectFit: "contain",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
              backgroundColor: "#000",
            }}
            className="shadow mb-3"
            alt={companyLogo}
          />
          <CardTitle tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
              {otherProjects && otherProjects?.length > 0 && <a className="text-warning">Hover Show More!</a>}
            </ul>
            {technologies && technologies?.length > 0 && (
              <div className="text-sm">
                <span style={{ fontWeight: 700 }}>Technologies:</span>
                {technologies.map((tech, index) => {
                  return (
                    <span key={tech}>
                      {" "}
                      {tech}
                      {index !== technologies.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </div>
            )}
          </CardText>
        </CardBody>
      </Card>

      {otherProjects && otherProjects?.length > 0 && (
        <UncontrolledPopover target={targetId} trigger="hover" popperClassName="custom-popover">
          <PopoverHeader>Other Projects</PopoverHeader>
          <PopoverBody>
            {otherProjects.map((project, index) => (
              <div key={index}>
                {project.logo && (
                  <img
                    src={project.logo}
                    style={{
                      objectFit: "contain",
                      left: 0,
                      right: 0,
                      top: "7rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    className="shadow mb-2 mr-2"
                    alt={project.logo}
                  />
                )}
                {project.name}
                <ul>
                  {project.desc
                    ? project.desc.map(desc => {
                        return <li key={desc}>{desc}</li>;
                      })
                    : null}
                </ul>
                {project.technologies && project.technologies?.length > 0 && (
                  <div className="text-sm">
                    <span style={{ fontWeight: 700 }}>Technologies:</span>
                    {project.technologies.map((tech, index) => {
                      return (
                        <span key={tech}>
                          {" "}
                          {tech}
                          {index !== tech.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </div>
                )}
                {index !== otherProjects.length - 1 ? <hr className="my-1" /> : ""}
              </div>
            ))}
          </PopoverBody>
        </UncontrolledPopover>
      )}
    </Col>
  );
};

export default ExperienceCard;
