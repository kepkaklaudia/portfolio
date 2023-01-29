import { Col, Image, Row } from "react-bootstrap";
import France from "./images/France.jpg";
import Milano from "./images/Milano.jpg";
import Spain from "./images/Spain.jpg";
import Italy from "./images/Italy.jpg";
import France1 from "./images/France1.jpg";
import Portugal from "./images/Portugal.jpg";
import Spain2 from "./images/Spain2.jpg";
import Spain3 from "./images/Spain3.jpg";
import Spain4 from "./images/Spain4.jpg";
import Cracow from "./images/Cracow.jpg";
import LaSalette from "./images/LaSalette.jpg";
import Germany from "./images/Germany.jpg";
import { useEffect, useState } from "react";
import { Loader } from "../../common/Loader";

const Gallery = () => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setTimeout(() => {
      setStatus("loaded");
    }, 5000);
  });

  return (
    <>
      <p>
        Here i've decided to show you my traveler side. I let my actions speak for who I am. You can see who I am at work when you see who I am in my personal life.
      </p>
      <p>
        Through these photos you can get to know me better, see my personality or maybe you can remind yourself some of the places you've been. Each of the photo has its own story, shows moments, a fragment of my life.
      </p>
      <p>
        Welcome to my journey!
      </p>
      {status === "loading" ? <Loader></Loader> :
        <>
          <Row>
            <Col
              sm={12}
              md={4}
              className="mb-4 mb-lg-0"
            >
              <Image
                src={France}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="France"
              />
              <Image
                src={Milano}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Milano"
              />
              <Image
                src={Spain}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Spain"
              />
              <Image
                src={Italy}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Italy"
              />
            </Col>
            <Col
              md={4}
              className="mb-4 mb-lg-0"
            >
              <Image
                src={France1}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="France1"
              />
              <Image
                src={Portugal}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Portugal"
              />
              <Image
                src={Spain2}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Spain2"
              />
              <Image
                src={Spain3}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Spain3"
              />
            </Col>
            <Col
              md={4}
              className="mb-4 mb-lg-0"
            >
              <Image
                src={Spain4}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Spain4"
              />
              <Image
                src={Cracow}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Cracow"
              />
              <Image
                src={LaSalette}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="LaSalette"
              />
              <Image
                src={Germany}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Germany"
              />
            </Col>
          </Row>
        </>
      }
    </>
  );
};

export default Gallery;