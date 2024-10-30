
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CodeBlock, dracula } from 'react-code-blocks';
// import './AiCode.css'; // Import your CSS file

const AiCode = () => {
    const [codeGeneratorInfo, setCodeGeneratorInfo] = useState(null);
    const [description, setDescription] = useState('');
    const [codeLanguage, setCodeLanguage] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    // Fetch AI Code Generator info on component mount
    useEffect(() => {
        const fetchCodeGeneratorInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://magicai.keydevsdemo.com/api/aiwriter/generator/ai_code_generator/workbook', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setCodeGeneratorInfo(response.data.openai);
            } catch (error) {
                console.error('Error fetching code generator info:', error.response ? error.response.data : error);
            }
        };

        fetchCodeGeneratorInfo();
    }, []);

    // Handle form submission to generate code
    const handleGenerateCode = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            alert('You must be logged in to generate code.');
            return;
        }

        const requestBody = {
            post_type: "ai_code_generator",
            openai_id: 35,
            description: description || 'I need code cURL for generating a Ghazal',
            code_language: codeLanguage || 'php',
        };

        setLoading(true); // Set loading to true when starting code generation

        try {
            const response = await axios.post('https://magicai.keydevsdemo.com/api/aiwriter/generate', requestBody, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            setGeneratedCode(response.data.entry.output);
        } catch (error) {
            console.error('Error generating code:', error.response ? error.response.data : error);
            alert('Failed to generate code. Please check your input and try again.');
        } finally {
            setLoading(false); // Set loading to false when done
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedCode)
            .then(() => {
                alert('Code copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className="container-scroller">
            <div>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel main-panelcal">
                        <div className="content-wrapper" style={{ backgroundColor: 'white' }}>
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <a href="/" className="btn p-0">
                                        <span className="d-flex align-items-center">
                                            <i className="mdi mdi-chevron-left fs-5"></i> Back to dashboard
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="row pb-4">
                                <div className="col-lg-6">
                                    <h3 className="fw-bolder">AI Code Generator</h3>
                                    <p>Generate high quality code in seconds.</p>
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
                                        <form onSubmit={handleGenerateCode} className="row">
                                            <div className="col-12 mt-3 mb-3">
                                                <label className="form-label">Describe What Kind of Code You Need</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="4"
                                                    placeholder="Description"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                ></textarea>
                                            </div>

                                            <div className="col-12 mb-3">
                                                <label className="form-label">Coding Language (Java, PHP etc.)</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Coding Language (Java, PHP etc.)"
                                                    value={codeLanguage}
                                                    onChange={(e) => setCodeLanguage(e.target.value)}
                                                />
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
                                                        <i className="mdi mdi-repeat"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="my-3 px-3">
                                                <input style={{ border: 'none', width: '100%' }} type="text" placeholder="Untitled Document..." />
                                            </div>

                                            <div style={{ position: 'relative' }}>
                                                {loading && (
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                        zIndex: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '20px',
                                                        fontWeight: 'bold',
                                                    }}>
                                                        Generating Code...
                                                    </div>
                                                )}
                                                {!loading && generatedCode && (
                                                    <button
                                                        onClick={copyToClipboard}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '10px',
                                                            right: '10px',
                                                            padding: '5px 10px',
                                                            backgroundColor: '#4CAF50',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                            zIndex: 2,
                                                        }}
                                                    >
                                                        Copy
                                                    </button>
                                                )}

                                                {!loading && generatedCode && (
                                                    <CodeBlock
                                                        text={generatedCode}
                                                        language="javascript" // Adjust to your code's language
                                                        showLineNumbers={true}
                                                        theme={dracula} // Use a built-in theme for syntax highlighting
                                                        wrapLines={true} // Optional: wrap long lines
                                                    />
                                                )}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiCode;
