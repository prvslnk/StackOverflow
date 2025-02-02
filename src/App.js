import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-grid">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
