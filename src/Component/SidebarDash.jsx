import React, { useState } from 'react';
import { BsPeopleFill, BsPlusCircleFill, BsList, BsGearFill, BsCardList, BsPerson } from 'react-icons/bs';
import { useSelectedLink } from './SelectedLinkContext';
import "../Dashboard.css";

function SidebarDash({ openSidebarToggle, closeSidebar }) {
  const { handleSelectLink } = useSelectedLink();
  const [showManageBlogLinks, setShowManageBlogLinks] = useState(true);

  const toggleManageBlogLinks = (e) => {
    e.stopPropagation();
    setShowManageBlogLinks(!showManageBlogLinks);
  };

  const handleLinkClick = (link, e) => {
    e.stopPropagation();
    handleSelectLink(link);
    closeSidebar();
  };

  return (
    <div id="sidebar" className={`sidebar ${openSidebarToggle ? 'sidebar-responsive' : ''} bg-customBlue z-20 relative pr-4 pb-8`}>
      <div className="w-[160px] md:w-[200px] lg:w-[235px]">
        <div className="sidebar-title"></div>
        <ul className="sidebar-list mt-0 md:mt-4">
          <li className="sidebar-list-item mt-0 md:mt-2 pr-2">
            <a href="#" onClick={(e) => handleLinkClick('Dashboard', e)}>
              <div className="flex items-center py-3 md:py-4 px-2 md:px-6 bg-blue-500 text-white rounded-tr-3xl">
                <div>
                  <BsPeopleFill className="icon text-[22px]" />
                </div>
                <div>
                  <span className="text-[14px] lg:text-[18px] ml-2 md:ml-3 pl-2 md:pl-3 border-l-2">Dashboard</span>
                </div>
              </div>
            </a>
          </li>
          <li className="sidebar-list-item mt-2 pr-2">
            <a href="#" onClick={(e) => handleLinkClick('User', e)}>
              <div className="flex items-center py-3 md:py-4 px-2 md:px-6 bg-blue-500 text-white rounded-tr-3xl">
                <div>
                  <BsPeopleFill className="icon text-[22px]" />
                </div>
                <div>
                  <span className="text-[14px] lg:text-[18px] ml-2 md:ml-3 pl-2 md:pl-3 border-l-2">User</span>
                </div>
              </div>
            </a>
          </li>
          <li className="sidebar-list-item mt-2 pr-2">
            <a href="#" onClick={(e) => handleLinkClick('Transaction', e)}>
              <div className="flex items-center py-3 md:py-4 px-2 md:px-6 bg-blue-500 text-white rounded-tr-3xl">
                <div>
                  <BsPerson className="icon text-[22px]" />
                </div>
                <div>
                  <span className="text-[14px] lg:text-[18px] ml-2 md:ml-3 pl-2 md:pl-3 border-l-2">Transaction</span>
                </div>
              </div>
            </a>
          </li>
          <li className="sidebar-list-item mt-2 pr-2">
            <a href="#" onClick={toggleManageBlogLinks}>
              <div className="flex items-center py-3 md:py-4 px-2 md:px-6 bg-blue-500 text-white rounded-tr-3xl">
                <div>
                  <BsGearFill className="icon text-[22px]" />
                </div>
                <div>
                  <span className="text-[14px] lg:text-[18px] ml-2 md:ml-3 pl-2 md:pl-3 border-l-2">Manage Blog</span>
                </div>
              </div>
            </a>
            {showManageBlogLinks && (
              <ul className="ml-3">
                <li className="sidebar-list-item overflow-x-hidden mt-1 pr-2">
                  <a href="#" onClick={(e) => handleLinkClick('Add Category', e)}>
                    <div className="flex items-center py-2 px-4 bg-blue-400 text-white rounded-tr-2xl">
                      <div>
                        <BsCardList className="icon text-[18px]" />
                      </div>
                      <div>
                        <span className="text-[14px] lg:text-[18px] ml-2 md:ml-3 pl-2 md:pl-3 border-l-2">Add Category</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="sidebar-list-item overflow-x-hidden mt-1 pr-2">
                  <a href="#" onClick={(e) => handleLinkClick('Add Blog', e)}>
                    <div className="flex items-center py-2 px-3 bg-blue-400 text-white rounded-tr-2xl">
                      <div>
                        <BsPlusCircleFill className="icon text-[18px]" />
                      </div>
                      <div>
                        <span className="text-[14px] lg:text-[18px] ml-2 md:ml-3 pl-2 md:pl-3 border-l-2">Add Blog</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="sidebar-list-item overflow-x-hidden mt-1 pr-2">
                  <a href="#" onClick={(e) => handleLinkClick('Blog List', e)}>
                    <div className="flex items-center py-2 px-3 bg-blue-400 text-white rounded-tr-2xl">
                      <div>
                        <BsList className="icon text-[18px]" />
                      </div>
                      <div>
                        <span className="text-[14px] lg:text-[18px] ml-2 md:ml-3 pl-2 md:pl-3 border-l-2">Blog List</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarDash;
