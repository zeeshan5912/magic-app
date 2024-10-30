import Navbar from '../../Navbar'; // Adjust the path as necessary
import Sidebar from '../../Sidebar'; // Adjust the path as necessary
import Footer from '../../Footer'; // Adjust the path as necessary
import {AiVo} from './AiVo';
// import AIImageCards from './AIImageCards';

const AiVoHeader = () => {
    return (
        <>
            <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar style={{ flex: '0 0 200px' }} /> {/* Adjust width as needed */}
                    <div className="d-flex flex-column flex-grow-1">
                        {/* <AIImageCards /> */}
                        <div className="card" style={{backgroundColor: '#e4e4fa'}}>
                        <div className="card-body">
                        <div className="First-tab">
                        <AiVo/>
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

export default AiVoHeader;
