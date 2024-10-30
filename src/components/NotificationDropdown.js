import React, { useState } from 'react';

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownStyle = {
    position: 'absolute',
    zIndex: 1000,
    display: isOpen ? 'block' : 'none',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '250px',
    padding: '10px',
    borderRadius: '4px',
  };

  const handleNotificationClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    console.log('Notification clicked!'); // Implement your logic here
  };

  const handleIconClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the icon link
    setIsOpen((prev) => !prev); // Toggle the dropdown on icon click
  };

  return (
    <li
      className="nav-item d-block dropdown justify-content-center align-items-center custom-nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{ position: 'relative' }}
    >
      <a 
        className="nav-link text-center py-0"
        id="notificationDropdown"
        href="/" // Ensure this is just a placeholder
        onClick={handleIconClick} // Handle click to toggle dropdown
        data-bs-placement="bottom"
        title="Notifications"
        style={{ width: '30px', height: '35px' }}
      >
        <i className="mdi mdi-bell-outline pt-1 mx-0"></i>
        <span className="count"></span>
      </a>
      {isOpen && (
        <div
          className="dropdown-menu navbar-dropdown preview-list"
          aria-labelledby="notificationDropdown"
          style={dropdownStyle}
        >
          <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
          <div style={{ marginTop: '10px' }}>
            <a 
              className="dropdown-item preview-item" 
              style={{ padding: '10px' }} 
              onClick={handleNotificationClick} 
              href="/"
            >
              <div className="preview-thumbnail">
                <div className="preview-icon bg-success">
                  <i className="ti-info-alt mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">Application Error</h6>
                <p className="font-weight-light small-text mb-0 text-muted">Just now</p>
              </div>
            </a>
            <a 
              className="dropdown-item preview-item" 
              style={{ padding: '10px' }} 
              onClick={handleNotificationClick} 
              href="/"
            >
              <div className="preview-thumbnail">
                <div className="preview-icon bg-warning">
                  <i className="ti-settings mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">Settings</h6>
                <p className="font-weight-light small-text mb-0 text-muted">Private message</p>
              </div>
            </a>
            <a 
              className="dropdown-item preview-item" 
              style={{ padding: '10px' }} 
              onClick={handleNotificationClick} 
              href="/"
            >
              <div className="preview-thumbnail">
                <div className="preview-icon bg-info">
                  <i className="ti-user mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">New user registration</h6>
                <p className="font-weight-light small-text mb-0 text-muted">2 days ago</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </li>
  );
};

export default NotificationDropdown;
