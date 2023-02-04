import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Loader } from "../../common/Loader";
import { Motion } from "./Motion";
import { ImageModalBlock } from "./ImageModalBlock";
import france from "./images/france.jpg";
import milano from "./images/milano.jpg";
import spain from "./images/spain.jpg";
import italy from "./images/italy.jpg";
import france1 from "./images/france1.jpg";
import portugal from "./images/portugal.jpg";
import spain2 from "./images/spain2.jpg";
import spain3 from "./images/spain3.jpg";
import spain4 from "./images/spain4.jpg";
import cracow from "./images/cracow.jpg";
import laSalette from "./images/laSalette.jpg";
import germany from "./images/germany.jpg";

const imageArray1 = [france, milano, spain, italy];
const imageArray2 = [france1, portugal, spain2, spain3];
const imageArray3 = [spain4, cracow, laSalette, germany];

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
              <ImageModalBlock array={imageArray1} />
            </Col>
            <Col
              md={4}
              className="mb-4 mb-lg-0"
            >
              <ImageModalBlock array={imageArray2} />
            </Col>
            <Col
              md={4}
              className="mb-4 mb-lg-0"
            >
              <ImageModalBlock array={imageArray3}/>
            </Col>
          </Row>
        </>
      }
    </>
  );
};

export default Gallery;