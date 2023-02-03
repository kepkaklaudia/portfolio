import React from "react";
import { StyledLink } from "./styled";
import { Col } from "react-bootstrap";
import { Subtitle } from "../styled";
import { Motion } from "./Motion";
import { nanoid } from "@reduxjs/toolkit";

export const Details = () => {
  const elements = [
    {
      subtitle: "Projects",
      text: "Here you will find projects I have worked on and a list of technologies and tools that I use every day and which I am still learning.",
      link: "/projects",
      linkText: "See my Projects!",
    },
    {
      subtitle: "About",
      text: "Read the short story of my life!",
      link: "/about",
      linkText: "Read about me!",
    },
    {
      subtitle: "Gallery",
      text: "Get to know who I am through photos and see one of my greatest passions!",
      link: "/gallery",
      linkText: "Go to Gallery!",
    },
    {
      subtitle: "Contact",
      text: "See my contact details.",
      link: "/contact",
      linkText: "Let's get in touch!",
    },
  ];

  return (
    <>
      {elements.map(({ subtitle, text, link, linkText }) =>
        <React.Fragment key={nanoid()}>
          <Col
            xs={12}
            className="mt-5 mb-4 w-75"
          >
            <Motion
              x={-200}
              animatedElement={
                <>
                  <Subtitle>
                    {subtitle}
                  </Subtitle>
                  {text}
                </>
              }
            />
          </Col>
          <Col
            xs={12}
            className="my-2"
          >
            <Motion
              x={200}
              animatedElement={
                <StyledLink
                  to={link}
                >
                  {linkText}
                </StyledLink>
              }
            />
          </Col>
        </React.Fragment>
      )}
    </>
  );
};