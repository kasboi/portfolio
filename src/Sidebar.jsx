import styled from "styled-components";
import { device } from "./components/styles/Media.js";

const Leftdiv = styled.div`
  display: block;
  width: 30px;
  position: fixed;
  bottom: 0px;
  left: 8px;
  right: auto;
  z-index: 10;

  @media ${device.tablet} {
    width: 20px;
    left: 5px;
  }
  @media ${device.mobileL} {
    width: 20px;
    left: 5px;
  }
`;
const Rightdiv = styled.div`
  font-size: 1rem;
  display: block;
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 8px;
  z-index: 10;
  color: ${({ theme }) => theme.font.secondaryText};

  @media ${device.tablet} {
    font-size: 0.85rem;
    width: 20px;
    right: 5px;
  }
  @media ${device.mobileL} {
    width: 15px;
    right: 5px;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: ${({ theme }) => theme.font.secondaryText};

    a {
      font-size: inherit;
      font-weight: 400;
      padding: 10px;
      letter-spacing: 3px;
      writing-mode: vertical-rl;
      color: inherit;

      @media ${device.tablet} {
        /* font-size: 1rem; */
        padding: 0;
      }
    }
    ::after {
      content: "";
      display: block;
      width: 1px;
      height: 4rem;
      margin: 0px auto;
      background-color: ${({ theme }) => theme.font.secondaryText};

      @media ${device.tablet} {
        height: 6rem;
      }
    }
  }
`;

const Sidebar = () => {
  return (
    <>
      <Leftdiv>
        <ul className="logo-box">
          {/* GitHub */}
          <li className="logo-box__container">
            <a
              href="https://github.com/kasboi"
              rel="noreferrer"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          {/* LinkedIn */}
          <li className="logo-box__container">
            <a
              href="https://www.linkedin.com/in/abdullah-solahudeen/"
              rel="noreferrer"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          {/* CodePen */}
          <li className="logo-box__container">
            <a
              href="https://codepen.io/kolawole-abdullah-solahudeen"
              rel="noreferrer"
              target="_blank"
            >
              <ion-icon name="logo-codepen"></ion-icon>
            </a>
          </li>
        </ul>
      </Leftdiv>

      <Rightdiv>
        <div className="text-box">
          <a href="mailto:solahudeen15@gmail.com">solahudeen15@gmail.com</a>
        </div>
      </Rightdiv>
    </>
  );
};

export default Sidebar;
