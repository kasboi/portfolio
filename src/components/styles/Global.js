import { createGlobalStyle } from "styled-components"
import { device } from "./Media"

const GlobalStyle = createGlobalStyle`
:root {
  --text-1: ${({ theme }) => theme.font.primaryText};
  --text-2: ${({ theme }) => theme.font.secondaryText};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  height: 100%;
}

body {
  background-color: ${({ theme }) => theme.color.backgroundColor};
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.font.color};
  transition:  .3s cubic-bezier(0.45, 0, 0.55, 1);
  padding: 0 2rem;
  height: 100%;

  @media ${device.laptop} {
    padding: 0 1.5rem;
  }

  @media ${device.mobileL} {
    padding: 0 1rem;
  }
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
a:focus, a:visited, a:active, a:hover, a:link {
  color: ${({ theme }) => theme.font.secondaryText};
}

ion-icon {
    font-size: 24px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.font.secondaryText};

    @media ${device.tablet} {
      font-size: 18px;
      margin: 5px 0;
    }
}

${
    "" /* ::-webkit-scrollbar {
    width: 12px;
} */
}

.logo-box {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;

  li:last-of-type {
    margin-bottom: .5rem
  }

  li {
    padding: 4px;

    @media ${device.mobile} {
      padding: 3px;
    }
  }

  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 9rem;
    margin: 0px auto;
    background-color: ${({ theme }) => theme.font.secondaryText};
    
    @media ${device.tablet} {
      height: 8rem;
    }
  }
}

`

export default GlobalStyle
