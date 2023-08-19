import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({onClose}) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-container" onClick={handleOverlayClick}>
            <div className="modal">
                <div className="modal-content">
                    <h3>Form Submitted Successfully!</h3>
                    <p>Your form has been submitted successfully.</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
