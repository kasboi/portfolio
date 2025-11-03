import styled from "styled-components";
import { device } from "./styles/Media.js";

const Vercel = styled.svg`
  fill: ${({ theme }) => theme.color.icon};
  font-size: 24px;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const VercelIcon = () => {
  return (
    <Vercel
      // stroke="currentColor"
      // fill="currentColor"
      strokeWidth="0"
      role="presentation"
      viewBox="0 0 24 24"
      focusable="false"
      className="chakra-icon css-14age7l"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title></title>
      <path d="M24 22.525H0l12-21.05 12 21.05z"></path>
    </Vercel>
  );
};

export default VercelIcon;
