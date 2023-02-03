import { StyledLink } from "./styled";
import { Col } from "react-bootstrap";
import { Subtitle } from "../styled";
import { Motion } from "./Motion";

export const Details = () => (
  <>
    <Col xs={12} className="mt-5 mb-4 w-75">
      <Motion x={-200} animatedElement={
        <>
          <Subtitle>Projects </Subtitle>
          Here you will find projects I have worked on and a list of technologies and tools that I use every day and which I am still learning.
        </>
      } />
    </Col>
    <Col xs={12} className="my-2">
      <Motion x={200} animatedElement={
        <StyledLink to="/projects"> See my Projects! </StyledLink>
      } />
    </Col>
    <Col xs={12} className="mt-5 mb-4 w-75">
      <Motion x={-200} animatedElement={
        <>
          <Subtitle>About</Subtitle>
          Read the short story of my life!
        </>
      } />
    </Col>
    <Col xs={12} className="my-2">
      <Motion x={200} animatedElement={
        <StyledLink to="/about" > Read about me! </StyledLink>
      } />
    </Col>
    <Col xs={12} className="mt-5 mb-4 w-75">
      <Motion x={-200} animatedElement={
        <>
          <Subtitle>Gallery </Subtitle>
          Get to know who I am through photos and see one of my greatest passions!
        </>
      } />
    </Col>
    <Col xs={12} className="my-2">
      <Motion x={200} animatedElement={
        <StyledLink to="/gallery" > Go to Gallery! </StyledLink>
      } />
    </Col>
    <Col xs={12} className="mt-5 mb-4 w-75">
      <Motion x={-200} animatedElement={
        <>
          <Subtitle>Contact</Subtitle>
          See my contact details.
        </>} />
    </Col>
    <Col xs={12} className="mt-2 mb-4">
      <Motion x={200} animatedElement={
        <StyledLink to="/contact"> Let's get in touch! </StyledLink>
      } />
    </Col>
  </>
);