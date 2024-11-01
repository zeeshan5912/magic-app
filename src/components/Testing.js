import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
    const [chats, setChats] = useState([]);
    const [file, setFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');
    const [chatInfo, setChatInfo] = useState({ title: '', description: '' });

    // Fetching chat list
    useEffect(() => {
        const fetchChats = async () => {
            const url = 'https://magicai.keydevsdemo.com/api/aiwriter/generator/ai_pdf/workbook';
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setChats(response.data.list || []);
            } catch (error) {
                console.error('Error fetching chat list:', error);
            }
        };

        fetchChats();
    }, []);

    // Fetching chat info
    useEffect(() => {
        const fetchChatInfo = async () => {
            const url = 'https://magicai.keydevsdemo.com/api/aiwriter/generator/ai_pdf/workbook';
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const { title, description } = response.data.chat || {};
                setChatInfo({ title, description });
            } catch (error) {
                console.error('Error fetching chat info:', error);
            }
        };

        fetchChatInfo();
    }, []);

    // Handle file change
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file upload and start new chat
    const handleUpload = async () => {
        const uploadUrl = 'https://magicai.keydevsdemo.com/api/aichat/new-doc-chat';
        const token = localStorage.getItem('token');

        if (!file) {
            setUploadMessage('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Upload the document
            const uploadResponse = await axios.post(uploadUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (uploadResponse.status === 200) {
                setUploadMessage('File uploaded successfully! Analyzing...');

                // Start a new chat after the document is analyzed
                const newChatResponse = await axios.post('https://magicai.keydevsdemo.com/api/aichat/new-chat', {
                    documentId: uploadResponse.data.documentId, // Adjust based on the API response
                }, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (newChatResponse.status === 200) {
                    // Update chat info with the response from the new chat
                    const { title, description } = newChatResponse.data.chat || {};
                    setChatInfo({ title, description });
                    setUploadMessage('New chat started successfully!');
                } else {
                    setUploadMessage('Error starting new chat.');
                }
            } else {
                setUploadMessage('Error uploading file.');
            }
        } catch (err) {
            setUploadMessage('Error: ' + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="chatComponent">
            <div className="chatSideBar">
                <div className="chatSideBarHeader">
                    <div className="inputSearch">
                        <input className="form-control" type="search" placeholder="Search" />
                        <i className="mdi mdi-magnify"></i>
                    </div>
                </div>
                <div className="d-flex h-100 flex-column w-100">
                    <div className="h-100 msgSection">
                        <ul className="chatNav">
                            {chats.map(chat => (
                                <li className="navItem" key={chat.id}>
                                    <a className="navLink" href="/">
                                        <div className="d-flex">
                                            <div className="px-3">
                                                <svg strokeWidth="1.5" className="size-6 shrink-0"
                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24"
                                                    stroke="currentColor" fill="none"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M8 9h8"></path>
                                                    <path d="M8 13h6"></path>
                                                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                                                </svg>
                                            </div>
                                            <div className="px-1 mt-1">
                                                <h6 className="fs-6 mb-0">{chat.title}</h6>
                                                <p className="card-text mb-0" style={{ fontSize: '13px', marginTop: '4px' }}>
                                                    <small className="text-muted">1 week ago</small>
                                                </p>
                                                <a className="text-black" href={chat.reference_url}>{chat.doc_name}</a>
                                            </div>
                                        </div>
                                        <div className="DelOrView">
                                            <button className="viewBtn mx-1">
                                                <svg style={{ width: '1rem' }}
                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" strokeWidth="2"
                                                    stroke="currentColor" fill="none"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                                    <path d="M13.5 6.5l4 4"></path>
                                                </svg>
                                            </button>
                                            <button className="delBtn mx-1">
                                                <svg style={{ width: '1rem' }}
                                                    xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" strokeWidth="2"
                                                    stroke="currentColor" fill="none"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 6l-12 12"></path>
                                                    <path d="M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-100 d-none d-lg-flex justify-content-center px-3" style={{ marginTop: '1em' }}>
                        <button
                            className="btn btn-primary w-100 d-flex justify-content-center align-items-center uploadBtn"
                            style={{ borderRadius: '20px' }}
                            onClick={() => document.getElementById('uploadInput').click()}
                        >
                            <i className="mdi mdi-plus mx-1"></i>
                            Upload Document
                        </button>
                        <input
                            id="uploadInput"
                            type="file"
                            name="upload"
                            style={{ display: 'none' }}
                            required
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>

            <div className="chatBoxHeader">
                <div>
                    <div className="d-flex">
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                src="https://magicai.liquid-themes.com/themes/default/assets/img/chatbot-default.png"
                                className="img-fluid"
                                alt="..."
                                style={{ width: '50px', borderRadius: '50%' }}
                            />
                        </div>
                        <div className="d-none d-lg-flex flex-column ms-2 mt-2">
                            <h5 className="card-title mb-1" style={{ fontSize: '16px' }}>
                                {chatInfo.title || 'Loading...'}
                            </h5>
                            <p className="w-100 mb-0" style={{ fontSize: '12px' }}>
                                {chatInfo.description || 'Fetching description...'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-flex w-50 align-items-center justify-content-between justify-content-lg-end">
                    <button className="d-flex d-lg-none btn p-0" onClick={() => document.getElementById('uploadInput').click()}>
                        <i className="mdi fs-4 mdi-upload"></i>
                    </button>
                    <button className="d-flex d-lg-none btn p-0" onClick={() => setUploadMessage('')}>
                        <i className="mdi fs-4 mdi-delete"></i>
                    </button>
                    <button id="toggleSidebar" className="d-flex d-lg-none btn p-0">
                        <i className="mdi fs-3 mdi-dots-horizontal"></i>
                    </button>
                </div>
            </div>

            {uploadMessage && <div className="alert alert-info">{uploadMessage}</div>}
        </div>
    );
};

export default ChatComponent;
