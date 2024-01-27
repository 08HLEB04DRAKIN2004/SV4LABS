import React from 'react';
import '../styles/popup.css'
const Popup = ({ isOpen, onClose, children }) => {
  return (
    <div className={isOpen ? 'popup-overlay active' : 'popup-overlay'} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>Закрыть</button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
