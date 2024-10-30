import React, { useState } from 'react';
import Navbar from '../../Navbar'; // Adjust the path as necessary
import Sidebar from '../../Sidebar'; // Adjust the path as necessary
import Footer from '../../Footer'; // Adjust the path as necessary
const AiWriter = () => {
  // State for form data and toggle options
  const [topic, setTopic] = useState('');
  const [numKeywords, setNumKeywords] = useState(10);
  const [language, setLanguage] = useState('English (USA)');
  const [blogLength, setBlogLength] = useState('800');
  const [creativity, setCreativity] = useState('Good');
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleKeywordToggle = (keyword) => {
    setSelectedKeywords((prevSelected) =>
      prevSelected.includes(keyword)
        ? prevSelected.filter((item) => item !== keyword)
        : [...prevSelected, keyword]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', { topic, numKeywords, language, blogLength, creativity });
  };

  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions((prevState) => !prevState);
  };

  return (
    <>
    <div className="dashboard-container">
      <Navbar />
      <div className="d-flex">
       <Sidebar />

<div className="content-wrapper " style={{ backgroundColor: 'white', marginTop:'62px' }}>
          {/* <div className="row">
            <div className="col-12 mb-4">
              <a href="/" className="btn p-0">
                <span className="d-flex align-items-center">
                  <i className="mdi mdi-chevron-left fs-5"></i> Back to dashboard
                </span>
              </a>
            </div>
          </div> */}

          <div className="row pb-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
            <div className="col-6">
              <h3 style={{ fontWeight: 900 }}>AI Article Generator</h3>
              <p>Instantly create unique articles on any topic. Boost engagement, improve SEO, and save time.</p>
            </div>

            <div className="col-6 aimg">
              <div className="d-flex justify-content-end">
                <a href="/#" className="btn bg-white mx-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                  My Documents
                </a>
                <a href="/#" className="btn btn-primary">
                  <span className="d-flex align-items-center">
                    <i className="mdi mdi-plus me-3"></i> New
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="topic">
            <div className="row">
              <div className="col-4">
                <form onSubmit={handleSubmit} className="row mt-4">
                  <div className="col-12 mb-3">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <textarea
                      id="topic"
                      name="topic"
                      className="form-control"
                      rows="4"
                      placeholder="What is this article about?"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="numKeywords" className="form-label">Number of keywords</label>
                    <input
                      type="number"
                      className="form-control"
                      id="numKeywords"
                      value={numKeywords}
                      onChange={(e) => setNumKeywords(e.target.value)}
                      placeholder="Number of Keywords"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <div className="advanceOptions">
                      <div className="btnTogle">
                        <button
                          type="button"
                          className="btn d-flex align-items-center"
                          onClick={toggleAdvancedOptions}
                        >
                          <div style={{ fontWeight: 900 }}>Advanced Options</div>
                          <span className="mx-1">
                            <i className={`mdi mdi-chevron-${showAdvancedOptions ? 'up' : 'down'} fs-5`}></i>
                          </span>
                        </button>
                      </div>
                      {showAdvancedOptions && (
                        <div className="toggleOptions">
                          <div className="mb-3">
                            <label htmlFor="language" className="form-label">Language</label>
                            <select
                              id="language"
                              className="form-select"
                              value={language}
                              onChange={(e) => setLanguage(e.target.value)}
                            >
                              <option value="English (USA)">English (USA)</option>
                              <option value="Turkish">Turkish</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="blogLength" className="form-label">Blog Post Length</label>
                            <input
                              type="text"
                              className="form-control"
                              id="blogLength"
                              placeholder="800"
                              value={blogLength}
                              onChange={(e) => setBlogLength(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="creativity" className="form-label">Creativity</label>
                            <select
                              id="creativity"
                              className="form-select"
                              value={creativity}
                              onChange={(e) => setCreativity(e.target.value)}
                            >
                              <option value="Good">Good</option>
                              <option value="One">One</option>
                              <option value="Two">Two</option>
                              <option value="Three">Three</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <button type="submit" className="btn btn-primary w-100 text-center mt-3">
                      Generate Keywords
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-8 px-1 px-lg-5">
                <div className="addKeywordContainer">
                  <div>
                    <span
                      className="px-2 py-1"
                      style={{ borderRadius: '10px', backgroundColor: '#bab9f1', fontWeight: 900 }}
                    >
                      {selectedKeywords.length}
                    </span>
                    <span className="fs-5 mx-3" style={{ fontWeight: 900 }}>
                      Selected keywords
                    </span>
                  </div>
                  <div>
                    <button
                      className="addkeywordBtn btn d-flex align-items-center fs-5 px-0"
                      onClick={() => setSelectedKeywords([...selectedKeywords, 'New Keyword'])}
                    >
                      <span style={{ fontWeight: 900, color: '#3f3e91' }}>Add</span>
                      <i className="mdi mdi-plus mx-1 fs-5 text-primary"></i>
                    </button>
                  </div>
                </div>

                <form id="tagsForm" onSubmit={handleSubmit} method="POST">
                  <button type="button" className="select-btn">
                    Select All <i className="fas fa-chevron-right"></i>
                  </button>

                  <div className="tags-container">
                    {['chamma chamma', 'fraud saiyaan', 'elli avrram', 'arshad', 'neha kakkar', 'tanishk', 'ikka', 'romy', 'party', 'song'].map((tag) => (
                      <div
                        key={tag}
                        className={`tag ${selectedKeywords.includes(tag) ? 'selected' : ''}`}
                        data-value={tag}
                        onClick={() => handleKeywordToggle(tag)}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  <input type="hidden" id="selectedTags" name="selectedTags" value={selectedKeywords.join(',')} />

                  <button
                    type="submit"
                    className="select-btn w-100"
                    style={{ backgroundColor: '#d5f7e8', marginLeft: '20px' }}
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        <Footer/>
    </>
          );
        };
        
        export default AiWriter;
        