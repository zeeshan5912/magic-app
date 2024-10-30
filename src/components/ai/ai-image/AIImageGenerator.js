import React from 'react';
import {  PlusIcon } from '@heroicons/react/24/outline'; // Assuming you're using Heroicons

const AIImageGenerator = () => {
  return (
   <>
      <div className="row">
        <div className="col-12 mb-4 mt-5">
          {/* <a href="/" className="btn p-0">
            <span className="d-flex align-items-center">
              <ChevronLeftIcon className="fs-5" /> Back to dashboard
            </span>
          </a> */}
        </div>
      </div>
      <div className="row pb-4">
        <div className="col-lg-6">
          <h3>AI Image Generator</h3>
          <p>
            Unleash your creativity with our AI image generator that produces stunning visuals in seconds.
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
   </>
  );
};

export default AIImageGenerator;
