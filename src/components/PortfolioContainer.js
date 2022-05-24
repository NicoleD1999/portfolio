import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About handlePageChange={handlePageChange}/>;
      }
      if (currentPage === 'Work') {
        return <Work />;
      }
      if (currentPage === 'Contact'){
        return <Contact />;
      } 
      return <Resume />
    };
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs handlePageChange={handlePageChange}/>
        {renderPage()}
      </div>
    );
  }