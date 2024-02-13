import React from 'react';
<<<<<<< HEAD
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import '../styles/popup.css';

const PopupComponent = ({ isOpen, onClose, children }) => {
  return (
    <div className={isOpen ? 'popup-overlay active' : 'popup-overlay'} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <IconButton className="close-btn" onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <CloseIcon />
        </IconButton>
=======
import '../styles/popup.css'
const Popup = ({ isOpen, onClose, children }) => {
  return (
    <div className={isOpen ? 'popup-overlay active' : 'popup-overlay'} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>Закрыть</button>
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
        {children}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default PopupComponent;
=======
export default Popup;
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
