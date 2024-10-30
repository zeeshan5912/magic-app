import React from 'react'

const AiRss = () => {
  return (
    <>
                <div class="content-wrapper" style={{backgroundColor:'white'}}>
                        <div class="row">
                            <div class="col-12 mb-4">
                                <a href="/" class="btn p-0"><span class="d-flex align-items-center"><i
                                            class="mdi mdi-chevron-left fs-5"></i> Back to dashboard</span></a>
                            </div>
                        </div>

                        <div class="row pb-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                            <div class="col-lg-6">
                                <h3 style={{fontWeight: '900' }}>AI RSS</h3>
                                <p>Generate unique content with RSS Feed.</p>
                            </div>

                            <div class="col-lg-6 aimg">
                                <div class="d-flex justify-content-center justify-content-lg-end">
                                    <a href=" " class="btn bg-white mx-2"
                                        style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>My Documents</a>
                                    <a href="/" class="btn btn-primary"><span class="d-flex align-items-center"><i
                                                class="mdi mdi-plus me-3"></i> New</span></a>
                                </div>
                            </div>
                        </div>


                        <div class="topic">
                            <div class="row pt-5">
                                <div class="col-lg-4">
                                    <form action="" class="row">
                                   
                                    <div class="col-12 d-flex flex-column ">
                                        <div class="d-flex">
                                            <div class="toggle-btn">
                                                <input type="checkbox" id="toggle" class="toggle-input"/>
                                                <label for="toggle" class="toggle-label">
                                                    <span class="toggle-button"></span>
                                                </label>
                                            </div>
                                            <label class="mx-3 fs-6 iyb" for="toggle">Include Your Brand</label>
                                        </div>

                                        <div class="iyb_togler">
                                            <div class="mb-3 mt-3">
                                                <div class="d-flex justify-content-between align-items-center"
                                                    style={{ position: 'relative' }}>
                                                    <label class="form-label" for="">Select Company</label>
                                                    <a href="brand_voice.html" class="btn btn-inverse-success btn-fw p-0"
                                                        style={{ position: 'absolute', top: '-5%', right: '0' }}>
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
                                                <input type="checkbox" id="toggleGBP" class="toggle-input"/>
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
                                                <input type="number" class="form-control"/>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="col-12 mb-3 frss">
                                        <label for="" class="form-label">URL</label>
                                        <div class="input-group d-flex">
                                            <input type="url" class="form-control form-control-sm" style={{ paddingLeft: '1em' }} placeholder="URL" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                            <span class="input-group-text" style={{ right: '0' }} id="basic-addon2"><i class="mdi mdi-repeat me-2"></i> Fetch RSS</span>
                                          </div>
                                        
                                    </div>

                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">Fetched Post Title</label>
                                        <select class="form-select" aria-label="Default select example">
                                            
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
                                                   <input type="number" class="form-control form-control-sm"/>
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
                                        <input style={{ border: 'none', width: '100%' }} type="text" placeholder="Untitled Document..."/>
                                    </div>

                                    <div class="">
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
