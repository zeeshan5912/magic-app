// import React, { useState } from 'react';
// import '../App.css';
// import MagicAi from '../Assets/magicAI-logo.svg';

// const Footer = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [country, setCountry] = useState('');
//   const [termsAccepted, setTermsAccepted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log({ username, email, password, country, termsAccepted });
//   };

//   return (
//     <div className="container-scroller">
//       <div className="container-fluid page-body-wrapper full-page-wrapper">
//         <div className="content-wrapper d-flex align-items-center auth px-0">
//           <div className="row w-100 mx-0">
//             <div className="col-lg-4 mx-auto">
//               <div className="auth-form-light text-left py-5 px-4 px-sm-5">
//                 <div className="brand-logo">
//                   <img src={MagicAi} alt="logo" />
//                 </div>
//                 <h4>New here?</h4>
//                 <h6 className="font-weight-light">
//                   Signing up is easy. It only takes a few steps
//                 </h6>
//                 <form className="pt-3" onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       className="form-control form-control-lg"
//                       id="exampleInputUsername1"
//                       placeholder="Username"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       className="form-control form-control-lg"
//                       id="exampleInputEmail1"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <select
//                       className="form-control form-control-lg"
//                       id="exampleFormControlSelect2"
//                       value={country}
//                       onChange={(e) => setCountry(e.target.value)}
//                     >
//                       <option value="">Country</option>
//                       <option value="United States of America">
//                         United States of America
//                       </option>
//                       <option value="United Kingdom">United Kingdom</option>
//                       <option value="India">India</option>
//                       <option value="Germany">Germany</option>
//                       <option value="Argentina">Argentina</option>
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="password"
//                       className="form-control form-control-lg"
//                       id="exampleInputPassword1"
//                       placeholder="Password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="termsAndConditions"
//                         checked={termsAccepted}
//                         onChange={(e) => setTermsAccepted(e.target.checked)}
//                       />
//                       <label className="form-check-label text-muted" htmlFor="termsAndConditions">
//                         I agree to all Terms & Conditions
//                       </label>
//                     </div>
//                   </div>
//                   <div className="mt-3">
//                     <button
//                       type="submit"
//                       className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
//                     >
//                       SIGN UP
//                     </button>
//                   </div>
//                   <div className="text-center mt-4 font-weight-light">
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright © 2021. Premium 
          <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer">
            Bootstrap admin template
          </a> 
          from BootstrapDash. All rights reserved.
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          Hand-crafted & made with <i className="ti-heart text-danger ml-1"></i>
        </span>
      </div>
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Distributed by 
          <a href="https://www.themewagon.com/" target="_blank" rel="noopener noreferrer">
            Themewagon
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
