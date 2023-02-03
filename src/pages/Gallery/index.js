import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Loader } from "../../common/Loader";
import { Motion } from "./Motion";
import { ImageBlock1, ImageBlock2, ImageBlock3 } from "./ImageBlocks";

const Gallery = () => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setTimeout(() => {
      setStatus("loaded");
    }, 3000);
  });

  return (
    <>
      <Motion
        animatedElement={
          <>
            <h2>
              My little photogallery!
            </h2>
            <p>
              Here i've decided to show you my traveler side. I let my actions speak for who I am. You can see who I am at work when you see who I am in my personal life.
            </p>
            <p>
              Through these photos you can get to know me better, see my personality or maybe you can remind yourself some of the places you've been. Each of the photo has its own story, shows moments, a fragment of my life.
            </p>
            <p>
              Welcome to my journey!
            </p>
          </>
        } />
      {status === "loading" ? <Loader /> :
        <>
          <Row>
            <Col
              sm={12}
              md={4}
              className="mb-4 mb-lg-0"
            >
              <ImageBlock1 />
            </Col>
            <Col
              md={4}
              className="mb-4 mb-lg-0"
            >
              <ImageBlock2 />
            </Col>
            <Col
              md={4}
              className="mb-4 mb-lg-0"
            >
              <ImageBlock3 />
            </Col>
          </Row>
        </>
      }
    </>
  );
};

export default Gallery;