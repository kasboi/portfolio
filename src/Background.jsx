import styled from "styled-components";
import { device } from "./components/styles/Media.js";
import { motion } from "framer-motion";
import WorkExperience from "./WorkExperience.jsx";
import VercelIcon from "./components/VercelIcon.jsx";
import NetlifyIcon from "./components/NetlifyIcon.jsx";

const Container = styled(motion.div)`
  padding: 2rem 2rem;
  color: ${({ theme }) => theme.font.primaryText};
  font-size: 1rem;
  max-width: 75rem;
  margin: 0 auto;

  @media ${device.laptop} {
    padding: 3rem 2rem;
  }
  @media ${device.tablet} {
    padding: 2rem 1.2rem;
    margin-top: 1.5rem;
  }
  @media ${device.mobile} {
    padding: 1.5rem 0.8rem;
  }
  @media ${device.mobileL} {
    padding: 1.5rem 1rem;
  }

  .heading {
    margin-bottom: 1rem;
  }

  .background {
    display: flex;
    margin-bottom: 5rem;

    @media ${device.tablet} {
      flex-direction: column;
      max-width: 40rem;
      margin-bottom: 2.5rem;
    }
  }
  .background__heading {
    font-size: 1.25rem;
    margin-right: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.logo.color};
    letter-spacing: 1px;
    flex-basis: 20%;
  }

  .background__paragraph {
    @media ${device.mobile} {
      font-size: 0.9rem;
    }
  }

  .background__paragraph :not(p:last-child) {
    margin-bottom: 1.5rem;

    @media ${device.tablet} {
      margin-bottom: 1rem;
    }
  }

  /* .skills {
        display: flex;
        margin-bottom: 5rem;

        @media ${device.tablet} {
            flex-direction: column;
        }

        &__heading {
            font-size: 1rem;
            margin-right: 2.5rem;
            text-transform: uppercase;
            font-weight: 700;
            color: ${({ theme }) => theme.logo.color};
            letter-spacing: 1px;
            flex-basis: 20%;
        }

        &__activity {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1.5rem;

            @media ${device.tablet} {
                grid-template-columns: repeat(2, 1fr);
            }
            @media ${device.mobileL} {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        &__header {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
    }
    .experience {
        display: flex;

        @media ${device.tablet} {
            flex-direction: column;
        }
        &__header {
            font-size: 1rem;
            margin-right: 2.5rem;
            text-transform: uppercase;
            font-weight: 700;
            color: ${({ theme }) => theme.logo.color};
            letter-spacing: 1px;
            flex-basis: 20%;
        }

        &__activity {
            width: 100%;
        }

        .job {
            margin-bottom: 1.5rem;
        }

        .job__duration {
            display: flex;
            @media ${device.mobileL} {
                flex-direction: column;
            }
        }
        .job__work {
            font-size: 0.85rem;
            margin-bottom: 0.2rem;
            font-weight: 600;
            margin-right: auto;
        }
    } */
`;
const Technologies = styled.div`
  margin: 1.5rem 0;

  h3.technologies__heading {
    font-size: 1.25;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.logo.color};
    margin: 1rem 0;
  }

  p.technologies__paragraph {
    margin: 0.5rem 0;
  }

  .tech-stack {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .tech-list {
      flex: 0 0 25%;
      margin: 1rem 0;

      @media ${device.tablet} {
        flex: 0 0 30%;
      }

      @media ${device.mobile} {
        flex: 0 0 45%;
      }

      &__heading {
        font-size: 1rem;
        margin-bottom: 0.75rem;

        @media ${device.tablet} {
          font-size: 0.9rem;
        }
      }

      &__item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0.5rem 0;

        @media ${device.tablet} {
          font-size: 0.9rem;
        }

        @media ${device.mobile} {
          font-size: 0.85rem;
        }

        .devicon {
          font-size: 24px;
          color: ${({ theme }) => theme.color.icon};

          @media ${device.mobile} {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <Container
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
      }}
      viewport={{ once: true }}
    >
      <div className="background">
        <div className="background__heading heading">Background</div>
        <div className="background__paragraph">
          <p>
            I am a software engineer at Andela, where I build web products with
            a team of awesome people. In addition, I mentor aspiring front-end
            developers through{" "}
            <a
              href="https://linktr.ee/careerconnectacademy"
              target="_blank"
              rel="noreferrer"
            >
              CareerConnects'
            </a>{" "}
            specialized boot camp program.
          </p>
          <p>
            I have had the opportunity to work on various projects, including
            web applications, mobile apps, and back-end systems.
          </p>
          <p>
            I have expertise in technologies such as Javascript, Typescript, and
            React, and I am familiar with agile development methodologies. I
            enjoy working in a team environment and thrive on the challenge of
            delivering high-quality software on time.
          </p>
          <p>
            As an engineer, I enjoy combining my technical knowledge with my
            keen eye for design to create beautiful, scalable, and efficient
            applications that provide engaging, pixel-perfect user experiences.
          </p>
        </div>
      </div>
      <Technologies className="technologies">
        <h3 className="technologies__heading">Technologies</h3>
        <p className="technologies__paragraph">
          Here are some of the various technologies I am proficient with
        </p>
        <div className="tech-stack">
          <ul className="tech-list">
            <h3 className="tech-list__heading">Frontend Stack</h3>
            <li className="tech-list__item">
              <i className="devicon-javascript-plain devicon"></i>
              <span>Javascript</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-typescript-plain devicon"></i>
              <span>Typescript</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-react-plain devicon"></i>
              <span>ReactJs</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-redux-plain devicon"></i>
              <span>Redux</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-nextjs-plain devicon"></i>
              <span>NextJs</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-sass-plain devicon"></i>
              <span>Sass</span>
            </li>
          </ul>

          <ul className="tech-list">
            <h3 className="tech-list__heading">Backend Stack</h3>
            <li className="tech-list__item">
              <i className="devicon-nodejs-plain devicon"></i>
              <span>NodeJs</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-express-original devicon"></i>
              <span>ExpressJs</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-javascript-plain devicon"></i>
              <span>Javascript</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-typescript-plain devicon"></i>
              <span>Typescript</span>
            </li>
          </ul>
          <ul className="tech-list">
            <h3 className="tech-list__heading">CI/CD</h3>
            <li className="tech-list__item">
              <i className="devicon-github-original devicon"></i>
              <span>Github</span>
            </li>
            <li className="tech-list__item">
              {/* <i className="devicon-javascript-plain devicon"></i> */}
              <VercelIcon />
              <span>Vercel</span>
            </li>
            <li className="tech-list__item">
              {/* <i className="devicon-javascript-plain devicon"></i> */}
              <NetlifyIcon />
              <span>Netlify</span>
            </li>
          </ul>
          <ul className="tech-list">
            <h3 className="tech-list__heading">Testing, DB & Misc.</h3>
            <li className="tech-list__item">
              <i className="devicon-jest-plain devicon"></i>
              <span>Jest</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-vscode-plain devicon"></i>
              <span>VS Code</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-mongodb-plain devicon"></i>
              <span>MongoDB</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-git-plain devicon"></i>
              <span>Git</span>
            </li>
            <li className="tech-list__item">
              <i className="devicon-bash-plain devicon"></i>
              <span>Bash</span>
            </li>
          </ul>
        </div>
      </Technologies>
      <WorkExperience />
    </Container>
  );
};

export default Home;
