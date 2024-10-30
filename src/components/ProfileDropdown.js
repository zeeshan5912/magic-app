import React, { useState } from 'react';
import { FaSmile, FaPowerOff, FaUser, FaCog, FaBell, FaKeyboard, FaDownload, FaTrashAlt, FaChevronDown } from 'react-icons/fa';

const ProfileDropdown = () => {
  const [muteDropdownOpen, setMuteDropdownOpen] = useState(false);

  const toggleMuteDropdown = () => {
    setMuteDropdownOpen(!muteDropdownOpen);
  };

  function logoutUser(){
    localStorage.clear();
    window.location.href = '/login'
}

  const handleMenuClick = (e) => {
    e.preventDefault(); // Prevent default action
    console.log("Menu item clicked"); // Optional: Log or handle as needed
  };

  return (
    <li className="nav-item nav-profile d-block dropdown custom-nav-item" style={{ marginLeft: '0.7em' }}>
      <a
        className="nav-link dropdown-toggle p-0 d-flex align-items-center"
        style={{ height: '2.5em' }}
        href="/"
        data-bs-toggle="dropdown"
        data-bs-placement="bottom"
        title="User"
      >
        <img style={{ width: '30px', height: '30px' }} src="https://magicai.liquid-themes.com/themes/default/assets/img/chatbot-default.png" alt="profile" />
      </a>
      <div className="dropdown-menu dropdown-menu-right navbar-dropdown profileDropdown" aria-labelledby="profileDropdown">
        <div className="profileStatusContainer w-100">
          <div className="row m-0">
            <div className="col-md-3 px-0 d-flex justify-content-center">
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '50px', height: '50px' }}>
                <img src="https://magicai.liquid-themes.com/themes/default/assets/img/chatbot-default.png" className="img-fluid" alt="..." />
                <div className="onlineDot"></div>
              </div>
            </div>
            <div className="col-md-9 px-0">
              <div className="card-body py-2 ps-lg-0">
                <h5 className="card-title mb-0 text-center text-lg-start">Ashlil Londa</h5>
                <p className="card-text mb-0 text-center text-lg-start">
                  <small className="text-muted">Online</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn d-flex align-items-center mx-auto ps-3 py-2 my-2"
          style={{ width: '95%', border: '1px solid rgba(87, 86, 86, 0.247)' }}
          data-bs-toggle="modal"
          data-bs-target="#SetStatus"
        >
          <FaSmile size={18} style={{ marginRight: '10px' }} />
          <span>Set Status</span>
        </button>

        <div className="custom-dropdown">
          <div
            className="dropdown-item dropdown-toggle d-flex justify-content-between"
            id="muteDropdown"
            onClick={toggleMuteDropdown}
            role="button"
          >
            <div>
              <FaBell size={18} className="text-primary" style={{ marginRight: '10px' }} />
              Mute Notifications
            </div>
            <FaChevronDown size={18} />
          </div>
          {muteDropdownOpen && (
            <div className="custom-dropdown-menu" id="muteDropdownMenu">
              <div className="custom-dropdown-item">Mute for 1 hour</div>
              <div className="custom-dropdown-item">Mute for 8 hours</div>
              <div className="custom-dropdown-item">Mute until tomorrow</div>
            </div>
          )}
        </div>

        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaUser size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Profile
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaCog size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Themes
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaCog size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Settings
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaBell size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Notification Settings
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaKeyboard size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Keyboard shortcuts
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaDownload size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Download apps
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaUser size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Referrals
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaUser size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Help
        </a>
        <a className="dropdown-item d-flex align-items-center" href="/" onClick={handleMenuClick} role="button">
          <FaTrashAlt size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Trash
        </a>
        <a href='/'
          className="dropdown-item d-flex align-items-center"
          onClick={logoutUser}
          role="button"
        >
          <FaPowerOff size={18} className="text-primary" style={{ marginRight: '10px' }} />
          Logout
        </a>
      </div>
    </li>
  );
};

export default ProfileDropdown;
