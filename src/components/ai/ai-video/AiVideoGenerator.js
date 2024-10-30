import React from 'react';
import {  PlusIcon } from '@heroicons/react/24/outline'; // Assuming you're using Heroicons

const AiVideoGenerator = () => {
  return (
    <div className="content-wrapper mt-5" style={{ backgroundColor: 'white' }}>
      {/* <div className="row">
        <div className="col-12 mb-4">
          <a href="/" className="btn p-0">
            <span className="d-flex align-items-center">
              <ChevronLeftIcon className="fs-5" /> Back to dashboard
            </span>
          </a>
        </div>
      </div> */}
      <div className="row pb-4">
        <div className="col-lg-6">
          <h3>AI Video Generator</h3>
          <p>
          Bring your static images to life and create visually compelling videos effortlessly.
          </p>
        </div>
        <div className="col-lg-6 aimg">
          <div className="d-flex justify-content-center justify-content-lg-end">
            <a href="/" className="btn bg-white mx-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
              My Documents
            </a>
            <a href="/" className="btn btn-primary">
              <span className="d-flex align-items-center">
                <PlusIcon className="me-3" /> New
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiVideoGenerator;
