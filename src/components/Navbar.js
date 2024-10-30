import React, { useState } from 'react';
import OffCanvasMenu from './OffCanvasMenu'; 
import ProfileDropdown from './ProfileDropdown';
import ImgSuper from  '../Assets/file.png'
import NotificationDropdown from './NotificationDropdown';
import ModalComponent from './ModalComponent';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');
  const [showClearBtn, setShowClearBtn] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setShowClearBtn(e.target.value.length > 0);
  };

  const clearSearch = () => {
    setSearchText('');
    setShowClearBtn(false);
  };

  return (
    
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row bg-dark" >
      <div className="text-center navbar-brand-wrapper d-flex">
        <a className="navbar-brand brand-logo mr-5" href="index.html">
          <img src={ImgSuper} className="ms-3" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini ms-3" href="index.html">
          <img src="images/keydevs.png" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end px-0">
        <ul className="navbar-nav mr-lg-2 w-100 d-flex justify-content-center">
          <li className="nav-item nav-search d-none d-lg-block forMobile" style={{ marginLeft: '15em' }}>
            <div className="input-group p-0" style={{ position: 'relative' }}>
              <input
                type="search"
                className="form-control"
                style={{
                  height: '2.2em',
                  paddingLeft: '2.5em',
                  paddingRight: '0.8em',
                  width: '400px',
                  borderRadius: '8px',
                  marginLeft: '0',
                }}
                id="Searchinput"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchChange}
              />
              {showClearBtn && (
                <button id="clear-btn" className="clear-button" onClick={clearSearch} style={{ display: 'block' }}>
                  ✖
                </button>
              )}
              <div className="input-group-text SearchBtn" style={{ height: '2.2em', borderRadius: '8px' }}>
                <button className="p-1 px-2" style={{ border: 'none', background: 'inherit', borderRadius: '8px' }}>
                  <i className="mdi mdi-magnify" style={{ color: '#dedee3' }}></i>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <ul className="navbar-nav">
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center p-0 mr-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mdi mdi-magnify"></span>
          </button>
          <li className="nav-item d-lg-block p-0">
            <button className="upgrade d-flex align-items-center px-2">
              <i className="mdi mdi-rocket"></i>
              <span className="ms-2 fs-6 fw-bold">Upgrade</span>
            </button>
          </li>
         <ModalComponent/>
          <span className="" style={{ color: '#808199', fontSize: '20px' }}>
            &#124;
          </span>
   
          <NotificationDropdown/>
           {/* offcanvas */}
         
           <OffCanvasMenu/>
           {/* Profile  */}
           <ProfileDropdown/>
        </ul>
        
      </div>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav" id="mobiletoggle"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
