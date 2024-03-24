// import { ThemeProvider } from 'next-themes';
// import React from 'react';

// export default function Theme({ children }) {
//   return (
//     React.createElement(
//     <ThemeProvider attribute="class">
//         {children}
//       </ThemeProvider>
//     )
//   );
// }

// import React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// function ThemeProvider({ children, ...props }) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }

// export default ThemeProvider;

import React, { createContext, useState, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to access the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to manage the theme state
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;