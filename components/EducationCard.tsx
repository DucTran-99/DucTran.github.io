import { Badge, Card, CardBody } from "reactstrap";
import { EducationType } from "../types/sections";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-warning">{schoolName}</h5>
            <h6>{subHeader}</h6>
            <Badge color="warning" className="mr-1">
              {duration}
            </Badge>
            {grade && (
              <Badge color="warning" className="mr-1">
                {grade}
              </Badge>
            )}
            <p className="description mt-3">{desc}</p>
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
