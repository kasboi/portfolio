import styled from "styled-components";
import { device } from "./components/styles/Media.js";
import { motion } from "framer-motion";

import style from "./components/styles/Projects.module.css";
import { TiFolder, TiLink, TiSocialGithub } from "react-icons/ti";

import { projectData } from "./ProjectList.jsx";

const Container = styled(motion.div)`
  max-width: 90%;
  margin: 0 auto;
  z-index: -100;
  color: ${({ theme }) => theme.font.secondaryText};

  .project__heading {
    position: relative;
    font-weight: 500;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.logo.color};
  }
`;
const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 1rem;
`;
const Box = styled.div`
  padding: 1.35rem 1.5rem;
  flex: 1 0 31%;
  border-radius: 5px;
  border: 2px solid gray;
  background: ${({ theme }) => theme.modal.primaryColor};

  @media ${device.laptop} {
    flex: 1 0 32%;
  }

  @media ${device.tablet} {
    flex: 1 0 45%;
  }
  @media ${device.mobile} {
    flex: 1 0 100%;
  }
`;

const Projects = () => {
  return (
    <Container
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, ease: "easeIn" },
      }}
      viewport={{ once: true }}
    >
      <h3 className="project__heading">Projects</h3>
      <BoxContainer>
        {projectData.map((data, index) => (
          <Box key={index}>
            <div className={style.box__icons}>
              <TiFolder style={{ fontSize: "4rem", marginRight: "auto" }} />
              <a href={data.live_link} rel="noreferrer" target="_blank">
                <TiLink style={{ fontSize: "2.5rem" }} />
              </a>
              <a href={data.git_link} rel="noreferrer">
                <TiSocialGithub style={{ fontSize: "2.5rem" }} />
              </a>
            </div>
            <h2 className={style.box__heading}>{data.project_name}</h2>
            <p className={style.box__para}>{data.project_desc}</p>
            <ul className={style.box__footer}>
              {data.language.map((lang, langIndex) => (
                <li key={langIndex} className={style.box__lang}>
                  -{lang}-
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </BoxContainer>
    </Container>
  );
};

export default Projects;
