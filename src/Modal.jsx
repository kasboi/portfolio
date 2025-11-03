import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModalStyle } from "./components/styles/Modal.style.js";

const { Container, Card } = ModalStyle;

const modalDetails = [
  {
    url: "/background",
    imgSrc: "./img/background.jpg",
    imgDetails: "background&skills",
    detailsHeading: "Background & Skills",
    detailsPara: "Get to know me better!",
  },
  {
    url: "/projects",
    imgSrc: "./img/project.jpg",
    imgDetails: "Projects",
    detailsHeading: "Projects",
    detailsPara: "Check out some of my projects",
  },
  {
    url: "/contact",
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

  const setModality = () => {
    setModal("");
    setOpen("");
  };
  return (
    <Container className={modal}>
      {modalDetails.map((item, index) => (
        <Link to={item.url} key={index}>
          <Card onClick={() => setModality()}>
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
        </Link>
      ))}
    </Container>
  );
};

export default Modal;
