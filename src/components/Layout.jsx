
// import React from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import ThemeSelector from "./ThemeSelector";
// import { useTheme } from "../context/ThemeContext";

// const Layout = ({ children }) => {
//   const { theme, themeName } = useTheme();

//   return (
//     <div
//       key={themeName}
//       className="min-h-screen flex"
//       style={{ fontFamily: theme.fontFamily }}
//     >
//       {theme.layout === "sidebar" && <Sidebar />}

//       <div className="flex-1 relative">
//         {theme.layout !== "sidebar" && <Header />}

//         <div
//           style={{
//             position: "fixed",
//             top: 10,
//             right: 20,
//             zIndex: 2000,
//             backgroundColor: "white",
//             padding: "4px",
//             borderRadius: "8px",
//             boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <ThemeSelector />
//         </div>

//         <div className="mt-20 px-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ThemeSelector from "./ThemeSelector";
import { useTheme } from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme, themeName } = useTheme();

  return (
    <div
      key={themeName}
      className="min-h-screen flex"
      style={{ fontFamily: theme.fontFamily }}
    >
      {theme.layout === "sidebar" && <Sidebar />}

      <div className="flex-1 relative">
        {theme.layout !== "sidebar" && <Header />}

        <div
          style={{
            position: "fixed",
            top: 10,
            right: 20,
            zIndex: 2000,
            backgroundColor: "white",
            padding: "4px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <ThemeSelector />
        </div>

       <div
  className="px-4"
  style={{
    paddingTop: theme.layout === "sidebar" ? "2rem" : "2rem", 
  }}
>
  {children}
</div>

      </div>
    </div>
  );
};

export default Layout;