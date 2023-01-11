import React from 'react';

// The user will be able to navigate the portfolio using navigation tabs at the top of the page

function NavTabs({currentPage, handlePageChange }){
  return(
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <a href ="#home" onClick={() => handlePageChange('Home')}

      className = {currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
      >
        Home
        </a>
      </li>
    </ul>

  )

}

export default NavTabs;