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
    jobTitle: "Fullstack Engineer",
    jobPlace: "Payecards",
    jobTimeline: "July 2025 - Present",
    duties: [
      `Architected a Telegram Mini App for the fintech platform with Vite, React, TanStack Router and TypeScript, using the Telegram SDK for theme adaptation, haptic feedback and viewport handling.`,
      `Built secure onboarding and KYC flows covering phone, email and in-browser biometric face verification with MediaPipe.`,
      `Designed a type-safe API proxy layer with Hono and Zod, and managed client and server state with Zustand and TanStack Query.`,
      `Migrated the monorepo from Next.js to Vite with Turborepo, cutting build times by 60%, and added multi-language (i18n) support.`,
      `Worked with backend engineers to design the REST endpoints behind registration, verification, location services and KYC document processing.`,
    ],
  },
  {
    id: 1,
    jobTitle: "Frontend Engineer",
    jobPlace: "BanffPay",
    jobTimeline: "Apr. 2024 - June 2025",
    duties: [
      `Built the frontend of an agency banking app, focused on responsive UI and operational efficiency for field agents.`,
      `Worked closely with product and backend teams to deliver reliable integrations and a smooth user experience.`,
      `Took part in developer hiring and mentoring sessions to support the growth of the team.`,
    ],
  },
  {
    id: 2,
    jobTitle: "Frontend Engineer & Mentor",
    jobPlace: "Career Connects",
    jobTimeline: "May 2023 - Present",
    duties: [
      `Mentor students one-on-one and in groups, clarifying complex concepts and giving personalised career guidance.`,
      `Work with stakeholders to keep the frontend curriculum aligned with current industry standards and emerging trends.`,
      `Help students debug difficult problems, building their problem-solving skills and independence.`,
      `Design and deliver workshops on advanced frontend topics, and built the bootcamp landing page, which lifted enrolments by up to 45%.`,
    ],
  },
  {
    id: 3,
    jobTitle: "Fullstack Developer",
    jobPlace: "HIC MikroLAB",
    jobTimeline: "Dec. 2021 - Nov. 2022",
    duties: [
      `Developed and maintained full-stack applications with MongoDB, Express, React and Node.js, built to client requirements.`,
      `Collaborated across teams to design, test and deploy features that improved usability and system reliability.`,
      `Improved responsiveness, accessibility and front-end performance of existing interfaces, and evaluated new web technologies for the codebase.`,
    ],
  },
  {
    id: 4,
    jobTitle: "Advisory Intern",
    jobPlace: "PwC Nigeria",
    jobTimeline: "March 2019 - Feb. 2020",
    duties: [
      `Contributed to the rollout of a new Salesforce management system that helped grow revenue for the Technology business unit.`,
      `Used Salesforce and Oracle to deliver day-to-day tasks and keep data and workflows efficient.`,
      `Supported projects aimed at improving service offerings and platform support.`,
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
