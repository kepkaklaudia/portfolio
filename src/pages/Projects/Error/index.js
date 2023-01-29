import { motion } from "framer-motion";
import { Row, Col, Card } from "react-bootstrap";
import { StyledCard, StyledButton } from "../styled";

const initial = { pathLength: 0, opacity: 0 };
const animate = { pathLength: 1, opacity: 1 };
const transition = (i) => {
  return {
    opacity: 1,
    duration: 1,
    delay: 1 + 0.5 * i,
  }
};

export const Error = () => {
  return (
    <>
      <Row>
        <Col>
          <Card as={StyledCard}>
            <Card.Body>
              <Card.Title>
                Oops! Error loading...
              </Card.Title>
              <Card.Text
                style={{ height: "150px" }}
              >
                Press Open GitHub to check the projects directly on GitHub!
                <svg
                  viewBox="-50 -25 125 125"
                  width="80%"
                  height="80%"
                >
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="70"
                    y2="70"
                    stroke="#990000"
                    initial={initial}
                    animate={animate}
                    transition={transition(0)}
                    strokeWidth="8px"
                    strokeLinecap="round"
                  />
                  <motion.line
                    x1="0"
                    y1="70"
                    x2="70"
                    y2="0"
                    stroke="#990000"
                    initial={initial}
                    animate={animate}
                    transition={transition(1)}
                    strokeWidth="8px"
                    strokeLinecap="round"
                  />
                </svg>
              </Card.Text>
              <StyledButton
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kepkaklaudia?tab=repositories">
                Open Github
              </StyledButton>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}