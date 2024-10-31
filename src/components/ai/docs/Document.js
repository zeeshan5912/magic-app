import React from 'react'
import Navbar from '../../Navbar'; // Adjust the path as necessary
import Sidebar from '../../Sidebar'; // Adjust the path as necessary
import Footer from '../../Footer';
const Document = () => {
  return (
    <>
        <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar style={{ flex: '0 0 200px' }} />
                    <div class="content-wrapper" style={{ backgroundColor: 'white' }}                    >

                        <div class="row pb-4">
                            <div class="col-lg-6">
                                <h3 class="fw-bolder">My Documents</h3>
                                <ul class="d-flex filterWriterModel">
                                    <li data-filter="*" class="active">All</li>
                                    <li data-filter=".Favorite" >Favorite</li>
                                    <li data-filter=".Youtube">Text</li>
                                    <li data-filter=".Voiceover">Image</li>
                                    <li data-filter=".Social_media">Code</li>
                                </ul>
                            </div>
                            <div class="col-lg-6 aimg">
                                <div class="d-flex justify-content-center justify-content-lg-end">
                                    <a href="/" class="btn bg-white mx-2 d-flex align-items-center"
                                        style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}><i
                                        class="mdi mdi-plus me-1"></i> New Folder</a>
                                    <a href="/" class="btn btn-primary"><span class="d-flex align-items-center"><i
                                                class="mdi mdi-plus me-1"></i> New</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="table-responsive">
                            <table class="myTable mydocument" style={{ width: '100%' }}
                            >
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>TYPE</th>
                                        <th>DATE</th>
                                        <th>COST</th>
                                        <th class="text-end">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex name">
                                                <div class="icn">
                                                    <img src="images/faces/face11.jpg" alt=""/>
                                                </div>
                                                <div class="title fw-bolder d-flex align-items-center">New Image asdasdsadsad asdsadsadsa asdsadsada asdsadsadas dsadsadsa asdsadsada</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="type">AI Image Generator</div>
                                        </td>
                                        <td>
                                            <div class="date">Oct 24 2024<span class="time">, 16:59</span></div>
                                        </td>
                                        <td class="cost">
                                            1
                                        </td>
                                        <td>
                                            <div class="d-flex justify-content-end">
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-star-outline"></i>
                                                </button>
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-close"></i>
                                                </button>
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex name">
                                                <div class="icn">
                                                    <img src="images/faces/face10.jpg" alt=""/>
                                                </div>
                                                <div class="title fw-bolder d-flex align-items-center">New Image asdasdsadsad asdsadsadsa asdsadsada asdsadsadas dsadsadsa asdsadsada</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="type">AI Image Generator</div>
                                        </td>
                                        <td>
                                            <div class="date">Oct 24 2024<span class="time">, 16:59</span></div>
                                        </td>
                                        <td class="cost">
                                            1
                                        </td>
                                        <td>
                                            <div class="d-flex justify-content-end">
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-star-outline"></i>
                                                </button>
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-close"></i>
                                                </button>
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex name">
                                                <div class="icn">
                                                    T
                                                </div>
                                                <div class="title fw-bolder d-flex align-items-center">New Workbook : Exploring the Impact of asdsad on M...</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="type" style={{ backgroundColor: '#a3d6c2' }}>Post Title Generator</div>
                                        </td>
                                        <td>
                                            <div class="date">Oct 24 2024<span class="time">, 16:59</span></div>
                                        </td>
                                        <td class="cost">
                                            1
                                        </td>
                                        <td>
                                            <div class="d-flex justify-content-end">
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-star-outline"></i>
                                                </button>
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-close"></i>
                                                </button>
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex name">
                                                <div class="icn">
                                                    T
                                                </div>
                                                <div class="title fw-bolder d-flex align-items-center">New Image asdasdsadsad asdsadsadsa asdsadsada asdsadsadas dsadsadsa asdsadsada</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="type">AI Image Generator</div>
                                        </td>
                                        <td>
                                            <div class="date">Oct 24 2024<span class="time">, 16:59</span></div>
                                        </td>
                                        <td class="cost">
                                            1
                                        </td>
                                        <td>
                                            <div class="d-flex justify-content-end">
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-star-outline"></i>
                                                </button>
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-close"></i>
                                                </button>
                                                <button class="btn-icon btn-light">
                                                    <i class="mdi mdi-dots-vertical"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    </div>
            </div>
            <Footer />
    </>
  )
}

export default Document
