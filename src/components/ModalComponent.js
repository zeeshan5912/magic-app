
import React, { useState, useEffect, useRef } from 'react';

function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className='addnew btn d-flex align-items-center p-2 px-2' onClick={openModal}>New</button>

      {isModalOpen && (
        <div className="modal-backdrop" style={backdropStyle}>
          <div ref={modalRef} className="modal-content" style={modalStyle}>
            <h2 style={{color:'black'}}>Ai Super Generator</h2>
            <p  style={{color:'black'}}>Content</p>
          </div>
        </div>
      )}
    </div>
  );
}
// Inline CSS styles for simplicity
const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999, // Ensure backdrop is on top of everything
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxWidth: '400px', // Card width
  width: '100%', // Responsive
  textAlign: 'center', // Center text inside modal
};

export default ModalComponent;

