import { Row, Col, Container } from "react-bootstrap";
import { Title } from "../Home/styled";
import Extra from "./images/Extra.png"
import { ContactList } from "./ContactList";

const Contact = () => {
  return (
      <Container>
        <Row
          className="align-items-center justify-content-center text-center"
        >
          <Col
            xs={{ span: 5, order: "last" }}
            sm={{ span: 5, order: "first" }}
            md={4}
            lg={3}
          >
            <img
              alt="Contact"
              className="w-100"
              src={Extra}
            />
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            sm={{ span: 7, order: "last" }}
            md={8}
            lg={8}
          >
            <Title>
              Let's create something <strong>together!</strong>
            </Title>
            We can talk in Italian and English, i will understand your Spanish, but to enter the creative world we can communicate in JavaScript in the React dialect.
            <ContactList />
          </Col>
        </Row>
      </Container>
  );
};

export default Contact;