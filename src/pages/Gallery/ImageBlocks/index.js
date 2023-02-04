import { useState } from "react";
import { Modal } from "react-bootstrap";
import france from "../images/france.jpg";
import milano from "../images/milano.jpg";
import spain from "../images/spain.jpg";
import italy from "../images/italy.jpg";
import france1 from "../images/france1.jpg";
import portugal from "../images/portugal.jpg";
import spain2 from "../images/spain2.jpg";
import spain3 from "../images/spain3.jpg";
import spain4 from "../images/spain4.jpg";
import cracow from "../images/cracow.jpg";
import laSalette from "../images/laSalette.jpg";
import germany from "../images/germany.jpg";
import { StyledImage } from "./styled";

export const ImageBlock1 = () => {
  const [data, setData] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isTablet = window.innerWidth <= 767.98;

  const viewImage = (element, index) => {
    setData({ element, index });
    handleShow();
  };

  return (
    <>
      {[france, milano, spain, italy]
        .map((element, index) => (
          <>
            <StyledImage
              key={index}
              className="w-100 shadow-1-strong rounded mb-4"
              src={element}
              alt={element}
              onClick={() => viewImage(element, index)}
            />
          </>
        ))}
      {isTablet ? "" :
      <>
        <Modal 
        show={show} 
        onHide={handleClose} 
        centered
        >
          <StyledImage
            key={data.index}
            className="w-100 shadow-1-strong rounded"
            src={data.element}
            alt={data.element}
            onClick={handleClose}
          />
        </Modal>
        </>
        }     
    </>
  )
};

export const ImageBlock2 = () => {
  const [data, setData] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isTablet = window.innerWidth <= 767.98;

  const viewImage = (element, index) => {
    setData({ element, index });
    handleShow();
  };

  return (
    <>
      {[france1, portugal, spain2, spain3]
        .map((element, index) => (
          <>
            <StyledImage
              key={index}
              className="w-100 shadow-1-strong rounded mb-4"
              src={element}
              alt={element}
              onClick={() => viewImage(element, index)}
            />
          </>
        ))}
      {isTablet ? "" :
      <>
        <Modal 
        show={show} 
        onHide={handleClose} 
        centered
        >
          <StyledImage
            key={data.index}
            className="w-100 shadow-1-strong rounded"
            src={data.element}
            alt={data.element}
            onClick={handleClose}
          />
        </Modal>
        </>
        }     
    </>
  )
};

export const ImageBlock3 = () => {
  const [data, setData] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isTablet = window.innerWidth <= 767.98;

  const viewImage = (element, index) => {
    setData({ element, index });
    handleShow();
  };

  return (
    <>
      {[spain4, cracow, laSalette, germany]
        .map((element, index) => (
          <>
            <StyledImage
              key={index}
              className="w-100 shadow-1-strong rounded mb-4"
              src={element}
              alt={element}
              onClick={() => viewImage(element, index)}
            />
          </>
        ))}
      {isTablet ? "" :
      <>
        <Modal 
        show={show} 
        onHide={handleClose} 
        centered
        >
          <StyledImage
            key={data.index}
            className="w-100 shadow-1-strong rounded"
            src={data.element}
            alt={data.element}
            onClick={handleClose}
          />
        </Modal>
        </>
        }     
    </>
  )
};