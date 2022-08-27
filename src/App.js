import React, { useState } from 'react';
import './App.css';

// import components
import Nav from './assets/components/Nav';

// import pages
import Home from './assets/components/pages/Home';
import Stats from './assets/components/pages/Stats';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'stats':
        return <Stats />
      default:
        return <Home />
    }
  }

  return (
    <div>
      <Nav
        currentPage={currentPage}
        changePage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
