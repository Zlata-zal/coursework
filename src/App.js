import React, { useState } from "react";
import Header from "./components/layout/header/Header";
import SideBar from "./components/layout/sidebar/SideBar.jsx";
import Home from "./components/page/home/Home";
import {Habit} from "./components/ui/habit/Habit";
import Tasks from "./components/task/TaskList";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'habits':
        return <Habit />;
      case 'tasks':
        return <Tasks />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <SideBar onPageChange={setCurrentPage} currentPage={currentPage} />
        <div className="content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;