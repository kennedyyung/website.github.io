// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// const ThemeSwitcher = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
// <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className={`absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 ${
//         theme === "dark" ? "bg-dark_nav" : "bg-dark_base"
//       } dark:${theme === "dark" ? "bg-dark_base" : "bg-dark_nav"}`}
//     >
//       {theme === "light" ? "Dark" : "Light"}
//     </button>
//     // <React.createElement("button", {
//     //   >className: `w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`,
//     //   onClick: () => setTheme(theme === "dark" ? "light" : "dark")
//     // }, theme === "light" ? "Dark" : "Light")
//   );
// };

// export default ThemeSwitcher;
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// const ThemeSwitcher = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <button
//       className={` absolute p-2 rounded-md hover:scale-110 active:scale-100 duration-200 ${
//         theme === "light" ? " bg-base" : "dark: bg-dark_base "
//       }`}
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//     >
//       {theme === "light" ? "Dark" : "Light"}
//     </button>
//   );
// };

// export default ThemeSwitcher;


// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// const ThemeSwitcher = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const handleToggle = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <button
//       className={`absolute p-2 rounded-md hover:scale-110 active:scale-100 duration-200 ${
//         theme === "light" ? "bg-base" : "dark:bg-dark_base"
//       }`}
//       onClick={handleToggle}
//     >
//       {theme === "light" ? "Dark" : "Light"}
//     </button>
//   );
// };

// export default ThemeSwitcher;



import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';


const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className=" grid grid-flow-col">
    <input
      type="checkbox"
      className="toggle"
      checked={theme === "dark"}
      onChange={handleToggle}
    />
    {theme === "dark" ? (
        <MoonIcon className="w-6 h-6 ml-2" />
      ) : (
        <SunIcon className="w-6 h-6 ml-2" />
      )}
    {/* {theme === "dark" ? (
        <Moon className="w-6 h-6 ml-2 text-yellow-500" />
      ) : (
        <Sun className="w-6 h-6 ml-2 text-yellow-500" />
      )} */}
    </div>
  );
};

export default ThemeSwitcher;