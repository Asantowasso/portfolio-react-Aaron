import React, { useState } from "react";
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Work"){
      return <Work />;
    }
    if (currentPage === "Resume"){
      return <Resume />;
    }
    if (currentPage === "Contact"){
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}
