import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const GoogleAdsDescription      = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [rewrittenText, setRewrittenText] = useState('');
    const [messageId, setMessageId] = useState(null);
    const [articleTitle, setArticleTitle] = useState('Product Name');
    const [focusKeywords, setFocusKeywords] = useState('AI, technology, innovation');
    const [creativity, setCreativity] = useState(0.7); // Default creativity as a number
    const [language, setLanguage] = useState('en-US'); // Default language
    const [maxLength, setMaxLength] = useState(500); // Default maximum length
    const [toneOfVoice, setToneOfVoice] = useState('Professional'); // Default tone of voice
    const [slug, setSlug] = useState(''); // State for dynamic slug
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(
                    'https://magicai.keydevsdemo.com/api/aiwriter/generator/google_ads_description/workbook',
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    }
                );

                const data = response.data.openai;
                setTitle(data.title);
                setDescription(data.description);
                setRewrittenText(data.title);
                setSlug(data.slug); // Set slug dynamically from the API response
            } catch (error) {
                console.error('There was a problem with the request:', error);
            }
        };

        fetchData();
    }, []);

    const handleGeneratePrompt = async (event) => {
        event.preventDefault();
        setLoading(true);
        const token = localStorage.getItem('token');
        const promptData = {
            post_type: slug, // Use dynamic slug instead of post_type
            image_generator: false,
            number_of_results: 1,
            maximum_length: maxLength,
            creativity: creativity, // Use numeric value for creativity
            language: language,
            negative_prompt: "none",
            tone_of_voice: toneOfVoice,
            article_title: articleTitle,
            focus_keywords: focusKeywords,
        };

        try {
            const response = await axios.post(
                'https://magicai.keydevsdemo.com/api/aiwriter/generate',
                promptData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            const generatedMessageId = response.data.message_id;
            setMessageId(generatedMessageId);
            setRewrittenText(response.data.inputPrompt);

            await fetchFullOutput(generatedMessageId); // Pass creativity and other params in this call
        } catch (error) {
            console.error('Error generating prompt:', error);
        }
    };

    const fetchFullOutput = async (messageId) => {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(
                'https://magicai.keydevsdemo.com/api/aiwriter/generate-full-output',
                {
                    message_id: messageId,
                    creativity: creativity, // Pass creativity as a numeric value
                    maximum_length: maxLength, // Pass maximum length
                    number_of_results: 1 // Set to 1 for the full output request
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            setRewrittenText(response.data.output);
        } catch (error) {
            console.error('Error fetching full output:', error);
        }
        finally
        {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar style={{ flex: '0 0 200px' }} />
                    <div className="content-wrapper mt-5" style={{ backgroundColor: 'white' }}>
                        <div className="row pb-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                            <div className="col-lg-6">
                                <h3 style={{ fontWeight: 900 }}>{title}</h3>
                                <p>{description}</p>
                            </div>
                            <div className="col-lg-6 aimg">
                                <div className="d-flex justify-content-center justify-content-lg-end">
                                    <a href="/" className="btn bg-white mx-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>My Documents</a>
                                    <a href="/" className="btn btn-primary">
                                        <span className="d-flex align-items-center"><i className="mdi mdi-plus me-3"></i> New</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="topic">
                            <div className="row pt-5">
                                <div className="col-lg-4">
                                <div className="col-12 form-control h-auto mb-3">
                                        <label className="fw-bolder" for="">Remaining Credits</label>

                                        <div className="progress" style={{ backgrounColor: 'rgba(75, 73, 172, 0.2)' }}>
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="d-flex align-items-center fw-bolder">
                                                <i className="mdi mdi-checkbox-blank-circle text-primary"
                                                    style={{ fontSize: '12px', marginBottom: '2px' }}></i>
                                                <div className="mx-2">Words</div> <span>2,998,016</span>
                                            </div>
                                            <div className="d-flex align-items-center fw-bolder">
                                                <i className="mdi mdi-checkbox-blank-circle"
                                                    style={{ fontSize: '12px', marginBottom: '2px', color: 'rgba(75, 73, 172, 0.2)' }}></i>
                                                <div className="mx-2">Images</div> <span>2,998,016</span>
                                            </div>
                                        </div>

                                    </div>
                                    <form onSubmit={handleGeneratePrompt} className="row">
                                    <div className="col-12 d-flex flex-column ">
                                            <div className="d-flex">
                                                <div className="toggle-btn">
                                                    <input type="checkbox" id="toggle" className="toggle-input" />
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
                                                            style={{ position: 'absolute', top: '-5%', right: 0 }}>
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
                                                    <input type="checkbox" id="toggleGBP" className="toggle-input" />
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
                                                    <input type="number" className="form-control" />
                                                </div>
                                            </div>

                                        </div>


                                        {/* <div className="col-12 mb-3">
                                            <label htmlFor="" className="form-label">Your Description</label>
                                            <textarea 
                                                className="form-control" 
                                                rows="4" 
                                                placeholder="Enter your description here"
                                                value={userDescription}
                                                onChange={(e) => setUserDescription(e.target.value)}
                                            />
                                        </div> */}
                                        <div className="col-12 mb-3">
                                            <label htmlFor="" className="form-label">Product Name</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={articleTitle}
                                                onChange={(e) => setArticleTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="" className="form-label">Description</label>
                                            <textarea 
                                                className="form-control" 
                                                rows="4" 
                                                placeholder="Description"
                                                value={userDescription}
                                                onChange={(e) => setUserDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="row mb-3">
                                                <div className="col-lg-6">
                                                    <label htmlFor="" className="form-label">Language</label>
                                                    <select className="form-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
                                                        <option value="en-US">English (USA)</option>
                                                        <option value="fr-FR">French</option>
                                                        <option value="es-ES">Spanish</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="" className="form-label">Maximum Length</label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control form-control-sm" 
                                                        value={maxLength}
                                                        onChange={(e) => setMaxLength(Number(e.target.value))}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label htmlFor="" className="form-label">Creativity</label>
                                                    <select className="form-select" value={creativity} onChange={(e) => setCreativity(Number(e.target.value))}>
                                                        <option value={0.5}>Low</option>
                                                        <option value={0.7}>Medium</option>
                                                        <option value={0.9}>High</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="" className="form-label">Tone of Voice</label>
                                                    <select className="form-select" value={toneOfVoice} onChange={(e) => setToneOfVoice(e.target.value)}>
                                                        <option value="Professional">Professional</option>
                                                        <option value="Casual">Casual</option>
                                                        <option value="Friendly">Friendly</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <button type="submit" className="btn btn-primary w-100 text-center mt-3" disabled = {loading}>
                                                {loading ? (
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                ) : (
                                                    'Generate'
                                                )
                                            }
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-8 px-1 px-lg-5">
                                    <form>
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
                                                <button className="btn p-1 mx-1">
                                                    <i className="mdi mdi mdi-repeat"></i>
                                                </button>
                                            </div>
                                        </div>


                                        <div className="my-3 px-3">
                                            <input style={{ border: 'none', width: '100%' }} type="text" placeholder="Untitled Document..." />
                                        </div>

                                        <ReactQuill
                                            theme="snow"
                                            value={rewrittenText}
                                            readOnly
                                            style={{ height: '300px', border: '1px solid #ccc', borderRadius: '5px' }}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GoogleAdsDescription;
