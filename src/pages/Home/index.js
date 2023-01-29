import { Row, Col, Container } from "react-bootstrap";
import { Heading, Title, Subtitle } from "./styled";
import Welcome from "./images/Welcome.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
      <Container>
        <Row
          className="align-items-center text-center justify-content-center"
        >
          <Col
            sm={8}
            lg={7}
            className=" text-md-start"
          >
            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <Heading>
                I'm <strong>Klaudia Kępka!</strong>
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: [0, 0.7, 0.1, 1] }}
            >
              <Title>
                Passionate <strong>Front-End Developer.</strong>
              </Title>
              <Subtitle>
                Welcome to my portfolio page!
              </Subtitle>
            </motion.div>
          </Col>
          <Col
            xs={5}
            md={5}
            lg={5}
          >
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                className="w-100"
                src={Welcome}
                alt="Welcome"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
  );
};
export default Home;