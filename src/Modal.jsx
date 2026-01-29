import { useEffect, useState } from "react";
import { ModalStyle } from "./components/styles/Modal.style.js";
import styled from "styled-components";

const { Container, Card } = ModalStyle;

const ModalLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const modalDetails = [
  {
    sectionId: "background",
    imgSrc: "./img/background.jpg",
    imgDetails: "background&skills",
    detailsHeading: "Background & Skills",
    detailsPara: "Get to know me better!",
  },
  {
    sectionId: "projects",
    imgSrc: "./img/project.jpg",
    imgDetails: "Projects",
    detailsHeading: "Projects",
    detailsPara: "Check out some of my projects",
  },
  {
    sectionId: "contact",
    imgSrc: "./img/contact.jpg",
    imgDetails: "contact",
    detailsHeading: "Contact",
    detailsPara:
      "Wanna discuss with me about some of my projects or have job opportunities? Lets go!",
  },
];

const Modal = ({ modal, setModal, setOpen }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  }, [loading]);

  const handleClick = (sectionId) => {
    setModal("");
    setOpen("");
    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container className={modal}>
      {modalDetails.map((item, index) => (
        <ModalLink
          key={index}
          href={`#${item.sectionId}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(item.sectionId);
          }}
        >
          <Card>
            {loading ? (
              <div className="shazam" />
            ) : (
              <div className="imgContainer">
                <img src={item.imgSrc} alt={item.imgDetails} />
              </div>
            )}
            <div className="card_details">
              <h4>{item.detailsHeading}</h4>
              <p>{item.detailsPara}</p>
              <ion-icon name="arrow-forward-circle" size="large"></ion-icon>
            </div>
          </Card>
        </ModalLink>
      ))}
    </Container>
  );
};

export default Modal;
