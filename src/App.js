import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './custom.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword'; // Import ForgetPassword component
import AiWriter from './components/ai/ai-writer/AiWriter';

import AiHeader from './components/ai/ai-image/AiHeader';
import AiVideoHeader from './components/ai/ai-video/AiVideoHeader';
import AiChatHeader from './components/ai/ai-chat/AiChatHeader';
import { getToken, setToken, removeToken, isAuthenticated as checkAuth } from './utils/auth';
import AiVision from './components/ai/ai-vision/AiVision';
import { BrandVoice } from './components/BrandVoice';
import { AiChatx } from './components/ai/aichat/AiChatx';
import AiRewriterHeader from './components/ai/ai-rewriter/AiRewriterHeader';
import AiChatImageHeader from './components/ai/ai-chat-image/AiChatImageHeader';
import AiCodeHeader from './components/ai/ai-code/AiCodeHeader';
import AiYoutubeHeader from './components/ai/ai-youtube/AiYoutubeHeader';
import AiRssHeader from './components/ai/ai-rss/AiRssHeader';
// import AiSttHeader from './components/ai/ai-stt/AiSttHeader';
import AiVoHeader from './components/ai/ai-vo/AiVoHeader';
import AiSpeech from './components/ai/ai-speechtotext/AiSpeech';
import Affliate from './components/Affliate';
import PostTitle from './components/ai/ai-writer/PostTitle';
import SummaryText from './components/ai/ai-writer/SummryText';
import Dashboard from './components/Dashboard';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignIn onLogin={handleLogin} />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} /> {/* New route for Forget Password */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/aiwriter" element={<ProtectedRoute element={<AiWriter />} />} />
          <Route path="/post_title_generator" element={<ProtectedRoute element={<PostTitle/>} />} />
          <Route path="/summarize_text" element={<ProtectedRoute element={<SummaryText/>} />} />
          <Route path="/aiheadervideo" element={<ProtectedRoute element={<AiVideoHeader />} />} />
          <Route path="/aichat" element={<ProtectedRoute element={<AiChatHeader />} />} />
          <Route path="/aichatx" element={<ProtectedRoute element={<AiChatx/> } />} />
          <Route path="/ai-vision" element={<ProtectedRoute element={<AiVision/> } />} />
          <Route path="/brandvoice" element={<ProtectedRoute element={<BrandVoice/> } />} />
          <Route path="/airewriterheader" element={<ProtectedRoute element={<AiRewriterHeader />} />} />
          <Route path="/aichatimageheader" element={<ProtectedRoute element={<AiChatImageHeader />}/>} />

          <Route path="/aicodeheader" element={<ProtectedRoute element={<AiCodeHeader />} />} />
          <Route path="/aiyoutubeheader" element={<ProtectedRoute element={<AiYoutubeHeader />}/>} />
          <Route path="/airssheader" element={<ProtectedRoute element={<AiRssHeader />} />} />
          {/* <Route path="/aisttheader" element={<ProtectedRoute element={<AiSttHeader />} />} /> */}
          <Route path="/aivoheader" element={<ProtectedRoute element={<AiVoHeader />} />} />
          <Route path="/aispeech" element={<ProtectedRoute element={<AiSpeech/>} />} />
          <Route path="/affliate" element={<ProtectedRoute element={<Affliate/>} />} />

          <Route path="/aiimage" element={<ProtectedRoute element={<AiHeader  />} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
