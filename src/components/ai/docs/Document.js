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
                    <div className="content-wrapper" style={{ backgroundColor: 'white' }}                    >

                        <div className="row pb-4">
                            <div className="col-lg-6">
                                
                                <h3 className="fw-bolder">My Documents</h3>
                                <ul className="d-flex filterWriterModel">
                                    <li data-filter="*" className="active">All</li>
                                    <li data-filter=".Favorite" >Favorite</li>
                                    <li data-filter=".Youtube">Text</li>
                                    <li data-filter=".Voiceover">Image</li>
                                    <li data-filter=".Social_media">Code</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 aimg">
                                <div className="d-flex justify-content-center justify-content-lg-end">
                                    <a href="/" className="btn bg-white mx-2 d-flex align-items-center"
                                        style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}><i
                                        className="mdi mdi-plus me-1"></i> New Folder</a>
                                    <a href="/" className="btn btn-primary"><span className="d-flex align-items-center"><i
                                                className="mdi mdi-plus me-1"></i> New</span></a>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="myTable mydocument" style={{ width: '100%' }}
                            >
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>TYPE</th>
                                        <th>DATE</th>
                                        <th>COST</th>
                                        <th className="text-end">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex name">
                                                <div className="icn">
                                                    <img src="images/faces/face11.jpg" alt=""/>
                                                </div>
                                                <div className="title fw-bolder d-flex align-items-center">New Image asdasdsadsad asdsadsadsa asdsadsada asdsadsadas dsadsadsa asdsadsada</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="type">AI Image Generator</div>
                                        </td>
                                        <td>
                                            <div className="date">Oct 24 2024<span className="time">, 16:59</span></div>
                                        </td>
                                        <td className="cost">
                                            1
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-star-outline"></i>
                                                </button>
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-close"></i>
                                                </button>
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex name">
                                                <div className="icn">
                                                    <img src="images/faces/face10.jpg" alt=""/>
                                                </div>
                                                <div className="title fw-bolder d-flex align-items-center">New Image asdasdsadsad asdsadsadsa asdsadsada asdsadsadas dsadsadsa asdsadsada</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="type">AI Image Generator</div>
                                        </td>
                                        <td>
                                            <div className="date">Oct 24 2024<span className="time">, 16:59</span></div>
                                        </td>
                                        <td className="cost">
                                            1
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-star-outline"></i>
                                                </button>
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-close"></i>
                                                </button>
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex name">
                                                <div className="icn">
                                                    T
                                                </div>
                                                <div className="title fw-bolder d-flex align-items-center">New Workbook : Exploring the Impact of asdsad on M...</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="type" style={{ backgroundColor: '#a3d6c2' }}>Post Title Generator</div>
                                        </td>
                                        <td>
                                            <div className="date">Oct 24 2024<span className="time">, 16:59</span></div>
                                        </td>
                                        <td className="cost">
                                            1
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-star-outline"></i>
                                                </button>
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-close"></i>
                                                </button>
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex name">
                                                <div className="icn">
                                                    T
                                                </div>
                                                <div className="title fw-bolder d-flex align-items-center">New Image asdasdsadsad asdsadsadsa asdsadsada asdsadsadas dsadsadsa asdsadsada</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="type">AI Image Generator</div>
                                        </td>
                                        <td>
                                            <div className="date">Oct 24 2024<span className="time">, 16:59</span></div>
                                        </td>
                                        <td className="cost">
                                            1
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-star-outline"></i>
                                                </button>
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-close"></i>
                                                </button>
                                                <button className="btn-icon btn-light">
                                                    <i className="mdi mdi-dots-vertical"></i>
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
