import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const VideoIdeaExplainComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    $(document).ready(function () {
      $('.settingTogleBtn button').on('click', function (event) {
        event.preventDefault(); // Prevent default button behavior

        const $span = $(this).find('span');
        const $settingContainer = $(this).closest('.advanceSetting').find('.settingContainer');

        // Toggle the settingContainer visibility
        $settingContainer.slideToggle();

        // Toggle the "+" and "-" text inside the span
        $span.text($span.text() === '+' ? '-' : '+');
      });
    });

    // Cleanup on unmount
    return () => {
      $('.settingTogleBtn button').off('click');
    };
  }, []);

  return (
    <>
       <h3>Source Image</h3>

            <div className="tabs-content2">
    <div className="list">
      <h4 className="fw-bolder">
        Explain your idea. |{' '}
        <a href="/#" className="text-success">Generate example prompt</a>
        <button
          type="button"
          className="btn p-0"
          onClick={handleModalToggle}
        >
          <i className="mdi mdi-file-document-box fs-3"></i>
        </button>
      </h4>

      {/* Modal */}
      {modalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} aria-hidden="false">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalToggle}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalToggle}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <form>
        <div className="w-100" style={{ position: 'relative' }}>
          <textarea
            className="w-100 form-control"
            style={{ borderRadius: '25px', height: '3.4em' }}
            placeholder="Enter here..."
          />
          <button
            className="btn btn-primary"
            style={{
              borderRadius: '25px',
              padding: '0.8em 1.5em',
              position: 'absolute',
              top: '10%',
              right: '1%',
            }}
          >
            Generate
          </button>
        </div>

        <div className="advanceSetting pt-4">
          <div className="settingTogleBtn">
            <button className="btn p-0 d-flex align-items-center">
              <div className="mx-2">Advanced Settings</div>
              <span
                className="bg-white fs-3"
                style={{ borderRadius: '50%', padding: '4px 12px' }}
              >
                +
              </span>
            </button>
          </div>
             <div className="settingContainer">
      <div className="row">
        <div className="col-lg-2">
          <label className="form-label">Image resolution</label>
          <select className="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2">
          <label className="form-label">Art Style</label>
          <select className="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2">
          <label className="form-label">Lightning Style</label>
          <select className="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2">
          <label className="form-label">Mood</label>
          <select className="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2">
          <label className="form-label">Number of Images</label>
          <select id="inputState" className="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-lg-2">
          <label className="form-label">Quality of Images</label>
          <select id="inputState" className="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </div>
    </div>
        </div>
      </form>
    </div>

    </div>
  
    </>
  );
};

export default VideoIdeaExplainComponent;
