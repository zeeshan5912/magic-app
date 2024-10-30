import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Sidebar from '../components/Sidebar'; // Adjust the path as necessary
import Footer from '../components/Footer';
import { Toast } from 'react-bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css'; 

const Affliate = () => {
    const [toastVisible, setToastVisible] = useState(false);

    const handleCopyLink = () => {
        const copyInput = document.getElementById('copyInput');
        navigator.clipboard.writeText(copyInput.value)
            .then(() => setToastVisible(true))
            .catch(err => console.error('Failed to copy: ', err));
    };

    return (
        <>
        <div className="dashboard-container">
                <Navbar />
                <div className="d-flex">
                    <Sidebar style={{ flex: '0 0 200px' }} />
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
            <div className="row g-4 pb-4">
                <div className="col-lg-6">
                    <h3 className="w-100 mb-0">Affiliate</h3>
                </div>
                <div className="col-lg-6 aimg">
                    <div className="d-flex justify-content-center justify-content-lg-end">
                        <a href=" " className="btn btn-primary">
                            <span className="d-flex align-items-center">Affiliate Users</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="card affliateSection">
                <div className="card-body p-4 p-lg-5">
                    <div className="row">
                        <div className="col-lg-7 AffiliateLink">
                            <h4>Invite your friends and earn lifelong recurring commissions from every purchase they make.🎁</h4>
                            <p className="mt-5">Affiliate Link</p>
                            <div className="input-group mb-3 AffiliateLinkinput">
                                <input
                                    type="url"
                                    id="copyInput"
                                    className="form-control form-control-sm"
                                    value="https://www.youtube.com/watch?v=surtWfxTeEg&t=3040s&ab_channel=FeelingGoodPlaylist"
                                    readOnly
                                    aria-describedby="copyIcon"
                                />
                                <span className="input-group-text" id="copyIcon" onClick={handleCopyLink}>
                                    <i className="mdi mdi-content-copy"></i>
                                </span>
                            </div>

                            {/* Toast for Success Message */}
                            <Toast 
                                onClose={() => setToastVisible(false)} 
                                show={toastVisible} 
                                delay={3000} 
                                autohide 
                                style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 1055 }}
                            >
                                <Toast.Body>
                                    <i className="mdi mdi-check-circle-outline me-3 fs-4"></i>
                                    <span>Affiliate Link copied to clipboard!</span>
                                </Toast.Body>
                            </Toast>
                        </div>
                        <div className="col-lg-5 mt-3 mt-lg-0 earnings">
                            <h5 className="text-center">Earnings</h5>
                            <h1 className="text-center">$0</h1>
                            <p className="text-center mb-0">Commission Rate: <span>10%</span></p>
                            <p className="text-center mb-0">Referral Program: <span>All Purchases</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-5">
                <div className="row g-4">
                    <div className="col-lg-6 HowitWorks">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="fwbolder mb-4">How it Works</h3>
                                <p><span className="count">1</span>You <span className="fwbolder">send your invitation link</span> to your friends.</p>
                                <p><span className="count">2</span><span className="fwbolder">They subscribe</span> to a paid plan by using your referral link.</p>
                                <p><span className="count">3</span>From their first purchase, you will begin <span className="fwbolder">earning recurring commissions.</span></p>
                                <form>
                                    <div className="mt-4 mb-3">
                                        <label htmlFor="validationCustomUsername" className="form-label">Affiliate Link</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="mdi mdi-email"></i></span>
                                            <input type="text" className="form-control form-control-sm" placeholder="Email Address" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                            <div className="invalid-feedback"> Enter email </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-sm btn-primary w-100">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 WithdrawalForm">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <h3 className="fwbolder mb-4">Withdrawal Form</h3>
                                    <div className="mt-4 mb-3">
                                        <label htmlFor="" className="form-label">Your Bank Information</label>
                                        <textarea className="form-control" placeholder="Bank of America - 2382372329 3843749 2372379" rows="3"></textarea>
                                    </div>
                                    <div className="mt-4 mb-3">
                                        <label htmlFor="" className="form-label">Amount</label>
                                        <input type="number" className="form-control form-control-sm" placeholder="Minimum Withdrawal Amount is 10" />
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-sm btn-primary w-100">Send Request</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-5 WithdrawalRequests">
                <div className="card-body">
                    <h4 className="mb-4">Withdrawal Requests</h4>
                    <div className="table-responsive">
                        <table className="myTable" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>AMOUNT</th>
                                    <th>STATUS</th>
                                    <th>DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-4 text-center fw-bolder" colSpan="4">You have no withdrawal request</td>
                                </tr>
                            </tbody>
                        </table>
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



export default Affliate
