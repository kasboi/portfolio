import { useState } from "react";
import { Theme } from "../components/styles/Theme.js";

/* 
  Custom hook to store and retrieve the theme last used when
  user visited the website
*/

const { theme } = Theme;

const useFetch = () => {
  // localStorage takes key/value pair, setting this as default key
  const key = "userTheme";

  const getUserTheme = () => {
    try {
      const storedTheme = localStorage.getItem(key);
      if (storedTheme) {
        return JSON.parse(storedTheme);
      }
    } catch (error) {
      console.error("Error reading theme from localStorage:", error);
    }
    // Return default theme if no stored theme or error
    return theme;
  };

  const [here, setHere] = useState(getUserTheme());

  const saveUserTheme = (userToken) => {
    try {
      localStorage.setItem(key, JSON.stringify(userToken));
      setHere(userToken);
    } catch (error) {
      console.error("Error saving theme to localStorage:", error);
    }
  };

  return {
    here,
    setHere: saveUserTheme,
  };
};

export default useFetch;
