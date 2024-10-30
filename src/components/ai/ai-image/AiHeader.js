import Navbar from '../../Navbar'; // Adjust the path as necessary
import Sidebar from '../../Sidebar'; // Adjust the path as necessary
import Footer from '../../Footer'; // Adjust the path as necessary
import AIImageGenerator from './AIImageGenerator';
import AiTop from './AiTop';
// import IdeaExplainComponent from './IdeaExplainComponent';
// import IdeaList2 from './IdeaList2';
import ImgAiTools from './ImgAiTools';
import ImgResults from './ImgResults';
// import AIImageCards from './AIImageCards';

const AiHeader = () => {
    return (
        <>
            <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar style={{ flex: '0 0 200px' }} /> {/* Adjust width as needed */}
                    <div className="content-wrapper" style={{ backgroundColor: 'white' }}>
                    <div className="d-flex flex-column flex-grow-1">
                        <AIImageGenerator />
                        <AiTop/>
                        {/* <AIImageCards /> */}
                        {/* <div className="card" style={{backgroundColor: '#e4e4fa'}}>
                        <div className="card-body">
                        <div className="First-tab">
                        <IdeaExplainComponent/>
                        <IdeaList2/>
                        </div>
                        </div>
                        </div> */}
                       <ImgAiTools/>
                       {/* <ImgResults/> */}
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AiHeader;
