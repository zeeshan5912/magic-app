import React from 'react'
import Navbar from '../../Navbar'; 
import Sidebar from '../../Sidebar'; 
import Footer from '../../Footer'; 
export const AiChatx = () => {
  return (
    <>
         <div className="dashboard-container">
      <Navbar />
      <div className="d-flex">
       <Sidebar />
        <div className="content-wrapper" style={{ backgroundColor: 'white' }}>
                        <div className="row">
                            <div className="col-12 mb-4">
                                <a href="/" className="btn p-0"><span className="d-flex align-items-center"><i
                                            className="mdi mdi-chevron-left fs-5"></i> Back to dashboard</span></a>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-lg-6">
                                <h3 className="fw-bolder">AI Chat</h3>
                                <p></p>
                            </div>
                            <div className="col-lg-6 aimg">
                                <div className="d-flex justify-content-center justify-content-lg-end">
                                    <a href="/" className="btn bg-white mx-2"
                                        style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>My Documents</a>
                                    <a href="/" className="btn btn-primary"><span className="d-flex align-items-center"><i
                                                className="mdi mdi-plus me-3"></i> New</span></a>
                                </div>
                            </div>
                            <div className="col-12 d-flex align-items-center">
                                <div className="searchAichat">
                                    <input type="search" className="form-control" placeholder="Search"/>
                                    <i className="mdi mdi-magnify"></i>
                                </div>
                                <ul className="d-flex ms-3 filterWriterModel">
                                    <li data-filter="*" className="active">All</li>
                                    <li data-filter=".Favorite" >Favorite</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 AiWriterModels AiChatModels">

                            <div className="col ">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}
                                            >
                                                
                                                    <img className="w-100"  src="images/faces/face12.jpg" alt=""/>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Default AI Chat Bot</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}
                                            >Default</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col ">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    FE
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Finance Expert</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Finance Expert</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Favorite">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    N
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Nutritionist</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Nutritionist</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col ">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    CC
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Career Counselor</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Career Counselor</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col Favorite">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    TMC
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Time Management Consultant</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Time Management Consultant</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col ">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    LT
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Language Tutor</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Language Tutor</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col ">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    CE
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Cybersecurity Expert</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Cybersecurity Expert</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Favorite">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    ID
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Interior Designer</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Interior Designer</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col ">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    PC
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Parenting Coach</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Parenting Coach</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col ">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    FT
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Fitness Trainer</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Fitness Trainer</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Favorite">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    TA
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Travel Advisor</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Personal Travel Advisor</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col ">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    SE
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Sustainability Expert</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Sustainability Expert</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                <span className="size fw-bolder fs-1 mb-4">
                                                    EP
                                                </span>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Event Planner</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Event Planner</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="post_title_generator.html">
                                    <div className="d-flex flex-column  mtCard">
                                        <div className="d-flex justify-content-center cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                
                                                    <img className="w-100"  src="images/faces/face12.jpg" alt=""/>
                                                
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="mb-1">
                                                <h4 className=" mb-0 text-center">Chat Image</h4>
                                            </div>
                                            <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Image Generator</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>

                    </div>
                    </div>
       </div>
       <Footer/>
    </>
  );
};
