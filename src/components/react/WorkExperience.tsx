import { useState } from "react";
import "./WorkExperience.css";

/**
 * Work Experience Interactive Component
 * Handles job tab switching - kept as React for interactivity
 */

interface JobDescription {
  id: number;
  jobTitle: string;
  jobPlace: string;
  jobTimeline: string;
  duties: string[];
}

const jobDescription: JobDescription[] = [
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

  const toggleScrollbar = (id: string) => {
    const parsedId = parseInt(id);

    const numY = parsedId * scrollbarYDefault;
    const numX = parsedId * scrollbarXDefault;

    setTogglePx(numY);
    setToggleX(numX);
    setToggleId(parsedId);
  };

  return (
    <div className="work-experience">
      <div className="job-title">
        {jobDescription.map((job) => (
          <button
            key={job.id}
            className={`job-button ${toggleId === job.id ? "active" : ""}`}
            id={String(job.id)}
            onClick={(e) => toggleScrollbar((e.target as HTMLButtonElement).id)}
          >
            {job.jobPlace}
          </button>
        ))}
        <div
          className="scrollbar-y"
          style={{
            transform: `translateY(${togglePx}px)`,
          }}
        />
        <div
          className="scrollbar-x"
          style={{
            transform: `translateX(${toggleX}px)`,
          }}
        />
      </div>
      <div className="job-desc">
        <h3 className="job-desc-title">
          {jobDescription[toggleId].jobTitle}{" "}
          <span className="job-desc-title-text">
            @ {jobDescription[toggleId].jobPlace}
          </span>
        </h3>
        <span className="job-desc-date">
          {jobDescription[toggleId].jobTimeline}
        </span>
        <ul className="job-desc-details">
          {jobDescription[toggleId].duties.map((item, index) => (
            <li key={index} className="job-desc-details-list">
              <span className="list-icon" aria-hidden="true">▸</span>
              <span className="list-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
