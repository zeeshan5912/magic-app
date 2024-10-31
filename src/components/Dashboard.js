import React from 'react'
import Navbar from './Navbar'; 
import Sidebar from './Sidebar';
import Footer from './Footer'; 
const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
        <Navbar />
        <div className="d-flex">
            <Sidebar style={{ flex: '0 0 200px' }} /> {/* Adjust width as needed */}
            <div className="d-flex flex-column flex-grow-1">
                <h1 className='mt-5 py-5 pl-5' style={{color:'grey'}}>Upcoming</h1>
                
            </div>
        </div>
    </div>
    <Footer />
</>
  )
}

export default Dashboard
