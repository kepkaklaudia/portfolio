import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { StyledImage } from "./styled";

export const ImageModalBlock = ({ array }) => {
  const [data, setData] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isTablet = window.innerWidth <= 767.98;

  const chooseImage = (element, index) => {
    setData({ element, index });
    handleShow();
  };

  return (
    <>
      {array.map((element, index) => (
        <React.Fragment key={index}>
          <StyledImage
            key={index}
            className="w-100 shadow-1-strong rounded mb-4"
            src={element}
            alt={element}
            onClick={() => chooseImage(element, index)}
          />
        </React.Fragment>
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