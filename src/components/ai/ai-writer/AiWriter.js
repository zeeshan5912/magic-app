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
                               <Link to="/product_desc">
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
                               </Link>
                            </div>
                            <div className="col Voiceover">
                            <Link to="/article_gen">
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
                               </Link>
                            </div>

                            <div className="col Youtube">
                                <Link to="/prod_name">
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
                                                <h4 className=" d-flex align-items-center mb-0">Post Name Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Create catchy product names with ease. Attract customers and boost sales effortlessly.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Favorite">
                                <Link to="/test_review">
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
                                                <h4 className=" d-flex align-items-center mb-0">Testimonial Review</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Instantly generate authentic testimonials. Build trust and credibility with genuine reviews.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Social_media">
                                <Link to="/prob_agit">
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
                                                <h4 className=" d-flex align-items-center mb-0">Problem Agitate Solution</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Identify and solve problems efficiently. Streamline solutions and increase productivity.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Rss">
                                <Link to="/blog_sec">
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
                                                <h4 className=" d-flex align-items-center mb-0">Blog Section</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Effortlessly create blog sections with AI. Get unique, engaging content and save time.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>


                            <div className="col Ecommerce">
                                <Link to="/blog_post">
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
                                                <h4 className=" d-flex align-items-center mb-0">Blog Post Ideas</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Unlock your creativity with unique blog post ideas. Generate endless inspiration and take your content to the next level.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Social_media">
                                <Link to="/blog_intro">
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
                                                <h4 className=" d-flex align-items-center mb-0">Blog Intros</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Set the tone for your blog post with captivating intros. Grab readers' attention and keep them engaged.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Rss">
                                <Link to="/blog_conc">
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
                                                <h4 className=" d-flex align-items-center mb-0">Blog Conclusion</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>End your blog posts on a high note. Craft memorable conclusions that leave a lasting impact.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Favorite">
                                <Link to="/facebook_ad">
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
                                                <h4 className=" d-flex align-items-center mb-0">Facebook Ads</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Create high-converting Facebook ads that grab attention. Drive sales and grow your business.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col Development">
                                <Link to="/youtube_desc">
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
                                                <h4 className=" d-flex align-items-center mb-0">Youtube Video Description</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Elevate your YouTube content with compelling video descriptions. Generate engaging descriptions effortlessly and increase views.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Ecommerce">
                                <Link to="/youtube_title">
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
                                                <h4 className=" d-flex align-items-center mb-0">Youtube Video Title</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get more views with attention-grabbing video titles. Create unique, catchy titles that entice viewers.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Rss">
                                <Link to="/youtube_tag">
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
                                                <h4 className=" d-flex align-items-center mb-0">Youtube Video Tag</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Improve your YouTube video's discoverability with relevant video tags. Boost views and engagement.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Custom">
                                <Link to="/insta_cap">
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
                                                <h4 className=" d-flex align-items-center mb-0">Instagram Captions</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Elevate your Instagram game with captivating captions. Generate unique captions that engage followers and increase your reach.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col Custom">
                                <Link to="/insta_hash">
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
                                                <h4 className=" d-flex align-items-center mb-0">Instagram Hashtags</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Boost your Instagram reach with relevant hashtags. Generate optimal, trending hashtags and increase your visibility.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Blog">
                                <Link to="/social_tweet">
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
                                                <h4 className=" d-flex align-items-center mb-0">Social Media Post Tweet</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Make an impact with every tweet. Generate attention-grabbing social media posts and increase engagement.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Youtube">
                                <Link to="/social_business">
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
                                                <h4 className=" d-flex align-items-center mb-0">Social Media Post Business</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Generate a text for your business social media networks. Maximize your social media presence with impactful business posts.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Advertisement">
                                <Link to="/facebook_head">
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
                                                <h4 className=" d-flex align-items-center mb-0">Facebook Headlines</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get noticed with attention-grabbing Facebook headlines. Generate unique, clickable headlines that increase engagement and drive traffic.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="col Advertisement">
                                <Link to="/google_head">
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
                                                <h4 className=" d-flex align-items-center mb-0">Google Ads Headlines</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Create high-converting Google ads with captivating headlines. Generate unique, clickable ads that drive traffic and boost sales.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Blog">
                                <Link to="/google_desc">
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
                                                <h4 className=" d-flex align-items-center mb-0">Google Ads Description</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Step up your Google ad game, Craft high-converting ad copy that grabs attention and drives sales.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Favorite">
                                <Link to="/para_gen">
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
                                                <h4 className=" d-flex align-items-center mb-0">Paragraph Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Generate a paragraph with keywords and description. Never struggle with writer's block again. Generate flawless paragraphs that captivate readers.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Advertisement">
                                <Link to="/pro_con">
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
                                                <h4 className=" d-flex align-items-center mb-0">Pros & Cons</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Make informed decisions with ease. Generate unbiased pros and cons lists that help you weigh options and make better choices.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>


                            <div className="col Custom">
                                <Link to="/meta_desc">
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
                                                <h4 className=" d-flex align-items-center mb-0">Meta Description</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Get more clicks with compelling meta descriptions. Generate unique, SEO-friendly meta descriptions that attract customers and boost traffic.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Advertisement">
                                <Link to="/faq_gen">
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
                                                <h4 className=" d-flex align-items-center mb-0">FAQ Generator (All Datas)</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Quickly create helpful FAQs. Our AI-powered generator provides custom responses to common questions in seconds.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Ecommerce">
                                <Link to="/email_gen">
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
                                                <h4 className=" d-flex align-items-center mb-0">Email Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Generate an email with your subject and description. Streamline your inbox and save time.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Advertisement">
                                <Link to="/email_ans_gen">
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
                                                <h4 className=" d-flex align-items-center mb-0">Email Answer Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Effortlessly tackle your overflowing inbox with custom, accurate responses to common queries, freeing you up to focus on what matters most.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>


                            <div className="col Advertisement">
                                <Link to="/news_gen">
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
                                                <h4 className=" d-flex align-items-center mb-0">Newsletter Generator</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Generate engaging newsletters easily with personalized content that resonates with your audience, driving growth and engagement.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Development">
                                <Link to="/gram_corr">
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
                                                <h4 className=" d-flex align-items-center mb-0">Grammar Correction</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Eliminate grammar errors and enhance your writing with ease. Our tool offers seamless grammar correction for flawless content.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Blog">
                                <Link to="/tldr_sum">
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
                                                <h4 className=" d-flex align-items-center mb-0">TL;DR Summarization</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Automatically summarize long texts into bite-sized summaries with this TL;DR generator.</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col Youtube">
                                <Link to="/custom_gen">
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
                                                <h4 className=" d-flex align-items-center mb-0">Custom Generation</h4>  <div><i className="mdi mdi-chevron-right fs-4 ms-1"></i></div>
                                            </div>
                                            <div className="discrp" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Create your own custom generator with AI! Our app allows you to quickly and easily generate unique content in any language.</div>
                                        </div>
                                    </div>
                                </Link>
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
