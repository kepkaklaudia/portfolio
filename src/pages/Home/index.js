import { Row, Col, Container } from "react-bootstrap";
import { Heading, Title, Subtitle } from "./styled";
import Welcome from "./images/Welcome.png";
import { ImageMotion, TitleMotion, HeadingMotion } from "./Motion";

const Home = () => {
  return (
    <Container>
      <Row
        className="align-items-center text-center justify-content-center"
      >
        <Col
          lg={7}
          className=" text-md-start"
        >
          <HeadingMotion
            animatedElement={
              <Heading>
                I'm <strong>Klaudia Kępka!</strong>
              </Heading>
            }
          />
          <TitleMotion
            animatedElement={
              <>
                <Title>
                  Passionate <strong>Front-End Developer.</strong>
                </Title>
                <Subtitle>
                  Welcome to my portfolio page!
                </Subtitle>
              </>
            }
          />
        </Col>
        <Col
          xs={8}
          sm={6}
          md={5}
          lg={5}
        >
          <ImageMotion
            animatedElement={
              <img
                className="w-100"
                src={Welcome}
                alt="Welcome"
              />
            }
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;