import { Row, Col, Container } from "react-bootstrap";
import { Title, Image } from "../Home/styled";
import extra from "./images/extra.png"
import { ContactData } from "./ContactData";
import { Motion } from "./Motion";

const Contact = () => (
  <Container>
    <Row
      className="align-items-center justify-content-center text-center"
    >
      <Col
        xs={{
          span: 7,
          order: "last"
        }}
        sm={{
          span: 5,
          order: "first"
        }}
        md={4}
        lg={3}
      >
        <Motion
          x={-300}
          type={"spring"}
          animatedElement={
            <Image
              alt="Contact"
              className="w-100"
              src={extra} />
          }
        />
      </Col>
      <Col
        xs={{
          span: 12,
          order: "first"
        }}
        sm={{
          span: 7,
          order: "last"
        }}
        md={8}
        lg={8}
      >
        <Motion
          y={-300}
          duration={1}
          animatedElement={
            <>
              <Title>
                Let's create something <strong>together!</strong>
              </Title>
              We can talk in Italian and English, i will understand your Spanish, but to enter the creative world we can communicate in JavaScript in the React dialect.
            </>
          }
        />
        <ContactData />
      </Col>
    </Row>
  </Container>
);

export default Contact;