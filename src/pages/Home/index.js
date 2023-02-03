import { Row, Col, Container } from "react-bootstrap";
import { Heading, Title, Subtitle, Image, StyledLink } from "./styled";
import Welcome from "./images/Welcome.png";
import { ImageMotion, TitleMotion, HeadingMotion } from "./Motion";
import { Chevron } from "./Chevron";

const Home = () => (
  <Container className="mb-4">
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
            <Image
              className="w-100"
              src={Welcome}
              alt="Welcome"
            />
          }
        />
      </Col>
      <Col xs={12}>
        <Chevron />
      </Col>
      <Col xs={12} className="mt-5 mb-4 w-75">
        <Subtitle>Projects </Subtitle>
        Here you will find projects I have worked on and a list of technologies and tools that I use every day and which I am still learning.
      </Col>
      <Col xs={12} className="my-2">
        <StyledLink to="/projects"> See my Projects! </StyledLink>
      </Col>
      <Col xs={12} className="mt-5 mb-4 w-75">
        <Subtitle>About</Subtitle>
        Read the short story of my life!
      </Col>
      <Col xs={12} className="my-2">
        <StyledLink to="/about" > Read about me! </StyledLink>
      </Col>
      <Col xs={12} className="mt-5 mb-4 w-75">
        <Subtitle>Gallery </Subtitle>
        Get to know who I am through photos and see one of my greatest passions!
      </Col>
      <Col xs={12} className="my-2">
        <StyledLink to="/gallery" > Go to Gallery! </StyledLink>
      </Col>
      <Col xs={12} className="mt-5 mb-4 w-75">
        <Subtitle>Contact</Subtitle>
        See my contact details.
      </Col>
      <Col xs={12} className="mt-2 mb-4">
        <StyledLink to="/contact"> Let's get in touch! </StyledLink>
      </Col>
    </Row>
  </Container>
);

export default Home;