import Navbar from '../../Navbar'; // Adjust the path as necessary
import Sidebar from '../../Sidebar'; // Adjust the path as necessary
import Footer from '../../Footer'; // Adjust the path as necessary
import AiChatContent from './AiChatContent';

const AiHeader = () => {
    return (
        <>
            <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar style={{ flex: '0 0 200px' }} /> 
                    {/* <div className="content-wrapper" style={{ backgroundColor: 'white' }}>
                    <div className="d-flex flex-column flex-grow-1">
                       
                    </div>
                    </div> */}
                    <AiChatContent/>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AiHeader;
