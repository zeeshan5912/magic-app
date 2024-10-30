import React from 'react';
import ImgSuper from '../../../Assets/spider.png'
const VideoAiTools = () => {
  return (
    <div className="ai_tools">
      <div className="btnShowHide">
        <button className="btn d-flex align-items-center">
          <div className="fs-6">Hide Ai Tools</div>
          <span>
            <i className="mdi mdi-chevron-up fs-5 mx-2"></i>
          </span>
        </button>
      </div>
      <div className="toggleContent">
        <div className="row">
          {[1, 2, 3].map((_, index) => (
            <div className="col-lg-4" key={index}>
              <a href="/">
                <div className="card">
                  <div className="w-100 d-flex justify-content-center align-items-center pt-4">
                    <img src={ImgSuper} className="img-fluid" alt="Sketch" style={{width:'60%', height: '60%' , borderRadius:'8px'}} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-2 text-center">Sketch Video</h5>
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
    </div>
  );
};

export default VideoAiTools;
