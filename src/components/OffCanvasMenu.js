// import React from 'react';

// const OffCanvasMenu = () => {
//   return (
//     <li className="nav-item custom-nav-item">
//       {/* Offcanvas Trigger Button */}
//       <button
//         className="btn p-0"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#offcanvasRight"
//         aria-controls="offcanvasRight"
//         title="Quick Action Menu"
//         style={{ width: '30px', height: '35px' }}
//       >
//         <i className="mdi mdi-apps text-white" style={{ fontSize: '20px' }}></i>
//       </button>

//       {/* Main Offcanvas (Right) */}
//       <div
//         className="offcanvas offcanvas-end"
//         tabIndex="-1"
//         id="offcanvasRight"
//         aria-labelledby="offcanvasRightLabel"
//         style={{ maxWidth: '270px' }}
//       >
//         <div className="offcanvas-header">
//           <button
//             type="button"
//             className="btn-close text-reset"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div
//           className="offcanvas-body px-0"
//           style={{ overflowX: 'hidden' }}
//         >
//           <div className="row row-cols-3 px-4 py-1 pb-3">
//             {/* Offcanvas Items */}
//             {[
//               { icon: 'mdi-folder-account', color: 'rgb(255, 153, 0)', label: 'Documents' },
//               { icon: 'mdi-clipboard-text', color: 'blue', label: 'Ai Writer' },
//               { icon: 'mdi-table-edit', color: 'brown', label: 'Ai Editor' },
//               { icon: 'mdi-folder-multiple-image', color: 'green', label: 'Ai Avatar' },
//               { icon: 'mdi-checkbox-multiple-marked-circle-outline', color: 'blueviolet', label: 'Ai Plagiarism' },
//               { icon: 'mdi-credit-card-scan', color: 'rgb(228, 13, 78)', label: 'Ai Detector' },
//               { icon: 'mdi-share-variant', color: 'rgb(15, 69, 170)', label: 'Ai Social Media' },
//               { icon: 'mdi-calendar-clock', color: 'rgb(0, 128, 117)', label: 'Scheduled Posts' },
//               { icon: 'mdi-file-image', color: 'rgb(52, 226, 110)', label: 'Ai Image' },
//               { icon: 'mdi-book-open', color: 'rgb(85, 27, 20)', label: 'Ai Article Wizard' },
//             ].map((item, index) => (
//               <div className="col px-0" key={index}>
//                 <a href='/' className="btn p-0 d-flex flex-column" type="button">
//                   <span
//                     className="d-flex justify-content-center align-items-center mx-auto"
//                     style={{
//                       height: '60px',
//                       width: '60px',
//                       border: '1px solid rgba(145, 145, 145, 0.37)',
//                       borderRadius: '10px',
//                     }}
//                   >
//                     <i className={`mdi ${item.icon} fs-4`} style={{ color: item.color }}></i>
//                   </span>
//                   <span className="w-100 text-center mt-3 offcanvasText">
//                     {item.label}
//                   </span>
//                 </a>
//               </div>
//             ))}
//           </div>

//           <div
//             style={{
//               width: '100%',
//               height: '1px',
//               backgroundColor: 'rgba(0, 0, 0, 0.103)',
//             }}
//           ></div>

//           {/* Sidebar Menu */}
//           <nav className="custom_sidebar w-100">
//             <ul className="nav">
//               <li className="nav-item">
//                 <a className="nav-link" href="index.html">
//                   <i className="icon-grid menu-icon" style={{ color: 'rgb(199, 94, 121)' }}></i>
//                   <span className="menu-title ms-2">App Center</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="index.html">
//                   <i className="icon-grid menu-icon" style={{ color: 'green' }}></i>
//                   <span className="menu-title ms-2">Template Center</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="index.html">
//                   <i className="icon-grid menu-icon" style={{ color: '#800080' }}></i>
//                   <span className="menu-title ms-2">Custom Field Manager</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default OffCanvasMenu;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const OffCanvasMenu = () => {
  return (
    <li className="nav-item custom-nav-item">
      {/* Offcanvas Trigger Button */}
      <button
        className="btn p-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        title="Quick Action Menu"
        style={{ width: '30px', height: '35px' }}
      >
        <i className="mdi mdi-apps text-white" style={{ fontSize: '20px' }}></i>
      </button>

      {/* Main Offcanvas (Right) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ maxWidth: '270px' }}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-0" style={{ overflowX: 'hidden' }}>
          <div className="row row-cols-3 px-4 py-1 pb-3">
            {/* Offcanvas Items */}
            {[
              { icon: 'mdi-folder-account', color: 'rgb(255, 153, 0)', label: 'Documents' },
              { icon: 'mdi-clipboard-text', color: 'blue', label: 'Ai Writer', path: '/aiwriter' },
              { icon: 'mdi-table-edit', color: 'brown', label: 'Ai Editor', path: '/ai-editor' },
              { icon: 'mdi-folder-multiple-image', color: 'green', label: 'Ai Avatar', path: '/ai-avatar' },
              { icon: 'mdi-checkbox-multiple-marked-circle-outline', color: 'blueviolet', label: 'Ai Plagiarism', path: '/ai-plagiarism' },
              { icon: 'mdi-credit-card-scan', color: 'rgb(228, 13, 78)', label: 'Ai Detector', path: '/ai-detector' },
              { icon: 'mdi-share-variant', color: 'rgb(15, 69, 170)', label: 'Ai Social Media', path: '/ai-social-media' },
              { icon: 'mdi-calendar-clock', color: 'rgb(0, 128, 117)', label: 'Scheduled Posts', path: '/scheduled-posts' },
              { icon: 'mdi-file-image', color: 'rgb(52, 226, 110)', label: 'Ai Image', path: '/aiimage' }, // Add path for Ai Image
              { icon: 'mdi-book-open', color: 'rgb(85, 27, 20)', label: 'Ai Article Wizard', path: '/ai-article-wizard' },
            ].map((item, index) => (
              <div className="col px-0" key={index}>
                {/* Use Link for routing */}
                <Link to={item.path} className="btn p-0 d-flex flex-column" type="button">
                  <span
                    className="d-flex justify-content-center align-items-center mx-auto"
                    style={{
                      height: '60px',
                      width: '60px',
                      border: '1px solid rgba(145, 145, 145, 0.37)',
                      borderRadius: '10px',
                    }}
                  >
                    <i className={`mdi ${item.icon} fs-4`} style={{ color: item.color }}></i>
                  </span>
                  <span className="w-100 text-center mt-3 offcanvasText">
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(0, 0, 0, 0.103)',
            }}
          ></div>

          {/* Sidebar Menu */}
          <nav className="custom_sidebar w-100">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/app-center">
                  <i className="icon-grid menu-icon" style={{ color: 'rgb(199, 94, 121)' }}></i>
                  <span className="menu-title ms-2">App Center</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/template-center">
                  <i className="icon-grid menu-icon" style={{ color: 'green' }}></i>
                  <span className="menu-title ms-2">Template Center</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/custom-field-manager">
                  <i className="icon-grid menu-icon" style={{ color: '#800080' }}></i>
                  <span className="menu-title ms-2">Custom Field Manager</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </li>
  );
};

export default OffCanvasMenu;
