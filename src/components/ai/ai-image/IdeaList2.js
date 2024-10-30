import React from 'react'

const IdeaList2 = () => {
    
    return (
        <>
            {/* 2nd list  */}
            <div className="list">
                <div className="ak-section-heading ak-style-1 ak-type-1">
                    <div className="stableDiffusionTabs">
                        <div className="w-100 d-flex justify-content-center mb-2">
                            <ul className="tabs1 px-0 mt-2 row row-cols-2 row-cols-lg-4">
                                <li className="col active-tab1">Text-to-Image</li>
                                <li className="col">Image-to-Image</li>
                                <li className="col">Upscaling</li>
                                <li className="col">Multi-Prompting</li>
                            </ul>
                        </div>

                        <div className="tabs-content1">
                            <div className="lists">
                                <h4 className="fw-bolder">Explain your idea. | <a href="/"
                                    className="text-success">Generate example prompt</a>
                                    <button type="button" className="btn p-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#promptLibrary">
                                        <i className="mdi mdi-file-document-box fs-3"></i>
                                    </button>

                                    <div className="modal fade" id="promptLibrary" tabindex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title"
                                                        id="exampleModalLabel">Modal
                                                        title</h5>
                                                    <button type="button" className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    ...
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button"
                                                        className="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </h4>
                                <form action="">
                                    <div className="w-100" style={{ position: 'relative' }}                                                                >
                                        <textarea className="w-100 form-control"
                                            style={{ borderRadius: '25px', height: '3.4em' }}
                                            name="" id=""
                                            placeholder="Enter here..."></textarea>
                                        <button className="btn btn-primary "
                                            style={{ borderRadius: '25px', padding: '0.8em 1.5em', position: 'absolute', top: '10%', right: '1%' }}>Generate</button>
                                    </div>

                                    <div className="advanceSetting pt-4">
                                        <div className="settingTogleBtn">
                                            <button
                                                className="btn p-0 d-flex align-items-center">
                                                <div className="mx-2">Advanced Settings</div>
                                                <span className="bg-white fs-3"
                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                                            </button>
                                        </div>
                                        <div className="settingContainer">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <label className="form-label">Image
                                                        resolution</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Art
                                                        Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Lightning
                                                        Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                                <div className="col-lg-2">
                                                    <label className="form-label">Mood</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Number of
                                                        Images</label>
                                                    <select id="inputState"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Quality of
                                                        Images</label>
                                                    <select id="inputState"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="lists">
                                <h4 className="fw-bolder">Explain your idea. | <a href="/"
                                    className="text-success">Generate example prompt</a>
                                    <button type="button" className="btn p-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#promptLibrary">
                                        <i className="mdi mdi-file-document-box fs-3"></i>
                                    </button>

                                    <div className="modal fade" id="promptLibrary" tabindex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title"
                                                        id="exampleModalLabel">Modal
                                                        title</h5>
                                                    <button type="button" className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    ...
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button"
                                                        className="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </h4>
                                <form action="">
                                    <div className="w-100" style={{ position: 'relative' }}
                                    >
                                        <textarea className="w-100 form-control"
                                            style={{ borderRadius: '25px', height: '3.4em' }}
                                            name="" id=""
                                            placeholder="Enter here..."></textarea>
                                    </div>
                                    <div className="w-100 my-3">
                                        <h4 className="fw-bolder">Upload Image</h4>
                                    </div>
                                    <div className="w-100">
                                        <div id="ImgUpload"></div>
                                    </div>
                                    <div className="w-100 my-3">
                                        <button className="btn btn-primary w-100"
                                            style={{ borderRadius: '25px' }}>Generate</button>
                                    </div>

                                    <div className="advanceSetting pt-4">
                                        <div className="settingTogleBtn">
                                            <button
                                                className="btn p-0 d-flex align-items-center">
                                                <div className="mx-2">Advanced Settings</div>
                                                <span className="bg-white fs-3"
                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                                            </button>
                                        </div>
                                        <div className="settingContainer">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <label className="form-label">Image
                                                        resolution</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Art
                                                        Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Lightning
                                                        Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                                <div className="col-lg-2">
                                                    <label className="form-label">Mood</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Number of
                                                        Images</label>
                                                    <select id="inputState"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Quality of
                                                        Images</label>
                                                    <select id="inputState"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="lists">

                                <form action="">

                                    <div className="w-100 my-3">
                                        <h4 className="fw-bolder">Upload Image</h4>
                                    </div>
                                    <div className="w-100">
                                        <div id="OnlyImgUpload"></div>
                                    </div>
                                    <div className="w-100 my-3">
                                        <button className="btn btn-primary w-100"
                                            style={{ borderRadius: '25px' }}>Generate</button>
                                    </div>

                                    <div className="advanceSetting pt-4">
                                        <div className="settingTogleBtn">
                                            <button
                                                className="btn p-0 d-flex align-items-center">
                                                <div className="mx-2">Advanced Settings</div>
                                                <span className="bg-white fs-3"
                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                                            </button>
                                        </div>
                                        <div className="settingContainer">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <label className="form-label">Image
                                                        resolution</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Art
                                                        Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Lightning
                                                        Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                                <div className="col-lg-2">
                                                    <label className="form-label">Mood</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Number of
                                                        Images</label>
                                                    <select id="inputState"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Quality of
                                                        Images</label>
                                                    <select id="inputState"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
</div>
                                        </div>
                                </form>

                            </div>
                            <div className="lists">
                                <h4 className="fw-bolder">Explain your idea. | <a href="/"
                                    className="text-success">Generate example prompt</a>
                                    <button type="button" className="btn p-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#promptLibrary">
                                        <i className="mdi mdi-file-document-box fs-3"></i>
                                    </button>

                                    <div className="modal fade" id="promptLibrary" tabindex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title"
                                                        id="exampleModalLabel">Modal
                                                        title</h5>
                                                    <button type="button" className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    ...
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button"
                                                        className="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </h4>
                                <form >
                                    <div className="w-100 textarea-container" style={{ position: 'relative' }}
                                    >
                                        <textarea className="w-100 form-control"
                                            style={{ borderRadius: '25px', height: '3.4em' }}

                                            name="" id=""
                                            placeholder="Enter here..."></textarea>
                                    </div>
                                    <div className="w-100 my-3">
                                        <button id="addMoreBtn" className="btn d-flex align-items-center bg-white" style={{ borderRadius: '25px', padding: '0.5em 1em' }}
                                        >
                                            <i className="mdi mdi-plus"></i> <span className="fw-bolder">Add More</span>
                                        </button>
                                    </div>

                                    <div className="w-100 my-3">
                                        <button type="submit" className="btn btn-primary w-100"
                                            style={{ borderRadius: '25px', padding: '0.8em 1.5em' }}
                                        >Generate</button>
                                    </div>

                                    <div className="advanceSetting pt-4">
                                        <div className="settingTogleBtn">
                                            <button
                                                className="btn p-0 d-flex align-items-center">
                                                <div className="mx-2">Advanced Settings</div>
                                                <span className="bg-white fs-3"
                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}
                                                >+</span>
                                            </button>
                                        </div>
                                        <div className="settingContainer">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <label className="form-label">Image
                                                        resolution</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Art
                                                        Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Lightning
                                                        Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                                <div className="col-lg-2">
                                                    <label className="form-label">Mood</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Number of
                                                        Images</label>
                                                    <select id="inputState"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Quality of
                                                        Images</label>
                                                    <select id="inputState"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IdeaList2
