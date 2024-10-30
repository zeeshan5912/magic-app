import React, { useState } from 'react';
import ImgSketch from '../../../Assets/sketch1.png'
const ImgAiTools = () => {
  const [isVisible, setIsVisible] = useState(true); // State to track visibility
  const [buttonText, setButtonText] = useState('Hide AI Tools'); // State for button text
  const [iconClass, setIconClass] = useState('mdi-chevron-up'); // State for the icon

  const handleToggle = () => {
    setIsVisible(!isVisible); // Toggle visibility
    if (isVisible) {
      setButtonText('Show AI Tools');
      setIconClass('mdi-chevron-down');
    } else {
      setButtonText('Hide AI Tools');
      setIconClass('mdi-chevron-up');
    }
  };

  return (
    <div className="ai_tools">
      <div className="btnShowHide">
        <button className="btn d-flex align-items-center" onClick={handleToggle}>
          <div className="fs-6">{buttonText}</div>
          <span>
            <i className={`mdi ${iconClass} fs-5 mx-2`}></i>
          </span>
        </button>
      </div>

      {/* Conditional rendering for toggling the content */}
      {isVisible && (
        <div className="toggleContent">
          <div className="row">
            {[1, 2, 3].map((_, index) => (
              <div className="col-lg-4" key={index}>
                <a href="/">
                  <div className="card">
                    <div className="w-100 d-flex justify-content-center align-items-center pt-4">
                      <img src={ImgSketch} className="img-fluid" alt="Sketch" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mb-2 text-center">Sketch to Image</h5>
                      <p className="card-text text-center mb-2">
                        Transform your ideas into reality.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};



export default ImgAiTools;
