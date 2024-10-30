import React from 'react';
// import ImgSuper from '../../../Assets/faces/face10.jpg';
// import ImgSuper2 from '../../../Assets/faces/face13.jpg';
// import ImgSuper3 from '../../../Assets/demo/dark-sidebar.jpg';
// import { ChevronLeftIcon, PlusIcon } from '@heroicons/react/24/outline'; // Assuming you're using Heroicons

const AiYoutube = () => {
    return (
        <div className="container-scroller">
            <div>
                {/* Main content */}
                <div className="container-fluid page-body-wrapper">



                    <div className="main-panel main-panelcal">

                        <div className="content-wrapper" style={{ backgroundColor: 'white' }}>

                           
                            <div className="row pb-4">
                                <div className="col-lg-6">
                                    <h3 className="fw-bolder">AI Youtube    </h3>
                                    <p>Generate high quality code in seconds.</p>
                                </div>
                                <div className="col-lg-6 aimg">
                                    <div className="d-flex justify-content-center justify-content-lg-end">
                                        <a href="/" className="btn bg-white mx-2"
                                            style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>My Documents</a>
                                        <a href="/" className="btn btn-primary"><span className="d-flex align-items-center"><i
                                            className="mdi mdi-plus me-3"></i> New</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="topic">
                            <div class="row pt-5">
                                <div class="col-lg-4">
                                    <form action="" class="row">
                                   

                                    <div class="col-12 d-flex flex-column">
                                        <div class="d-flex">
                                            <div class="toggle-btn">
                                                <input type="checkbox" id="toggle" class="toggle-input" />
                                                <label for="toggle" class="toggle-label">
                                                    <span class="toggle-button"></span>
                                                </label>
                                            </div>
                                            <label class="mx-3 fs-6 iyb" for="toggle">Include Your Brand</label>
                                        </div>

                                        <div class="iyb_togler">
                                            <div class="mb-3 mt-3">
                                                <div class="d-flex justify-content-between align-items-center"
                                                    style={{position: 'relative'}}>
                                                    <label class="form-label" for="">Select Company</label>
                                                    <a href="brand_voice.html" class="btn btn-inverse-success btn-fw p-0"
                                                        style={{position: 'absolute' , top: '-5%' , right: '0'}}>
                                                        <i class="mdi mdi-plus"></i>
                                                    </a>
                                                </div>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select Company</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <label class="form-label" for="">Select Product/Service</label>
                                                </div>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select Product</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 d-flex flex-column mb-3">

                                        <div class="mt-3 d-flex">
                                            <div class="toggle-btn">
                                                <input type="checkbox" id="toggleGBP" class="toggle-input" />
                                                <label for="toggleGBP" class="toggle-label">
                                                    <span class="toggle-button"></span>
                                                </label>
                                            </div>
                                            <label class="mx-3 fs-6 iyb" for="toggleGBP">Generate Bulk Posts</label>
                                        </div>

                                        <div class="gbp_togler">
                                            <div class="mb-3 mt-3">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <label class="form-label" for="">Number of Results</label>
                                                </div>
                                                <input type="number" class="form-control" />
                                            </div>
                                        </div>

                                    </div>


                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">YouTube Video URL</label>
                                        <input class="form-control form-control-sm" type="url" placeholder="YouTube Video URL" />
                                    </div>

                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">Action</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option value="Prepare a Blog Post">Prepare a Blog Post</option>
                                            <option value="Explain the Main Idea">Explain the Main Idea</option>
                                           </select>
                                    </div>
                                    
                                        <div class="col-12 mb-3">
                                            <div class="row mb-3">
                                                <div class="col-lg-6">
                                                   <label for="" class="form-label">Language</label>
                                                   <select class="form-select" aria-label="Default select example">
                                                    <option selected>English (USA)</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                   </select>
                                                </div>
                                                <div class="col-lg-6">
                                                    <label for="" class="form-label">Maximum Length</label>
                                                   <input type="number" class="form-control form-control-sm" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                   <label for="" class="form-label">Creativity</label>
                                                   <select class="form-select" aria-label="Default select example">
                                                    <option selected>Good</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                   </select>
                                                </div>
                                                <div class="col-lg-6">
                                                    <label for="" class="form-label">Tone of Voice</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Professional</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                       </select>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-12 mb-3">
                                            <button type="submit"
                                                class="btn btn-primary w-100 text-center mt-3">Generate
                                                Keywords</button>
                                        </div>
                                    </form>
                                </div>

                                <div class="col-lg-8 px-1 px-lg-5">
                                    <form action="">
                                    <div class="HeadLeft">
                                        <div>
                                            <button class="btn p-1 mx-1">
                                                <i class="mdi mdi-undo-variant"></i>
                                            </button>
                                            <button class="btn p-1 mx-1">
                                                <i class="mdi mdi-redo-variant"></i>
                                            </button>
                                            <button class="btn p-1 mx-1">
                                                <i class="mdi mdi-content-copy"></i>
                                            </button>
                                            <button class="btn p-1 mx-1">
                                                <i class="mdi mdi-download"></i>
                                            </button>
                                            <button class="btn p-1 mx-1">
                                                <i class="mdi mdi-minus-circle-outline text-danger"></i>
                                            </button>
                                        </div>
                                        
                                    </div>

                                    <div class="my-3 px-3">
                                        <input style={{border: 'none' , width: '100%'}} type="text" placeholder="Untitled Document..." />
                                    </div>

                                    <div class="">
                                        <textarea  id="typeContent"></textarea>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            </div>





                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AiYoutube;
