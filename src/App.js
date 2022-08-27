import React, { useState } from 'react';
import './App.css';

// import components
import Nav from './assets/components/Nav';

// import pages
import Home from './assets/components/pages/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
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
