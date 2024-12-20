import React from 'react';
import ImgSuper from '../../../Assets/faces/face10.jpg';
import ImgSuper2 from '../../../Assets/faces/face13.jpg';
import ImgSuper3 from '../../../Assets/demo/dark-sidebar.jpg';
import { ChevronLeftIcon, PlusIcon } from '@heroicons/react/24/outline'; // Assuming you're using Heroicons


const AiChatImage = () => {
    return (
        <div>
            {/* Main content */}
            <div className="main-panel main-panelcal">
                <div className="content-wrapper" style={{ backgroundColor: 'white' }}>
                    <div className="row">
                        <div className="col-12 mb-4">
                            <a href="/" className="btn ">
                                <span className="d-flex align-items-center">
                                    <ChevronLeftIcon className="fs-5" /> Back to dashboard
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-lg-6">
                            <h3>Chat Image</h3>
                            <p>
                                Seamlessly generate and craft a diverse array of images without ever leaving your chat environment.
                            </p>
                        </div>
                        <div className="col-lg-6 aimg">
                            <div className="d-flex justify-content-center justify-content-lg-end">
                                <a href="/" className="btn bg-white mx-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                                    My Documents
                                </a>
                                <a href="/" className="btn btn-primary">
                                    <span className="d-flex align-items-center">
                                        <PlusIcon className="me-3" /> New
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Chat Sidebar */}
                    <div className="chatContainer">
                        <div className="chatSideBar">
                            <div className="chatSideBarHeader">
                                <div className="inputSearch">
                                    <input className="form-control" type="search" placeholder="Search" />
                                    <i className="mdi mdi-magnify"></i>
                                </div>
                            </div>
                            {/* Chat messages */}
                            <div className="msgSection">
                                <ul className="chatNav">
                                    {/* Repeated list items */}
                                    <li className="navItem">
                                        <a className="navLink" href="/">
                                            <div className="d-flex">
                                                <div className="px-3">
                                                    <svg strokeWidth="1.5" className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M8 9h8"></path>
                                                        <path d="M8 13h6"></path>
                                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                    </svg>
                                                </div>
                                                <div className="px-1 mt-1">
                                                    <h6 className="fs-6 mb-0">Chat Image Chat</h6>
                                                    <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                        <small className="text-muted">1 week ago</small>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="DelOrView">
                                                <button className="viewBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                        <path d="M13.5 6.5l4 4"></path>
                                                    </svg>
                                                </button>
                                                <button className="delBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6l-12 12"></path>
                                                        <path d="M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="navItem">
                                        <a className="navLink" href="/">
                                            <div className="d-flex">
                                                <div className="px-3">
                                                    <svg strokeWidth="1.5" className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M8 9h8"></path>
                                                        <path d="M8 13h6"></path>
                                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                    </svg>
                                                </div>
                                                <div className="px-1 mt-1">
                                                    <h6 className="fs-6 mb-0">Chat Image Chat</h6>
                                                    <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                        <small className="text-muted">1 week ago</small>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="DelOrView">
                                                <button className="viewBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                        <path d="M13.5 6.5l4 4"></path>
                                                    </svg>
                                                </button>
                                                <button className="delBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6l-12 12"></path>
                                                        <path d="M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="navItem">
                                        <a className="navLink" href="/">
                                            <div className="d-flex">
                                                <div className="px-3">
                                                    <svg strokeWidth="1.5" className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M8 9h8"></path>
                                                        <path d="M8 13h6"></path>
                                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                    </svg>
                                                </div>
                                                <div className="px-1 mt-1">
                                                    <h6 className="fs-6 mb-0">Chat Image Chat</h6>
                                                    <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                        <small className="text-muted">1 week ago</small>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="DelOrView">
                                                <button className="viewBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                        <path d="M13.5 6.5l4 4"></path>
                                                    </svg>
                                                </button>
                                                <button className="delBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6l-12 12"></path>
                                                        <path d="M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="navItem">
                                        <a className="navLink" href="/">
                                            <div className="d-flex">
                                                <div className="px-3">
                                                    <svg strokeWidth="1.5" className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M8 9h8"></path>
                                                        <path d="M8 13h6"></path>
                                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                    </svg>
                                                </div>
                                                <div className="px-1 mt-1">
                                                    <h6 className="fs-6 mb-0">Chat Image Chat</h6>
                                                    <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                        <small className="text-muted">1 week ago</small>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="DelOrView">
                                                <button className="viewBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                        <path d="M13.5 6.5l4 4"></path>
                                                    </svg>
                                                </button>
                                                <button className="delBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6l-12 12"></path>
                                                        <path d="M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="navItem">
                                        <a className="navLink" href="/">
                                            <div className="d-flex">
                                                <div className="px-3">
                                                    <svg strokeWidth="1.5" className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M8 9h8"></path>
                                                        <path d="M8 13h6"></path>
                                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                    </svg>
                                                </div>
                                                <div className="px-1 mt-1">
                                                    <h6 className="fs-6 mb-0">Chat Image Chat</h6>
                                                    <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                        <small className="text-muted">1 week ago</small>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="DelOrView">
                                                <button className="viewBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                        <path d="M13.5 6.5l4 4"></path>
                                                    </svg>
                                                </button>
                                                <button className="delBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6l-12 12"></path>
                                                        <path d="M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="navItem">
                                        <a className="navLink" href="/">
                                            <div className="d-flex">
                                                <div className="px-3">
                                                    <svg strokeWidth="1.5" className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M8 9h8"></path>
                                                        <path d="M8 13h6"></path>
                                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                    </svg>
                                                </div>
                                                <div className="px-1 mt-1">
                                                    <h6 className="fs-6 mb-0">Chat Image Chat</h6>
                                                    <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                        <small className="text-muted">1 week ago</small>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="DelOrView">
                                                <button className="viewBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                        <path d="M13.5 6.5l4 4"></path>
                                                    </svg>
                                                </button>
                                                <button className="delBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6l-12 12"></path>
                                                        <path d="M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="navItem">
                                        <a className="navLink" href="/">
                                            <div className="d-flex">
                                                <div className="px-3">
                                                    <svg strokeWidth="1.5" className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M8 9h8"></path>
                                                        <path d="M8 13h6"></path>
                                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                    </svg>
                                                </div>
                                                <div className="px-1 mt-1">
                                                    <h6 className="fs-6 mb-0">Chat Image Chat</h6>
                                                    <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                        <small className="text-muted">1 week ago</small>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="DelOrView">
                                                <button className="viewBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                        <path d="M13.5 6.5l4 4"></path>
                                                    </svg>
                                                </button>
                                                <button className="delBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6l-12 12"></path>
                                                        <path d="M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="navItem">
                                        <a className="navLink" href="/">
                                            <div className="d-flex">
                                                <div className="px-3">
                                                    <svg strokeWidth="1.5" className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M8 9h8"></path>
                                                        <path d="M8 13h6"></path>
                                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                    </svg>
                                                </div>
                                                <div className="px-1 mt-1">
                                                    <h6 className="fs-6 mb-0">Chat Image Chat</h6>
                                                    <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                        <small className="text-muted">1 week ago</small>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className="DelOrView">
                                                <button className="viewBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                        <path d="M13.5 6.5l4 4"></path>
                                                    </svg>
                                                </button>
                                                <button className="delBtn mx-1">
                                                    <svg style={{ width: '1rem' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                        strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 6l-12 12"></path>
                                                        <path d="M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                            <div className="w-100 d-none d-lg-flex justify-content-center px-3"
                                style={{ marginTop: '1em' }}>
                                <button
                                    className="btn btn-primary w-100 d-flex justify-content-center align-items-center uploadBtn"
                                    style={{ borderRadius: '20px' }}>
                                    <i className="mdi mdi-plus mx-1"></i>
                                    Upload Document
                                </button>
                                <form action="">
                                    <input id="uploadInput" type="file" name="upload" style={{ display: 'none' }}
                                        required />
                                </form>
                            </div>
                        </div>

                        {/* Chat Box */}
                        <div className="chatBox">
                            <div className="chatBoxHeader">
                                <div className="d-flex">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={ImgSuper} className="img-fluid" alt="..." style={{ width: '50px', borderRadius: '50%' }} />
                                    </div>
                                    <div className="d-none d-lg-flex flex-column ms-2 mt-2">
                                        <h5 className="card-title mb-1" style={{ fontSize: '16px' }}>Card title</h5>
                                        <p className="w-100 mb-0" style={{ fontSize: '12px' }}>This is a description</p>
                                    </div>
                                </div>

                                <div
                                    className="d-flex w-50 align-items-center justify-content-between justify-content-lg-end">
                                    <div className="d-none d-lg-flex align-items-center">
                                        <div className="toggle-btn">
                                            <input type="checkbox" id="toggle" className="toggle-input" />
                                            <label for="toggle" className="toggle-label">
                                                <span className="toggle-button"></span>
                                            </label>
                                        </div>
                                        <label className="mx-3 iyb mb-0" style={{ fontSize: '12px' }} for="toggle">Real-Time Data</label>
                                    </div>
                                    <div className="tooltip-container">
                                        <svg stroke-width="1.5" className="size-6"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path
                                                d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h3m9 -9v-5a2 2 0 0 0 -2 -2h-2">
                                            </path>
                                            <path
                                                d="M13 17v-1a1 1 0 0 1 1 -1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1 -1 1h-1m-3 0h-1a1 1 0 0 1 -1 -1v-1">
                                            </path>
                                            <path
                                                d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z">
                                            </path>
                                        </svg>
                                        <span className="tooltip-text">
                                            <button className="tooltip-btn">Pdf</button>
                                            <button className="tooltip-btn"
                                                style={{ borderLeft: '1px solid white', borderRight: '1px solid white' }}>Word</button>
                                            <button className="tooltip-btn">Text</button>
                                        </span>

                                    </div>
                                    <button className="d-flex d-lg-none btn ">
                                        <svg stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 12a9 9 0 1 0 -9 9"></path>
                                            <path d="M3.6 9h16.8"></path>
                                            <path d="M3.6 15h8.4"></path>
                                            <path d="M11.578 3a17 17 0 0 0 0 18"></path>
                                            <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9"></path>
                                            <path d="M18 14v7m-3 -3l3 3l3 -3"></path>
                                        </svg>
                                    </button>
                                    <button className="d-flex d-lg-none btn ">
                                        <i className="mdi fs-4 mdi-delete"></i>
                                    </button>
                                    <button className="d-flex d-lg-none btn  uploadBtn">
                                        <i className="mdi fs-4 mdi-plus"></i>
                                    </button>
                                    <button id="toggleSidebar" className="d-flex d-lg-none btn ">
                                        <i className="mdi fs-3 mdi-dots-horizontal"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="d-flex flex-column h-100 w-100">
                                <div className="h-100 py-3 msgSection">

                                    <div className="receiverMsg">
                                        <div className="userProfile">
                                            <img src={ImgSuper} alt="" />
                                        </div>
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="sendMsg">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex">
                                                <div className="Msg">
                                                    ssdddddddddddddddddddddddd
                                                    <button className="btn  bg-white p-1 copyClipboard">
                                                        <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                                    </button>
                                                </div>
                                                <div className="userProfile">
                                                    <img src={ImgSuper2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="receiverMsg">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex">
                                                <div className="userProfile">
                                                    <img src={ImgSuper} alt="" />
                                                </div>
                                                <div className="Msg">
                                                    ssdddddddddddddddddddddddd
                                                    <button className="btn  bg-white p-1 copyClipboard">
                                                        <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <a href="/" className="ms-auto me-2 mt-3">
                                                <img src={ImgSuper3} alt="" style={{ width: '250px', height: '250px', borderRadius: '20px' }} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="sendMsg">
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                        <div className="userProfile">
                                            <img src={ImgSuper2} alt="" />
                                        </div>
                                    </div>

                                    <div className="receiverMsg">
                                        <div className="userProfile">
                                            <img src={ImgSuper} alt="" />
                                        </div>
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white  copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="sendMsg">
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                        <div className="userProfile">
                                            <img src={ImgSuper2} alt="" />
                                        </div>
                                    </div>

                                    <div className="receiverMsg">
                                        <div className="d-flex flex-column">

                                            <a href="/" className="ms-auto me-2 mt-3">
                                                <img src={ImgSuper3} alt="" style={{ width: '250px', height: '250px', borderRadius: '20px' }} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="sendMsg">
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                        <div className="userProfile">
                                            <img src={ImgSuper2} alt="" />
                                        </div>
                                    </div>

                                    <div className="receiverMsg">
                                        <div className="userProfile">
                                            <img src={ImgSuper} alt="" />
                                        </div>
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="sendMsg">
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                        <div className="userProfile">
                                            <img src={ImgSuper2} alt="" />
                                        </div>
                                    </div>

                                    <div className="receiverMsg">
                                        <div className="userProfile">
                                            <img src={ImgSuper} alt="" />
                                        </div>
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="sendMsg">
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                        <div className="userProfile">
                                            <img src={ImgSuper2} alt="" />
                                        </div>
                                    </div>

                                    <div className="receiverMsg">
                                        <div className="userProfile">
                                            <img src={ImgSuper} alt="" />
                                        </div>
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="sendMsg">
                                        <div className="Msg">
                                            ssdddddddddddddddddddddddd
                                            <button className="btn  bg-white p-1 copyClipboard">
                                                <i className="mdi mdi-checkbox-multiple-blank-outline"></i>
                                            </button>
                                        </div>
                                        <div className="userProfile">
                                            <img src={ImgSuper2} alt="" />
                                        </div>
                                    </div>






                                </div>
                                <div className="msgSendBox">
                                    <form className="d-flex px-2 px-lg-4 pb-1 ">
                                        <div className="msgInput">
                                            <textarea name="" placeholder="Type a message" id=""></textarea>
                                            <button className="btn  mobileTog">
                                                <svg style={{ width: '1rem', height: '1rem' }}
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M12 5l0 14"></path>
                                                    <path d="M5 12l14 0"></path>
                                                </svg>
                                            </button>
                                            <div className="promptContainer">
                                                <button data-bs-toggle="modal" data-bs-target="#promptLibrary"
                                                    className="btn  d-flex align-items-center my-1 my-lg-0 prompt" onclick="event.preventDefault()">
                                                    <svg stroke-width="1.5" className="size-6"
                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" stroke="currentColor"
                                                        fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path
                                                            d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                                                        </path>
                                                        <path d="M7 8h10"></path>
                                                        <path d="M7 12h10"></path>
                                                        <path d="M7 16h10"></path>
                                                    </svg>
                                                    <span className="mx-2 d-flex d-lg-none">Browse prompt
                                                        library</span>
                                                </button>
                                                <div className="modal fade" id="promptLibrary" tabindex="-1" aria-labelledby="promptLibraryLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="promptLibraryLabel">Prompt Library</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                ...
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button data-bs-toggle="modal" data-bs-target="#brandVoice" onclick="event.preventDefault()"
                                                    className="btn  d-flex align-items-center my-1 my-lg-0 brandVoice">
                                                    <svg stroke-width="1.5" className="size-6"
                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" viewBox="0 0 24 24" stroke="currentColor"
                                                        fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path
                                                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                                                        </path>
                                                        <path d="M7 7h3v10h-3z"></path>
                                                        <path d="M14 7h3v6h-3z"></path>
                                                    </svg>
                                                    <span className="mx-2 d-flex d-lg-none">Brand Voice</span>
                                                </button>
                                                <div className="modal fade" id="brandVoice" tabindex="-1" aria-labelledby="brandVoiceLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="brandVoiceLabel">Brand Voice</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                ...
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn  Mice">
                                                <svg stroke-width="1.5" className="size-6"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path
                                                        d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z">
                                                    </path>
                                                    <path d="M5 10a7 7 0 0 0 14 0"></path>
                                                    <path d="M8 21l8 0"></path>
                                                    <path d="M12 17l0 4"></path>
                                                </svg>
                                            </button>
                                            <button className="btn p-1 d-none d-lg-flex attachmentBtn">
                                                <svg stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"
                                                    width="22" height="22" viewBox="0 0 24 24"
                                                    stroke="currentColor" fill="none" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path
                                                        d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                        <button type="submit"
                                            className="btn btn-primary btn-rounded btn-icon mx-1 mx-lg-3">
                                            <i className="mdi mdi-send"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiChatImage;


