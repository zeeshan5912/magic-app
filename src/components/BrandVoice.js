import React, { useRef, useState } from 'react';

import Navbar from './Navbar'; 
import Sidebar from './Sidebar'; 
import Footer from './Footer'; 
export const BrandVoice = () => {
    // const tooltipRef = useRef(null);
    const newOptionInputRef = useRef(null);
    const industrySelectRef = useRef(null);
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [isPsTogleVisible, setPsTogleVisible] = useState(false);
  
    const handleMouseEnter = () => {
      setTooltipVisible(true);
    };
  
    const handleMouseLeave = () => {
      setTooltipVisible(false);
    };
  
    const handleAddOption = () => {
      const newOption = newOptionInputRef.current.value.trim();
      if (newOption !== '') {
        const newOptionElement = document.createElement('option');
        newOptionElement.value = newOption;
        newOptionElement.textContent = newOption;
        industrySelectRef.current.appendChild(newOptionElement);
        newOptionInputRef.current.value = '';
        // Close modal here (if you're managing modal visibility manually)
        // setShowModal(false); // Example if you have state for modal
      } else {
        alert('Please enter a value.');
      }
    };
  
    const togglePsTogle = () => {
      setPsTogleVisible(!isPsTogleVisible);
    };
  
  return (
    <>
        <div className="dashboard-container">
      <Navbar />
      <div className="d-flex">
       <Sidebar />
       <div className="content-wrapper" style={{ backgroundColor: 'white' }}>

      <div className="row pb-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
        <div className="col-lg-6 mt-5">
          <h3 style={{ fontWeight: 900 }}>Brand Voice</h3>
          <p>Generate AI content exclusive to your brand and eliminate the need for repetitive introductions of your company.</p>
        </div>

        <div className="col-lg-6 aimg">
          <div className="d-flex justify-content-center justify-content-lg-end">
            <a href="/" className="btn bg-white mx-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
              Manage Voices
            </a>
            <a href="/" className="btn btn-primary">
              <span className="d-flex align-items-center">
                <i className="mdi mdi-plus me-3"></i> New Company
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-center">
        <div style={{ width: '100%', maxWidth: '495px' }}>
          <form className="row pt-4 g-4">
            <div className="col-12">
              <h4 className="p-3" style={{ borderRadius: '10px', backgroundColor: '#e5e6f7' }}>
                <span style={{ padding: '0.2em 0.5em', borderRadius: '50%', backgroundColor: 'rgb(170, 100, 236)', color: 'white', fontSize: '14px' }}>1</span>
                <span className="ms-3">Company</span>
              </h4>
            </div>

            <div className="col-12">
              <label htmlFor="companyName" className="form-label d-flex">
                Company Name 
                <i className="mdi mdi-information mx-2 tooltip-trigger">
                  <span className="tooltip">Enter the name of your company or organization.</span>
                </i>
              </label>
              <input className="form-control form-control-sm" type="text" placeholder="The official name of your business entity" id="companyName" />
            </div>

            <div className="col-12">
            <label htmlFor="industrySelect" className="form-label d-flex">
          Industry 
          <span
            className="tooltip-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <i className="mdi mdi-information mx-2">
              {isTooltipVisible && (
                <span className="tooltip" style={{ display: 'block', opacity: 1 }}>
                  The field or sector of business activity your company primarily belongs to.
                </span>
              )}
            </i>
          </span>
        </label>
        <select id="industrySelect" className="form-select" size="4" multiple aria-label="Multiple select example" ref={industrySelectRef}></select>
        <small style={{ fontSize: '11px' }}>Hold cmd(on mac) or ctrl(on pc) to select multiple items.</small>
        <br />
        <button className="btn btn-primary p-2 px-2 d-flex align-items-center mt-2" data-bs-toggle="modal" data-bs-target="#addOption" onClick={(e) => e.preventDefault()}>
          <i className="mdi mdi-plus me-1"></i> Add New
        </button>
        <div className="modal fade" id="addOption" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">New Value</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input className="form-control" id="newOptionInput" ref={newOptionInputRef} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-light btn-fw" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddOption}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

            <div className="col-12">
              <label htmlFor="description" className="form-label d-flex">
                Description 
                <i className="mdi mdi-information mx-2 tooltip-trigger">
                  <span className="tooltip">A concise summary describing your company, its mission, and what sets it apart.</span>
                </i>
              </label>
              <textarea className="form-control form-control-sm" placeholder="Provide a brief description of your company." rows="4" id="description"></textarea>
            </div>

            <div className="col-12">
              <label htmlFor="website" className="form-label d-flex">
                Website
                <i className="mdi mdi-information mx-2 tooltip-trigger">
                  <span className="tooltip">Please provide the full web address (URL) of your company’s official website.</span>
                </i>
              </label>
              <input className="form-control form-control-sm" type="text" placeholder="Enter the URL of your company's website." id="website" />
            </div>

            <div className="col-12">
              <label htmlFor="tagline" className="form-label d-flex">
                Tagline
                <i className="mdi mdi-information mx-2 tooltip-trigger">
                  <span className="tooltip">A memorable and succinct phrase encapsulating your company’s mission or value proposition.</span>
                </i>
              </label>
              <input className="form-control form-control-sm" type="text" placeholder="Write a catchy tagline for your company." id="tagline" />
            </div>

            <div className="col-12">
              <label htmlFor="toneOfVoice" className="form-label d-flex">Tone of Voice</label>
              <select className="form-select form-select-sm" aria-label="Default select example" id="toneOfVoice">
                <option selected>Professional</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="targetAudience" className="form-label d-flex">
                Target Audience
                <i className="mdi mdi-information mx-2 tooltip-trigger">
                  <span className="tooltip">Describe the primary demographic or audience your company is targeting.</span>
                </i>
              </label>
              <textarea className="form-control form-control-sm" placeholder="Describe the primary demographic or audience your company is targeting." rows="4" id="targetAudience"></textarea>
            </div>

            <div className="col-12">
              <label htmlFor="brandVoice" className="form-label d-flex">
                Brand Voice
                <i className="mdi mdi-information mx-2 tooltip-trigger">
                  <span className="tooltip">Describe the primary demographic or audience your company is targeting.</span>
                </i>
              </label>
              <input className="form-control form-control-sm" type="file" id="brandVoice" />
            </div>

            <div className="col-12 mb-3">
              <label htmlFor="brandColor" className="form-label d-flex">
                Brand Color
                <i className="mdi mdi-information mx-2 tooltip-trigger">
                  <span className="tooltip">Pick a color for the icon container shape. Color is in HEX format.</span>
                </i>
              </label>
              <input type="text" className="form-control form-control-sm basic" value="red" id="brandColor" />
            </div>

            <div className="col-12">
        <h4 className="p-3 d-flex justify-content-between" style={{ borderRadius: '10px', backgroundColor: '#e5e6f7' }}>
          <div>
            <span style={{ padding: '0.2em 0.5em', borderRadius: '50%', backgroundColor: 'rgb(170, 100, 236)', color: 'white', fontSize: '14px' }}>2</span>
            <span className="ms-3">Products or Services</span>
          </div>
          <button className="btn btn-light p-0" onClick={togglePsTogle}>
            <i className={isPsTogleVisible ? 'mdi mdi-minus' : 'mdi mdi-plus'}></i>
          </button>
        </h4>
      </div>
      {isPsTogleVisible && (
            <div className="col-12 mb-3" id="psTogle">
              <div className="row g-4">
                <div className="col-12">
                  <label htmlFor="productName" className="form-label d-flex">
                    Name 
                    <i className="mdi mdi-information mx-2 tooltip-trigger">
                      <span className="tooltip">The primary item or service your company provides to its customers.</span>
                    </i>
                  </label>
                  <input className="form-control form-control-sm" type="text" id="productName" />
                </div>

                <div className="col-12">
                  <label htmlFor="productType" className="form-label d-flex">Type</label>
                  <select className="form-select form-select-sm" aria-label="Default select example" id="productType">
                    <option selected>Product</option>
                    <option value="1">Service</option>
                    <option value="2">Other</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="keyFeatures" className="form-label d-flex">
                    Key Features 
                    <i className="mdi mdi-information mx-2 tooltip-trigger">
                      <span className="tooltip">Describe the key services your company offers to its clients or customers.</span>
                    </i>
                  </label>
                  <textarea className="form-control form-control-sm" placeholder="Explain the features of your Product/Service." rows="4" id="keyFeatures"></textarea>
                </div>
              </div>
            </div>
 )}
            <div className="col-12">
              <button className="btn btn-primary w-100">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
       </div>
       </div>
       <Footer/>
    </>
  );
};
