// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Router> */}
//       <App />
//     {/* </Router> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </React.StrictMode>,
  // document.getElementById('root')
);
