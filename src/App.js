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
import ProdDesc from './components/ai/ai-writer/ProductDesc';
import ArticleGenerator from './components/ai/ai-writer/ArticleGen';
import ProductName from './components/ai/ai-writer/ProductNameGen';
import TestimonalReview from './components/ai/ai-writer/TestimonalRev';
import ProblemAgit from './components/ai/ai-writer/ProblemAgitate';
import BlogSec from './components/ai/ai-writer/BlogSection';
import BlogPost from './components/ai/ai-writer/BlogPostIdeas';
import BlogIntro from './components/ai/ai-writer/BlogIntros';
import BlogConc from './components/ai/ai-writer/BlogConclusion';
import FacebookAd from './components/ai/ai-writer/FacebookAds';
import YoutubeDesc from './components/ai/ai-writer/YoutubeVideoDesc';
import YoutubeTitle from './components/ai/ai-writer/YoutubeVideoTitle';
import YoutubeTag from './components/ai/ai-writer/YoutubeVideoTag';
import InstaCap from './components/ai/ai-writer/InstaCaptions';
import InstaHash from './components/ai/ai-writer/InstaHashtags';
import SocialTweet from './components/ai/ai-writer/SocialMediaPostTweet';
import SocialBusiness from './components/ai/ai-writer/SocialMediaPostBusiness';
import FacebookHead from './components/ai/ai-writer/FacebookHeadlines';
import GoogleHead from './components/ai/ai-writer/GoogleAdsHeadline';
import GoogleDesc from './components/ai/ai-writer/GoogleAdsDesc';
import ParaGen from './components/ai/ai-writer/ParagraphGenerator';
import ProCon from './components/ai/ai-writer/ProsCons';
import MetaDes from './components/ai/ai-writer/MetaDesc';
import FaqGene from './components/ai/ai-writer/FaqGen';
import EmailGene from './components/ai/ai-writer/EmailGen';
import EmailAnsGene from './components/ai/ai-writer/EmailAnsGen';
import NewsGene from './components/ai/ai-writer/NewsLetterGen';
import GramCorr from './components/ai/ai-writer/GrammerCorr';
import TlDr from './components/ai/ai-writer/TLDRSum';
import CustGene from './components/ai/ai-writer/CustomGen';
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
          <Route path="/product_desc" element={<ProtectedRoute element={<ProdDesc/>} />} />
          <Route path="/article_gen" element={<ProtectedRoute element={<ArticleGenerator/>} />} />
          <Route path="/prod_name" element={<ProtectedRoute element={<ProductName/>} />} />
          <Route path="/test_review" element={<ProtectedRoute element={<TestimonalReview/>} />} />
          <Route path="/prob_agit" element={<ProtectedRoute element={<ProblemAgit/>} />} />
          <Route path="/blog_sec" element={<ProtectedRoute element={<BlogSec/>} />} />
          <Route path="/blog_post" element={<ProtectedRoute element={<BlogPost/>} />} />
          <Route path="/blog_intro" element={<ProtectedRoute element={<BlogIntro/>} />} />
          <Route path="/blog_conc" element={<ProtectedRoute element={<BlogConc/>} />} />
          <Route path="/facebook_ad" element={<ProtectedRoute element={<FacebookAd/>} />} />
          <Route path="/youtube_desc" element={<ProtectedRoute element={<YoutubeDesc/>} />} />
          <Route path="/youtube_title" element={<ProtectedRoute element={<YoutubeTitle/>} />} />
          <Route path="/youtube_tag" element={<ProtectedRoute element={<YoutubeTag/>} />} />
          <Route path="/insta_cap" element={<ProtectedRoute element={<InstaCap/>} />} />
          <Route path="/insta_hash" element={<ProtectedRoute element={<InstaHash/>} />} />
          <Route path="/social_tweet" element={<ProtectedRoute element={<SocialTweet/>} />} />
          <Route path="/social_business" element={<ProtectedRoute element={<SocialBusiness/>} />} />
          <Route path="/facebook_head" element={<ProtectedRoute element={<FacebookHead/>} />} />
          <Route path="/google_head" element={<ProtectedRoute element={<GoogleHead/>} />} />
          <Route path="/google_desc" element={<ProtectedRoute element={<GoogleDesc/>} />} />
          <Route path="/para_gen" element={<ProtectedRoute element={<ParaGen/>} />} />
          <Route path="/pro_con" element={<ProtectedRoute element={<ProCon/>} />} />
          <Route path="/meta_desc" element={<ProtectedRoute element={<MetaDes/>} />} />
          <Route path="/faq_gen" element={<ProtectedRoute element={<FaqGene/>} />} />
          <Route path="/email_gen" element={<ProtectedRoute element={<EmailGene/>} />} />
          <Route path="/email_ans_gen" element={<ProtectedRoute element={<EmailAnsGene/>} />} />
          <Route path="/news_gen" element={<ProtectedRoute element={<NewsGene/>} />} />
          <Route path="/gram_corr" element={<ProtectedRoute element={<GramCorr/>} />} />
          <Route path="/tldr_sum" element={<ProtectedRoute element={<TlDr/>} />} />
          <Route path="/custom_gen" element={<ProtectedRoute element={<CustGene/>} />} />
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
