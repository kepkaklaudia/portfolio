import { Row, Col, Card } from "react-bootstrap";
import { StyledCard, StyledButton } from "../styled";
import { MotionLine1, MotionLine2 } from "./Motion";

export const Error = () => {
  return (
    <>
      <Row>
        <Col>
          <Card
            as={StyledCard}
          >
            <Card.Body>
              <Card.Title>
                Oops! Error loading...
              </Card.Title>
              <Card.Text
                style={{
                  height: "150px"
                }}
              >
                Press Open GitHub to check the projects directly on GitHub!
                <svg
                  viewBox="-50 -25 125 125"
                  width="80%"
                  height="80%"
                >
                  <MotionLine1 />
                  <MotionLine2 />
                </svg>
              </Card.Text>
              <StyledButton
                href="https://github.com/kepkaklaudia?tab=repositories"
              >
                Open Github
              </StyledButton>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}