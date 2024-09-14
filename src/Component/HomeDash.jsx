import React, { useState, useEffect } from 'react';
import { useSelectedLink } from '../Component/SelectedLinkContext';
import UserList from './UserList';
import TransactionList from './TransactionList';
import AddCategory from './AddCategory';
import AddBlog from './AddBlog';
import BlogList from './BlogList';
import AdminMainPage from './AdminMainPage.jsx';

function HomeDash() {
  const { selectedLink } = useSelectedLink();
  const [showRightSectionContainer, setShowRightSectionContainer] = useState('User'); // Initial value set to 'User'

  // Update state when selectedLink changes
  useEffect(() => {
    setShowRightSectionContainer(selectedLink);
  }, [selectedLink]);

  let content = null;

  switch (showRightSectionContainer) {
    case 'Dashboard':
      content = <div><AdminMainPage/></div>;
      break;
    case 'User':
      content = <div><UserList/></div>;
      break;
    case 'Transaction':
      content = <div><TransactionList/></div>;
      break;
    case 'Add Category':
      content = <div><AddCategory/></div>;
      break;
    case 'Add Blog':
      content = <div><AddBlog/></div>;
      break;
    case 'Blog List':
      content = <div><BlogList/></div>;
      break;
    default:
      content = <div><AdminMainPage/></div>;
      break;
  }

  return <main className="main-container">{content}</main>;
}

export default HomeDash;
