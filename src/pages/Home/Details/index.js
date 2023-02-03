import { StyledLink } from "./styled";
import { Col } from "react-bootstrap";
import { Subtitle } from "../styled";
import { Motion } from "./Motion";

export const Details = () => {
  const elements = [
    {
      animatedElement1:
        <>
          <Subtitle>
            Projects
          </Subtitle>
          Here you will find projects I have worked on and a list of technologies and tools that I use every day and which I am still learning.
        </>,
      animatedElement2:
        <StyledLink to="/projects">
          See my Projects!
        </StyledLink>
    },
    {
      animatedElement1:
        <>
          <Subtitle>
            About
          </Subtitle>
          Read the short story of my life!
        </>,
      animatedElement2:
        <StyledLink to="/about">
          Read about me!
        </StyledLink>
    },
    {
      animatedElement1:
        <>
          <Subtitle>
            Gallery
          </Subtitle>
          Get to know who I am through photos and see one of my greatest passions!
        </>,
      animatedElement2:
        <StyledLink to="/gallery">
          Go to Gallery!
        </StyledLink>
    },
    {
      animatedElement1:
        <>
          <Subtitle>
            Contact
          </Subtitle>
          See my contact details.
        </>,
      animatedElement2:
        <StyledLink to="/contact">
          Let's get in touch!
        </StyledLink>
    },
  ];

  return (
    <>
      {elements.map(element =>
        <>
          <Col
            xs={12}
            className="mt-5 mb-4 w-75"
          >
            <Motion
              x={-200}
              animatedElement={element.animatedElement1}
            />
          </Col>
          <Col
            xs={12}
            className="my-2"
          >
            <Motion
              x={200}
              animatedElement={element.animatedElement2}
            />
          </Col>
        </>
      )}
    </>
  );
};