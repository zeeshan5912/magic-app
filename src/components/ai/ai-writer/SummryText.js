import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const SummaryText = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [rewrittenText, setRewrittenText] = useState('');
    const [messageId, setMessageId] = useState(null);
    const [articleTitle, setArticleTitle] = useState('How AI is transforming industries');
    const [focusKeywords, setFocusKeywords] = useState('AI, technology, innovation');
    const [creativity, setCreativity] = useState(0.7); // Default creativity as a number
    const [language, setLanguage] = useState('en-US'); // Default language
    const [maxLength, setMaxLength] = useState(500); // Default maximum length
    const [toneOfVoice, setToneOfVoice] = useState('Professional'); // Default tone of voice

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(
                    'https://magicai.keydevsdemo.com/api/aiwriter/generator/summarize_text/workbook',
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
            } catch (error) {
                console.error('There was a problem with the request:', error);
            }
        };

        fetchData();
    }, []);

    const handleGeneratePrompt = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');
        const promptData = {
            post_type: "article_generator",
            image_generator: false,
            number_of_results: 3,
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
                                    <form onSubmit={handleGeneratePrompt} className="row">
                                    <div class="col-12 d-flex flex-column ">
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
                                                        style={{ position: 'relative' }}>
                                                        <label class="form-label" for="">Select Company</label>
                                                        <a href="brand_voice.html" class="btn btn-inverse-success btn-fw p-0"
                                                            style={{ position: 'absolute', top: '-5%', right: 0 }}>
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


                                        <div className="col-12 mb-3">
                                            <label htmlFor="" className="form-label">Text to summary</label>
                                            <textarea 
                                                className="form-control" 
                                                rows="4" 
                                                placeholder="Enter your description here"
                                                value={userDescription}
                                                onChange={(e) => setUserDescription(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="col-12 mb-3">
                                            <label htmlFor="" className="form-label">Article Title</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={articleTitle}
                                                onChange={(e) => setArticleTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label htmlFor="" className="form-label">Focus Keywords</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                value={focusKeywords}
                                                onChange={(e) => setFocusKeywords(e.target.value)}
                                            />
                                        </div> */}
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
                                            <button type="submit" className="btn btn-primary w-100 text-center mt-3">Generate</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-8 px-1 px-lg-5">
                                    <form>
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

export default SummaryText;


// import Navbar from '../../Navbar';
// import Sidebar from '../../Sidebar';
// import Footer from '../../Footer';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// const PostTitle = () => {
//     const [rewrittenText,] = useState('');

//     return (
//         <>
//             <div className="dashboard-container">
//                 <Navbar />
//                 <div className="d-flex">
//                     <Sidebar style={{ flex: '0 0 200px' }} />
//                     <div class="content-wrapper mt-5" style={{ backgroundColor: 'white' }}>


//                         <div class="row pb-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
//                             <div class="col-lg-6">
//                                 <h3 style={{ fontWeight: 900 }}>Post Title Generator</h3>
//                                 <p>Get captivating post titles instantly with our title generator. Boost engagement and
//                                     save time.</p>
//                             </div>

//                             <div class="col-lg-6 aimg">
//                                 <div class="d-flex justify-content-center justify-content-lg-end">
//                                     <a href="/" class="btn bg-white mx-2"
//                                         style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>My Documents</a>
//                                     <a href="/" class="btn btn-primary"><span class="d-flex align-items-center"><i
//                                         class="mdi mdi-plus me-3"></i> New</span></a>
//                                 </div>
//                             </div>
//                         </div>


//                         <div class="topic">
//                             <div class="row pt-5">
//                                 <div class="col-lg-4">
//                                     <form action="" class="row">

//                                         <div class="col-12 d-flex flex-column ">
//                                             <div class="d-flex">
//                                                 <div class="toggle-btn">
//                                                     <input type="checkbox" id="toggle" class="toggle-input" />
//                                                     <label for="toggle" class="toggle-label">
//                                                         <span class="toggle-button"></span>
//                                                     </label>
//                                                 </div>
//                                                 <label class="mx-3 fs-6 iyb" for="toggle">Include Your Brand</label>
//                                             </div>

//                                             <div class="iyb_togler">
//                                                 <div class="mb-3 mt-3">
//                                                     <div class="d-flex justify-content-between align-items-center"
//                                                         style={{ position: 'relative' }}>
//                                                         <label class="form-label" for="">Select Company</label>
//                                                         <a href="brand_voice.html" class="btn btn-inverse-success btn-fw p-0"
//                                                             style={{ position: 'absolute', top: '-5%', right: 0 }}>
//                                                             <i class="mdi mdi-plus"></i>
//                                                         </a>
//                                                     </div>
//                                                     <select class="form-select" aria-label="Default select example">
//                                                         <option selected>Select Company</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                     </select>
//                                                 </div>
//                                                 <div class="mb-3">
//                                                     <div class="d-flex justify-content-between align-items-center">
//                                                         <label class="form-label" for="">Select Product/Service</label>
//                                                     </div>
//                                                     <select class="form-select" aria-label="Default select example">
//                                                         <option selected>Select Product</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                     </select>
//                                                 </div>
//                                             </div>

//                                         </div>

//                                         <div class="col-12 d-flex flex-column mb-3">

//                                             <div class="mt-3 d-flex">
//                                                 <div class="toggle-btn">
//                                                     <input type="checkbox" id="toggleGBP" class="toggle-input" />
//                                                     <label for="toggleGBP" class="toggle-label">
//                                                         <span class="toggle-button"></span>
//                                                     </label>
//                                                 </div>
//                                                 <label class="mx-3 fs-6 iyb" for="toggleGBP">Generate Bulk Posts</label>
//                                             </div>

//                                             <div class="gbp_togler">
//                                                 <div class="mb-3 mt-3">
//                                                     <div class="d-flex justify-content-between align-items-center">
//                                                         <label class="form-label" for="">Number of Results</label>
//                                                     </div>
//                                                     <input type="number" class="form-control" />
//                                                 </div>
//                                             </div>

//                                         </div>


//                                         <div class="col-12 mb-3">
//                                             <label for="" class="form-label">Description</label>
//                                             <textarea name="" class="form-control" rows="4"
//                                                 placeholder="Description"></textarea>
//                                         </div>

//                                         <div class="col-12 mb-3">
//                                             <div class="row mb-3">
//                                                 <div class="col-lg-6">
//                                                     <label for="" class="form-label">Language</label>
//                                                     <select class="form-select" aria-label="Default select example">
//                                                         <option selected>English (USA)</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                     </select>
//                                                 </div>
//                                                 <div class="col-lg-6">
//                                                     <label for="" class="form-label">Maximum Length</label>
//                                                     <input type="number" class="form-control form-control-sm" />
//                                                 </div>
//                                             </div>
//                                             <div class="row">
//                                                 <div class="col-lg-6">
//                                                     <label for="" class="form-label">Creativity</label>
//                                                     <select class="form-select" aria-label="Default select example">
//                                                         <option selected>Good</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                     </select>
//                                                 </div>
//                                                 <div class="col-lg-6">
//                                                     <label for="" class="form-label">Tone of Voice</label>
//                                                     <select class="form-select" aria-label="Default select example">
//                                                         <option selected>Professional</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                     </select>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div class="col-12 mb-3">
//                                             <button type="submit"
//                                                 class="btn btn-primary w-100 text-center mt-3">Generate
//                                                 Keywords</button>
//                                         </div>
//                                     </form>
//                                 </div>

//                                 <div class="col-lg-8 px-1 px-lg-5">
//                                     <form action="">
//                                         <div class="HeadLeft">
//                                             <div>
//                                                 <button class="btn p-1 mx-1">
//                                                     <i class="mdi mdi-undo-variant"></i>
//                                                 </button>
//                                                 <button class="btn p-1 mx-1">
//                                                     <i class="mdi mdi-redo-variant"></i>
//                                                 </button>
//                                                 <button class="btn p-1 mx-1">
//                                                     <i class="mdi mdi-content-copy"></i>
//                                                 </button>
//                                                 <button class="btn p-1 mx-1">
//                                                     <i class="mdi mdi-download"></i>
//                                                 </button>
//                                                 <button class="btn p-1 mx-1">
//                                                     <i class="mdi mdi-minus-circle-outline text-danger"></i>
//                                                 </button>
//                                             </div>
//                                             <div>
//                                                 <button class="btn p-1 px-2 d-flex align-items-center save">
//                                                     <i class="mdi mdi-sync me-1"></i>
//                                                     <div>Save</div>
//                                                 </button>
//                                             </div>

//                                         </div>

//                                         <div class="my-3 px-3">
//                                             <input style={{ border: 'none', width: '100%' }} type="text" placeholder="Untitled Document..." />
//                                         </div>

//                                         <ReactQuill
//                                             theme="snow"
//                                             value={rewrittenText}
//                                             readOnly
//                                             style={{ height: '300px', border: '1px solid #ccc', borderRadius: '5px' }}
//                                         />
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default PostTitle