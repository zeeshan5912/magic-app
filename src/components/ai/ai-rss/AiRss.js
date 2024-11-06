import React from 'react'

const AiRss = () => {
  return (
    <>
                <div className="content-wrapper" style={{backgroundColor:'white'}}>
                        <div className="row">
                            <div className="col-12 mb-4">
                                <a href="/" className="btn p-0"><span className="d-flex align-items-center"><i
                                            className="mdi mdi-chevron-left fs-5"></i> Back to dashboard</span></a>
                            </div>
                        </div>

                        <div className="row pb-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                            <div className="col-lg-6">
                                <h3 style={{fontWeight: '900' }}>AI RSS</h3>
                                <p>Generate unique content with RSS Feed.</p>
                            </div>

                            <div className="col-lg-6 aimg">
                                <div className="d-flex justify-content-center justify-content-lg-end">
                                    <a href=" " className="btn bg-white mx-2"
                                        style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>My Documents</a>
                                    <a href="/" className="btn btn-primary"><span className="d-flex align-items-center"><i
                                                className="mdi mdi-plus me-3"></i> New</span></a>
                                </div>
                            </div>
                        </div>


                        <div className="topic">
                            <div className="row pt-5">
                                <div className="col-lg-4">
                                    <form action="" className="row">
                                   
                                    <div className="col-12 d-flex flex-column ">
                                        <div className="d-flex">
                                            <div className="toggle-btn">
                                                <input type="checkbox" id="toggle" className="toggle-input"/>
                                                <label for="toggle" className="toggle-label">
                                                    <span className="toggle-button"></span>
                                                </label>
                                            </div>
                                            <label className="mx-3 fs-6 iyb" for="toggle">Include Your Brand</label>
                                        </div>

                                        <div className="iyb_togler">
                                            <div className="mb-3 mt-3">
                                                <div className="d-flex justify-content-between align-items-center"
                                                    style={{ position: 'relative' }}>
                                                    <label className="form-label" for="">Select Company</label>
                                                    <a href="brand_voice.html" className="btn btn-inverse-success btn-fw p-0"
                                                        style={{ position: 'absolute', top: '-5%', right: '0' }}>
                                                        <i className="mdi mdi-plus"></i>
                                                    </a>
                                                </div>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Select Company</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label className="form-label" for="">Select Product/Service</label>
                                                </div>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Select Product</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-12 d-flex flex-column mb-3">

                                        <div className="mt-3 d-flex">
                                            <div className="toggle-btn">
                                                <input type="checkbox" id="toggleGBP" className="toggle-input"/>
                                                <label for="toggleGBP" className="toggle-label">
                                                    <span className="toggle-button"></span>
                                                </label>
                                            </div>
                                            <label className="mx-3 fs-6 iyb" for="toggleGBP">Generate Bulk Posts</label>
                                        </div>

                                        <div className="gbp_togler">
                                            <div className="mb-3 mt-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label className="form-label" for="">Number of Results</label>
                                                </div>
                                                <input type="number" className="form-control"/>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-12 mb-3 frss">
                                        <label for="" className="form-label">URL</label>
                                        <div className="input-group d-flex">
                                            <input type="url" className="form-control form-control-sm" style={{ paddingLeft: '1em' }} placeholder="URL" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                            <span className="input-group-text" style={{ right: '0' }} id="basic-addon2"><i className="mdi mdi-repeat me-2"></i> Fetch RSS</span>
                                          </div>
                                        
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label for="" className="form-label">Fetched Post Title</label>
                                        <select className="form-select" aria-label="Default select example">
                                            
                                           </select>
                                    </div>
                                    
                                        <div className="col-12 mb-3">
                                            <div className="row mb-3">
                                                <div className="col-lg-6">
                                                   <label for="" className="form-label">Language</label>
                                                   <select className="form-select" aria-label="Default select example">
                                                    <option selected>English (USA)</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                   </select>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label for="" className="form-label">Maximum Length</label>
                                                   <input type="number" className="form-control form-control-sm"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                   <label for="" className="form-label">Creativity</label>
                                                   <select className="form-select" aria-label="Default select example">
                                                    <option selected>Good</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                   </select>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label for="" className="form-label">Tone of Voice</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Professional</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                       </select>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 mb-3">
                                            <button type="submit"
                                                className="btn btn-primary w-100 text-center mt-3">Generate
                                                Keywords</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-8 px-1 px-lg-5">
                                    <form action="">
                                    <div className="HeadLeft">
                                        <div>
                                            <button className="btn p-1 mx-1">
                                                <i className="mdi mdi-undo-variant"></i>
                                            </button>
                                            <button className="btn p-1 mx-1">
                                                <i className="mdi mdi-redo-variant"></i>
                                            </button>
                                            <button className="btn p-1 mx-1">
                                                <i className="mdi mdi-content-copy"></i>
                                            </button>
                                            <button className="btn p-1 mx-1">
                                                <i className="mdi mdi-download"></i>
                                            </button>
                                            <button className="btn p-1 mx-1">
                                                <i className="mdi mdi-minus-circle-outline text-danger"></i>
                                            </button>
                                        </div>
                                        
                                    </div>

                                    <div className="my-3 px-3">
                                        <input style={{ border: 'none', width: '100%' }} type="text" placeholder="Untitled Document..."/>
                                    </div>

                                    <div className="">
                                        <textarea  id="typeContent"></textarea>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>





                    </div>
    </>
  )
}

export default AiRss
