import styled from "styled-components";
import { device } from "./components/styles/Media.js";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  /* margin: auto 1.5rem; */
  padding: 0 4rem;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;

  @media ${device.laptop} {
    padding: 0 2.5rem;
  }

  @media ${device.tablet} {
    padding: 0 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media ${device.mobile} {
    padding: 0 1.35rem;
  }

  @media ${device.mobileL} {
    padding: 0 1rem;
  }
`;

const TxtContainer = styled(motion.div)`
  display: block;
  max-width: 55%;
  color: ${({ theme }) => theme.font.primaryText};

  @media ${device.tablet} {
    max-width: 100%;
    margin-bottom: 2rem;
    text-align: left;
  }
  @media ${device.mobileL} {
    text-align: left;
  }

  h1 {
    color: ${({ theme }) => theme.logo.color};
    font-size: 3rem;
    letter-spacing: 0.06em;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-weight: 500;
    font-size: 1.45rem;
    margin-bottom: 1.3rem;

    @media ${device.mobileL} {
      font-size: 1rem;
    }
  }
  p {
    font-weight: ${({ theme }) => theme.font.fontWeight};
    margin: 0.5rem 0;

    @media ${device.tablet} {
      line-height: normal;
    }
    @media ${device.mobile} {
      font-size: 0.9rem;
    }
  }
`;
const ImgContainer = styled(motion.div)`
  position: relative;
  border: 2px solid ${({ theme }) => theme.logo.color};
  height: 15rem;
  width: 14rem;
  border-radius: 5px;

  @media ${device.tablet} {
    margin: 0 auto;
  }

  .display__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Home = () => {
  return (
    <Container>
      <TxtContainer>
        <h1>Hello,{device.tablet ? <br /> : ""} I'm KAS</h1>
        <h4>Kolawole Abdullah Solahudeen</h4>
        <p>
          I am a Software Engineer with over 4 years of experience using
          front-end technologies to create web applications. I am also familiar
          with back-end tools and have experience with Agile methodologies and
          Software Development Life Cycles. I have a strong background in
          Javascript, Typescript, React and Next.js framework.
        </p>
        <p>
          I can be relied on to use critical thinking to solve complex projects.
          During my free hours, I indulge in manga, anime, music, or geeking
          about emerging tech.
        </p>
        <p>
          Let's work together to bring your vision to life! I am available for
          both contract and full-time remote positions.
        </p>
      </TxtContainer>
      <ImgContainer
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 1, ease: "easeIn" },
        }}
      >
        <motion.img
          src="img/kasSelfie.jpeg"
          alt="my selfied"
          className="display__img"
          initial={{ x: -18, y: -18 }}
          whileHover={{
            x: 0,
            y: 0,
            transition: { ease: "easeInOut" },
          }}
          whileTap={{ x: 0, y: 0, transition: { ease: "easeInOut" } }}
        />
      </ImgContainer>
    </Container>
  );
};

export default Home;
