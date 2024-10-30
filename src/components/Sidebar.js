import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiHome,
  FiFileText,
  FiVideo,
  FiMessageCircle,
  FiSettings,
  FiUsers,
  FiStar,
  FiBook,
  FiChevronDown,
  FiChevronUp,
  FiImage,       // Added for 'Ai Chat Image'
  FiCode,        // Added for 'Ai Code'
  FiYoutube,     // Added for 'Ai Youtube'
  FiRss,         // Added for 'Ai RSS'
  FiMic,         // Added for 'Ai Text To Speech'
} from 'react-icons/fi'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isChatSettingsOpen, setIsChatSettingsOpen] = useState(false);

  // Load sidebar state from local storage on mount
  useEffect(() => {
    const sidebarState = localStorage.getItem('sidebarState');
    if (sidebarState) {
      setIsMinimized(JSON.parse(sidebarState));
    }
  }, []);

  // Save sidebar state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('sidebarState', JSON.stringify(isMinimized));
  }, [isMinimized]);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleChatSettings = () => {
    setIsChatSettingsOpen(!isChatSettingsOpen);
  };

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`} id="sidebar">
      <div className="w-100 py-3" style={{ position: 'relative' }}>
        <button
          className="navbar-toggler navbar-toggler align-self-center p-0 minTog"
          type="button"
          onClick={toggleSidebar}
          style={{ position: 'absolute', right: '3%', color: 'black', borderRadius: '50%' }}
        >
          {isMinimized ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
        </button>
      </div>

      {/* Credits Section */}
      <div className={`credits-section ${isMinimized ? 'hidden' : ''}`}>
        <div className="mb-3">
          <span className="menu-title mb-2">Credits</span>
          <div className="d-flex justify-content-between" style={{ color: '#6C7383' }}>
            <div className="w-50 d-flex">
              <i className="mdi mdi-brightness-1 fs-8 text-primary"></i>
              <span className="ps-2">Words</span>
            </div>
            <div>Unlimited</div>
          </div>

          <div className="d-flex justify-content-between" style={{ color: '#6C7383' }}>
            <div className="w-50 d-flex">
              <i className="mdi mdi-brightness-1 fs-8" style={{ color: 'rgba(75, 73, 172, 0.2)' }}></i>
              <span className="ps-2">Images</span>
            </div>
            <div>Unlimited</div>
          </div>

          <div className="mt-1">
            <div className="progress" style={{ backgroundColor: 'rgba(75, 73, 172, 0.2)' }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: '50%' }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <ul className="nav"> 
  <li className="nav-item">
    <Link className="nav-link" to="/dashboard">
      <FiHome size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Dashboard</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/aiheader">
      <FiFileText size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai Article</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/aiheadervideo">
      <FiVideo size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai Video</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/aichat">
      <FiMessageCircle size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai File Chat</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/aichatx">
      <FiMessageCircle size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai Chat</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/ai-vision">
      <FiImage  size={21} className="menu-icon" />  {/* FiEye is a placeholder, use an appropriate icon */}
      {!isMinimized && <span className="menu-title">Ai Vision</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/brandvoice">
    <FiImage  size={21} className="menu-icon" /> {/* FiVolume2 as a placeholder */}
      {!isMinimized && <span className="menu-title">Brand Voice</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/airewriterheader">
      <FiFileText size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai ReWriter</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/aichatimageheader">
      <FiImage size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai Chat Image</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/aicodeheader">
      <FiCode size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai Code</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/aiyoutubeheader">
      <FiYoutube size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai Youtube</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/airssheader">
      <FiRss size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai RSS</span>}
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/aispeech">
      <FiMic size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Ai Text To Speech</span>}
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/affliate">
      <FiMic size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Affliate</span>}
    </Link>
  </li>

  <li className="nav-item">
    <a className="nav-link" onClick={toggleChatSettings} href="/">
      <FiSettings size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Chat Settings</span>}
      {isChatSettingsOpen ? <FiChevronUp className="menu-arrow" /> : <FiChevronDown className="menu-arrow" />}
    </a>
    {isChatSettingsOpen && (
      <div className="collapse show" id="ui-basic">
        <ul className="nav flex-column sub-menu">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Chat Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Chat Templates
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Chatbot Training
            </a>
          </li>
        </ul>
      </div>
    )}
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/">
      <FiUsers size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Team</span>}
    </Link>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="/">
      <FiSettings size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Integration</span>}
    </a>
  </li>

  <li className="nav-item">
    <hr className="dropdown-divider" />
  </li>

  <li className="nav-item">
    <a className="nav-link" href="pages/documentation/documentation.html">
      <FiStar size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Favorites</span>}
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="pages/documentation/documentation.html">
      <FiBook size={21} className="menu-icon" />
      {!isMinimized && <span className="menu-title">Workbook</span>}
    </a>
  </li>
</ul>

      <ul className="nav" style={{ listStyleType: 'none', position: 'absolute', bottom: '10px', width: '100%' }}>
        <li className="nav-item d-flex justify-content-between align-items-center">
          <a className="nav-link mr-2 text-dark affiliate" href="pages/documentation/documentation.html">
            Affiliate
          </a>

          <a className="nav-link ms-2 text-dark help" href="pages/documentation/documentation.html">
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
