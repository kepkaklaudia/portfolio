import { Row, Col, Card } from "react-bootstrap";
import { StyledCard } from "../../pages/Projects/styled";
import { MotionPath1, MotionPath2 } from "./Motion";

export const Loader = () => {
  return (
    <>
      <Row>
        <Col>
          <Card
            as={StyledCard}
          >
            <Card.Body>
              <Card.Title>
                Loading...
              </Card.Title>
              <Card.Text
                style={{
                  height: "150px"
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 500 500"
                >
                  <MotionPath1 />
                  <MotionPath2 />
                </svg>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
