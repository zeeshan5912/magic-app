import React, { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
const AiWriter = () => {
    const [filter, setFilter] = useState('*'); // Default filter to show all items
    const [grid, setGrid] = useState(null);

    useEffect(() => {
        // Initialize Isotope when the component mounts
        const isotopeGrid = new Isotope('.AiWriterModels', {
            itemSelector: '.col',
            layoutMode: 'fitRows', // Layout mode
            filter: filter,
        });
        setGrid(isotopeGrid);
        return () => {
            isotopeGrid.destroy();
        };
    }, []);

    useEffect(() => {
        if (grid) {
            grid.arrange({ filter });
        }
    }, [filter, grid]);

    const handleFilterClick = (filterValue) => {
        // Set the active filter
        setFilter(filterValue);
    };
    return (
        <>

            <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar style={{ flex: '0 0 200px' }} />
                    <div className="content-wrapper" style={{ backgroundColor: 'white' }}>
                        <div className="row">
                            <div className="col-12 mb-4">
                                <a href="/" className="btn p-0"><span className="d-flex align-items-center"><i
                                    className="mdi mdi-chevron-left fs-5"></i> Back to dashboard</span></a>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-lg-6">
                                <h3 className="fw-bolder">Ai Writer</h3>
                                <p>Seamlessly upload any image you want to explore and get insightful conversations.</p>
                            </div>
                            <div className="col-lg-6 aimg">
                                <div className="d-flex justify-content-center justify-content-lg-end">
                                    <a href="/" className="btn bg-white mx-2"
                                        style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>My Documents</a>
                                    <a href="/" className="btn btn-primary"><span className="d-flex align-items-center"><i
                                        className="mdi mdi-plus me-3"></i> New</span></a>
                                </div>
                            </div>
                            <div>
                                <div className="col-12">
                                    <ul className="d-flex filterWriterModel">
                                        <li onClick={() => handleFilterClick('*')} className={filter === '*' ? 'active' : ''}>All</li>
                                        <li onClick={() => handleFilterClick('.Favorite')} className={filter === '.Favorite' ? 'active' : ''}>Favorite</li>
                                        <li onClick={() => handleFilterClick('.Youtube')} className={filter === '.Youtube' ? 'active' : ''}>Youtube</li>
                                        <li onClick={() => handleFilterClick('.Voiceover')} className={filter === '.Voiceover' ? 'active' : ''}>Voiceover</li>
                                        <li onClick={() => handleFilterClick('.Social_media')} className={filter === '.Social_media' ? 'active' : ''}>Social media</li>
                                        <li onClick={() => handleFilterClick('.Rss')} className={filter === '.Rss' ? 'active' : ''}>Rss</li>
                                        <li onClick={() => handleFilterClick('.Ecommerce')} className={filter === '.Ecommerce' ? 'active' : ''}>Ecommerce</li>
                                        <li onClick={() => handleFilterClick('.Development')} className={filter === '.Development' ? 'active' : ''}>Development</li>
                                        <li onClick={() => handleFilterClick('.Custom')} className={filter === '.Custom' ? 'active' : ''}>Custom</li>
                                        <li onClick={() => handleFilterClick('.Blog')} className={filter === '.Blog' ? 'active' : ''}>Blog</li>
                                        <li onClick={() => handleFilterClick('.Advertisement')} className={filter === '.Advertisement' ? 'active' : ''}>Advertisement</li>
                                    </ul>
                                </div>


                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 AiWriterModels">

                            <div className="col Favorite">
                                <Link to="/post_title_generator">

                                    <div className="d-flex flex-column px-4  mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size fw-bolder">
                                                    T
                                                </span>
                                                <div className="activeDot"></div>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Voiceover">
                                <Link to="/summarize_text">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Summarize Text</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Effortlessly condense large text into shorter summaries. Save time and increase productivity.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Youtube">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#c2dedd' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Product Description</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Easily create compelling product descriptions that sell. Increase conversions and boost sales.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Voiceover">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Article Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Instantly create unique articles on any topic. Boost engagement, improve SEO, and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col Youtube">
                                <a href="/">
                                    <div className="d-flex flex-column px-4  mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size fw-bolder">
                                                    T
                                                </span>
                                                <div className="activeDot"></div>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Favorite">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Social_media">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Rss">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div className="col Ecommerce">
                                <a href="/">
                                    <div className="d-flex flex-column px-4  mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size fw-bolder">
                                                    T
                                                </span>
                                                <div className="activeDot"></div>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Social_media">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Rss">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Favorite">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col Development">
                                <a href="/">
                                    <div className="d-flex flex-column px-4  mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size fw-bolder">
                                                    T
                                                </span>
                                                <div className="activeDot"></div>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Ecommerce">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Rss">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Custom">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col Custom">
                                <a href="/">
                                    <div className="d-flex flex-column px-4  mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size fw-bolder">
                                                    T
                                                </span>
                                                <div className="activeDot"></div>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Blog">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Youtube">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Advertisement">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col Advertisement">
                                <a href="/">
                                    <div className="d-flex flex-column px-4  mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size fw-bolder">
                                                    T
                                                </span>
                                                <div className="activeDot"></div>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Blog">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Favorite">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Advertisement">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div className="col Custom">
                                <a href="/">
                                    <div className="d-flex flex-column px-4  mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size fw-bolder">
                                                    T
                                                </span>
                                                <div className="activeDot"></div>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Advertisement">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Ecommerce">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Advertisement">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div className="col Advertisement">
                                <a href="/">
                                    <div className="d-flex flex-column px-4  mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                <span className="size fw-bolder">
                                                    T
                                                </span>
                                                <div className="activeDot"></div>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Development">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Blog">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col Youtube">
                                <a href="/">
                                    <div className="d-flex flex-column px-4 mtCard">
                                        <div className="d-flex justify-content-between cardHeader">
                                            <div className="cardIcon" style={{ backgroundColor: '#ccd9b8' }}>
                                                <span className="size">
                                                    <svg className="w-100 h-100" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 96 960 960">
                                                        <path
                                                            d="M120 816v-60h480v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z">
                                                        </path>
                                                    </svg>
                                                    <div className="activeDot"></div>
                                                </span>
                                            </div>
                                            <div className="Fav">
                                                <button className="btn p-2">
                                                    <i className="mdi mdi-star-outline fs-5"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cardBody mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h4 className=" d-flex align-items-center mb-0">Post Title Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get captivating post titles instantly with our title generator. Boost engagement and save time.</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AiWriter
