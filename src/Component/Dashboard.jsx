import { useState } from "react";
import HeaderDash from "./HeaderDash";
import SidebarDash from "./SidebarDash";
import HomeDash from "./HomeDash";
import "../Dashboard.css";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const closeSidebar = () => {
    setOpenSidebarToggle(false);
  };

  return (
    <div className="bg-blue-300 h-[calc(100vh - 300px)]">
      <HeaderDash
        OpenSidebar={OpenSidebar}
        openSidebarToggle={openSidebarToggle}
      />
      <div className="hidden lg:block">
        <div
          className={`grid transition-all duration-500 ease-in-out sidebar-width ${
            openSidebarToggle
              ? "grid-template-columns-1fr"
              : "grid-template-columns-sidebar-1fr"
          } bg-white h-customDash-h `}
        >
          {!openSidebarToggle && (
            <div
              className={`bg-customBlue h-[100%] transition-all duration-500 ease-in-out`}
            >
              <SidebarDash
                openSidebarToggle={openSidebarToggle}
                closeSidebar={closeSidebar}
              />
            </div>
          )}
          <div
            className={`transition-all duration-500 ease-in-out ${
              openSidebarToggle ? "w-full" : "w-auto"
            } overflow-x-scroll`}
          >
            <HomeDash />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="relative">
          <div
            className={`h-[100%] transition-all duration-500 ease-in-out absolute`}
          >
            <SidebarDash
              openSidebarToggle={openSidebarToggle}
              closeSidebar={closeSidebar}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              openSidebarToggle ? "w-full" : "w-auto"
            } overflow-x-scroll`}
          >
            <HomeDash />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
