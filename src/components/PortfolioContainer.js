import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Work') {
        return <Work />;
      }
      return <Contact />;
    };
  
  
    return (
      <div>
        <NavTabs />
        {renderPage()}
      </div>
    );
  }