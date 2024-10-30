import Navbar from '../../Navbar'; // Adjust the path as necessary
import Sidebar from '../../Sidebar'; // Adjust the path as necessary
import Footer from '../../Footer'; // Adjust the path as necessary
import AiVideoGenerator from './AiVideoGenerator';
import VideoIdeaExplainComponent from './VideoIdeaExplainComponent';
import VideoAiTools from './VideoAiTools';
import IdeaList3 from './IdeaList3';
// import AIImageCards from './AIImageCards';

const AiVideoHeader = () => {
    return (
        <>
            <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar style={{ flex: '0 0 200px' }} /> {/* Adjust width as needed */}
                    <div className="d-flex flex-column flex-grow-1">
                        <AiVideoGenerator />
                        {/* <AIImageCards /> */}
                        <div className="card" style={{backgroundColor: 'rgba(172, 57, 212, 0.2)'}}>
                        <div className="card-body">
                        <div className="First-tab">
                        <VideoIdeaExplainComponent/>
                        <IdeaList3/>
                        </div>
                        </div>
                        </div>
                       <VideoAiTools/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AiVideoHeader;
