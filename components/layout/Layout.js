// import React, { PropsWithChildren, useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import ThemeProvider from "./ThemeProvider";
// import ThemeSwitcher from './ThemeSwitcher';

// const Layout = (props) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   return (
//     <div className="grid min-h-screen grid-rows-header bg-zinc-100">

//       <div>
//         <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
//       </div>
//       <div className="grid md:grid-cols-sidebar">
//         <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
//         {props.children}
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import ThemeProvider from "./ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";

const Layout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <NextThemeProvider attribute="class">
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <div>
      <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
      </div>
        <div className="grid md:grid-cols-sidebar">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <div className="md:col-span-sidebar">{props.children}</div>
        </div>

    </div>
    </NextThemeProvider>
  );
};

export default Layout;


// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import ThemeProvider from "./ThemeProvider";
// import ThemeSwitcher from "./ThemeSwitcher";

// const Layout = (props) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   return (
//     <div className="grid min-h-screen grid-cols-1 md:grid-cols-sidebar bg-zinc-100">
//       <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />

//         <div className="grid grid-cols-sidebar">
//           <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
//           <div>{props.children}</div>
//         </div>

//     </div>
//   );
// };

// export default Layout;



// import React from "react";
// import { ThemeProvider as NextThemeProvider } from "next-themes";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import ThemeSwitcher from "./ThemeSwitcher";

// function Layout({ children }) {
//   return (
//     <NextThemeProvider attribute="class">
//       <div className="grid min-h-screen grid-rows-header bg-zinc-100">
//         <Navbar />
//         <div className="grid md:grid-cols-sidebar">
//           <Sidebar />
//           {children}
//         </div>
//       </div>
//     </NextThemeProvider>
//   );
// }

// export default Layout;

// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import Theme from "./ThemeProvider";

// const Layout = (props) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Assuming theme is provided as a prop
//   const { theme } = props;

//   return (
//     <Theme theme={theme}>
//       <div className="grid min-h-screen grid-rows-header bg-zinc-100">
//         <div>
//           <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
//         </div>

//         <div className="grid md:grid-cols-sidebar">
//           <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
//           {props.children}
//         </div>
//       </div>
//     </Theme>
//   );
// };

// export default Layout;
