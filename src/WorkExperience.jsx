import styled from "styled-components";
import { device } from "./components/styles/Media.js";
import { motion } from "framer-motion";
import { useState } from "react";

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  /* gap: 0 5rem; */

  @media ${device.mobile} {
    flex-direction: column;
  }

  .job-title {
    display: flex;
    flex-direction: column;
    flex: 0 0 15%;

    position: relative;

    @media ${device.tablet} {
      flex: 0 0 25%;
    }

    @media ${device.mobile} {
      flex-direction: row;
      overflow-x: scroll;
    }
    .children {
      border: none;
      border-left: 1px solid ${({ theme }) => theme.font.secondaryText};
      cursor: pointer;
      height: 50px;
      background-color: transparent;
      color: ${({ theme }) => theme.font.secondaryText};

      font-size: 0.85rem;
      font-weight: 400;
      padding: 10px 0;

      &:hover {
        background-color: ${({ theme }) => theme.modal.primaryColor};
      }

      @media ${device.mobile} {
        border-left: none;
        border-bottom: 1px solid ${({ theme }) => theme.font.secondaryText};

        flex: 0 0 110px;
      }
    }

    .scrollbarY {
      height: 50px;
      width: 4px;
      background-color: ${({ theme }) => theme.font.secondaryText};
      border-radius: 15px;

      position: absolute;
      top: 0;
      left: -1px;
      /* transform: translateY(50px); */

      transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

      @media ${device.mobile} {
        display: none;
      }
    }

    .scrollbarX {
      @media ${device.mobile} {
        height: 3px;
        width: 110px;
        background-color: ${({ theme }) => theme.font.secondaryText};
        border-radius: 15px;

        position: absolute;
        bottom: 0;
        left: 0;

        transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }

  .job-desc {
    flex: 0 0 75%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem 0;

    @media ${device.mobile} {
      padding: 0.5rem 0.3rem;
    }

    @media ${device.mobileL} {
      padding: 0.5rem 0.15rem;
    }

    &__title {
      /* margin-bottom: 1rem; */

      @media ${device.tablet} {
        font-size: 1.1rem;
      }

      @media ${device.mobile} {
        margin: 0.85rem 0;
      }

      &-text {
        color: ${({ theme }) => theme.font.tertiaryText};
      }
    }

    &__date {
      font-size: 0.75rem;
    }

    &__details {
      display: flex;
      flex-direction: column;
      gap: 0.6rem 0;
      justify-content: space-between;

      &-list {
        display: flex;
        align-items: center;
        font-size: 0.9rem;

        @media ${device.mobile} {
          font-size: 0.88rem;
        }

        @media ${device.mobileL} {
          font-size: 0.85rem;
        }

        ion-icon {
          flex: 0 0 30px;
          font-size: 16px;
          color: ${({ theme }) => theme.font.secondaryText};

          @media ${device.mobile} {
            flex: 0 0 20px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

const jobDescription = [
  {
    id: 0,
    jobTitle: "Lead Frontend Mentor",
    jobPlace: "Career Connect NG",
    jobTimeline: "May 2023 - Present",
    duties: [
      `Collaborated with curriculum development team to enhance and refine the frontend development curriculum, ensuring alignment with current industry standards and emerging trends.`,
      `Mentored and guided students through one-on-one and group mentoring sessions, addressing their questions, clarifying concepts, and offering personalized career path guidance.`,
      `Assisted students in debugging and troubleshooting complex coding challenges, facilitating their problem-solving skills and promoting independent learning.`,
    ],
  },
  {
    id: 1,
    jobTitle: "Software Engineer",
    jobPlace: "Andela",
    jobTimeline: "Dec. 2022 - Present",
    duties: [
      `Contracted to work for various Andela Partners as a contractor where I integrate with an existing team
            and collaborate on providing enterprise solutions`,
    ],
  },
  {
    id: 2,
    jobTitle: "Software Engineer",
    jobPlace: "HIC MikroLAB",
    jobTimeline: "June 2021 - Nov. 2022",
    duties: [
      `Collaborate with UI/UX and QA team members to design and develop robust solutions to meet client
            requirements for functionality, scalability and performance`,
      `Refactored front-end projects to fix performance issues`,
      `Fixed issues around security and user accessibility`,
      `Engaged with clients to plan and optimize software issues and queries`,
      `Built new headless CMS for an agency landing page`,
    ],
  },
  {
    id: 3,
    jobTitle: "Frontend Developer - OS Contributor",
    jobPlace: "Afrisplash Remotely",
    jobTimeline: "Aug. 2022 - Jan. 2023",
    duties: [
      `Worked for Africa's no. 1 remote work community, promoting diversity in the global remote workforce through
            African talents.`,
      `Built the candidate onboarding module`,
      `Supported project to improve platform support`,
    ],
  },
  {
    id: 4,
    jobTitle: "Intern",
    jobPlace: "PwC Nigeria",
    jobTimeline: "March 2019 - Feb. 2020",
    duties: [
      `Worked directly with the Advisory administrator and reported to the Partner, Technology business unit`,
      `Worked on the team involved with the integration of a new Salesforce management system that helped drive the
            revenue of the business unit`,
      `Monitored developments in fields of industrial technology, business and finance`,
    ],
  },
  {
    id: 5,
    jobTitle: "Web Developer",
    jobPlace: "YEMTECH",
    jobTimeline: "Jan. 2018 - March. 2019",
    duties: [
      `Converted Figma and Sketch designs to engaging landing pages for various businesses`,
      `Implemented high quality animations and improved SEO status`,
      `Code documentation and unit testing`,
    ],
  },
];

const WorkExperience = () => {
  const scrollbarYDefault = 50;
  const scrollbarXDefault = 110;

  const [togglePx, setTogglePx] = useState(0);
  const [toggleX, setToggleX] = useState(0);
  const [toggleId, setToggleId] = useState(0);

  const toggleScrollbar = (id) => {
    const parsedId = parseInt(id);

    const numY = parsedId * scrollbarYDefault;
    const numX = parsedId * scrollbarXDefault;

    setTogglePx(numY);
    setToggleX(numX);
    setToggleId(parsedId);
  };

  return (
    <Container>
      <div className="job-title">
        <button
          className="children"
          id="0"
          onClick={(e) => toggleScrollbar(e.target.id)}
        >
          Career Connect NG
        </button>
        <button
          className="children"
          id="1"
          onClick={(e) => toggleScrollbar(e.target.id)}
        >
          Andela
        </button>
        <button
          className="children"
          id="2"
          onClick={(e) => toggleScrollbar(e.target.id)}
        >
          HiC MikroLAB
        </button>
        <button
          className="children"
          id="3"
          onClick={(e) => toggleScrollbar(e.target.id)}
        >
          Afrisplash Remotely
        </button>
        <button
          className="children"
          id="4"
          onClick={(e) => toggleScrollbar(e.target.id)}
        >
          PwC Nigeria
        </button>
        <button
          className="children"
          id="5"
          onClick={(e) => toggleScrollbar(e.target.id)}
        >
          YEMTECH
        </button>
        <div
          className={`scrollbarY`}
          style={{
            transform: `translateY(${togglePx}px)`,
          }}
        ></div>
        <div
          className="scrollbarX"
          style={{
            transform: `translateX(${toggleX}px)`,
          }}
        ></div>
      </div>
      <div className="job-desc">
        <h3 className="job-desc__title">
          {jobDescription[toggleId].jobTitle}{" "}
          <span className="job-desc__title-text">
            @ {jobDescription[toggleId].jobPlace}
          </span>
        </h3>
        <span className="job-desc__date">
          {jobDescription[toggleId].jobTimeline}
        </span>
        <ul className="job-desc__details">
          {jobDescription[toggleId].duties.map((item, index) => (
            <li key={index} className="job-desc__details-list">
              <ion-icon
                name="caret-forward-outline"
                className="list-icon"
              ></ion-icon>
              <span className="list-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default WorkExperience;
