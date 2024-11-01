import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';

export const AiChatx = () => {
    const [chatList, setChatList] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchChatList = async () => {
            try {
                const response = await axios.get('https://magicai.keydevsdemo.com/api/aichat/ai-chat-list', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setChatList(response.data.aiList);
            } catch (error) {
                console.error('Error fetching chat list:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChatList();
    }, [token]);

    return (
        <>
            <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar />
                    <div className="content-wrapper" style={{ backgroundColor: 'white' }}>
                        <div className="row">
                          
                        </div>
                        <div className="row pb-4">
                            <div className="col-lg-6">
                                <h3 className="fw-bolder mt-5">AI Chat</h3>
                                <p></p>
                            </div>
                            <div className="col-lg-6 aimg">
                                <div className="d-flex justify-content-center justify-content-lg-end mt-5
                                " >
                                    <a href="/" className="btn bg-white mx-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                                        My Documents
                                    </a>
                                    <a href="/" className="btn btn-primary">
                                        <span className="d-flex align-items-center">
                                            <i className="mdi mdi-plus me-3"></i> New
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 d-flex align-items-center">
                                <div className="searchAichat">
                                    <input type="search" className="form-control" placeholder="Search" />
                                    <i className="mdi mdi-magnify"></i>
                                </div>
                                <ul className="d-flex ms-3 filterWriterModel">
                                    <li data-filter="*" className="active">All</li>
                                    <li data-filter=".Favorite">Favorite</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 AiWriterModels AiChatModels">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                chatList.map(chat => (
                                    <div className="col" key={chat.id}>
                                        <a href="">
                                            <div className="d-flex flex-column mtCard">
                                                <div className="d-flex justify-content-center cardHeader">
                                                    <div className="cardIcon" style={{ backgroundColor: '#a3d6c2' }}>
                                                        <span className="size fw-bolder fs-1 mb-4">{chat.short_name}</span>
                                                    </div>
                                                    <div className="Fav">
                                                        <button className="btn p-2">
                                                            <i className="mdi mdi-star-outline fs-5"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                  <div className="cardBody mt-4">
                                                    <div className="mb-1">
                                                        <h4 className="mb-0 text-center">{chat.name}</h4>
                                                    </div>
                                                    <div className="discrp text-center w-100" style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>
                                                        {chat.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
