import React, { useState, useEffect } from 'react';
import '../../AiChat.css';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AiRewriter = () => {
    const [aiData, setAiData] = useState(null);
    const [description, setDescription] = useState('');
    const [rewrittenText, setRewrittenText] = useState('');
    const [loading, setLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [rewriteMode, setRewriteMode] = useState('Professional');
    const [language, setLanguage] = useState('en-US');

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('https://magicai.keydevsdemo.com/api/aiwriter/generator/ai_rewriter/workbook', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => setAiData(response.data.openai))
        .catch(error => console.error("Error fetching AI rewriter data:", error));
    }, []);

    const handleGeneratePrompt = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        setLoading(true);
        setIsTyping(true);
        setRewrittenText('');

        try {
            const generateResponse = await axios.post('https://magicai.keydevsdemo.com/api/aiwriter/generate', {
                post_type: "ai_rewriter",
                content_rewrite: description,
                rewrite_mode: rewriteMode,
                language: language
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const messageId = generateResponse.data.message_id;
            if (messageId) {
                fetchGeneratedOutput(messageId);
            } else {
                console.error("Message ID not found in response:", generateResponse.data);
            }
        } catch (error) {
            console.error("Error generating prompt:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchGeneratedOutput = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const outputResponse = await axios.post('https://magicai.keydevsdemo.com/api/aiwriter/generate-full-output', {
                message_id: id,
                creativity: 1,
                maximum_length: 500,
                number_of_results: 1
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const outputText = outputResponse.data.output || "";
            const rewrittenContent = outputText.split("Rewritten Content: ")[1]?.trim() || outputText;
            setRewrittenText(rewrittenContent);
            
            await saveRewrittenContent(rewrittenContent, id);
        } catch (error) {
            console.error("Error retrieving output:", error);
        } finally {
            setIsTyping(false);
        }
    };

    const saveRewrittenContent = async (content, messageId) => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('https://magicai.keydevsdemo.com/api/low/generate_save', {
                input: `Original Content: ${description}`,
                response: content,
                message_id: messageId,
                resave: true
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("Content saved successfully");
        } catch (error) {
            console.error("Error saving content:", error);
        }
    };

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
                <div className="main-panel main-panelcal">
                    <div className="content-wrapper" style={{ backgroundColor: 'white' }}>
                        <div className="row pb-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                            <div className="col-lg-6">
                                <h3 style={{ fontWeight: 900 }}>{aiData ? aiData.title : "Loading..."}</h3>
                                <p>{aiData ? aiData.description : "Fetching AI description..."}</p>
                            </div>
                        </div>

                        <div className="topic">
                            <div className="row pt-5">
                                <div className="col-lg-4">
                                    <form onSubmit={handleGeneratePrompt} className="row">
                                        <div className="col-12 mt-3 mb-3">
                                            <label className="form-label">Description</label>
                                            <textarea style={{overflow:'hidden'}}
                                                className="form-control" 
                                                rows="5" 
                                                placeholder="Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className="col-l2 mb-3">
                                            <label htmlFor="" className="form-label">Mode</label>
                                            <select 
                                                className="form-select" 
                                                aria-label="Default select example" 
                                                value={rewriteMode}
                                                onChange={(e) => setRewriteMode(e.target.value)}
                                            >
                                             <option value="Professional">Professional</option>
                                             <option value="Funny">Funny</option>
                                             <option value="Casual">Casual</option>
                                             <option value="Excited">Excited</option>
                                            </select>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <label htmlFor="" className="form-label">Output Language</label>
                                            <select 
                                                className="form-select" 
                                                aria-label="Default select example" 
                                                value={language}
                                                onChange={(e) => setLanguage(e.target.value)}
                                            >
                                             <option value="en-US">English (USA)</option>
                                             <option value="en-UK">English (UK)</option>
                                            </select>
                                         </div>
                                        <div className="col-12 mb-3">
                                            <button type="submit" className="btn btn-primary w-100 text-center mt-3" disabled={loading}>
                                                {loading ? (
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                ) : (
                                                    'Generate Content'
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-8 px-1 px-lg-5">
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
                                            <button className="btn p-1 mx-1" >
                                                <i className="mdi mdi mdi-repeat"></i>
                                            </button>
                                        </div>         
                                    </div>

                                    <div className="my-3 px-3">
                                        <input style={{ border: 'none', width: '100%', fontFamily:'Times new roman' }} type="text" placeholder="Untitled Document..." />
                                    </div>

                                    {/* Display Typing Status */}
                                    {isTyping && (
                                        <div className="typing-status" style={{ marginBottom: '10px' }}>
                                            Typing...
                                        </div>
                                    )}

                                    {/* Display Rewritten Output in React Quill Editor */}
                                    <ReactQuill
                                        theme="snow"
                                        value={rewrittenText}
                                        readOnly
                                        style={{ height: '300px', border: '1px solid #ccc', borderRadius: '5px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiRewriter;
