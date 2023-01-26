import React, { useState } from 'react';

function ImageModal({ imageSrc }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img className="image" src={imageSrc} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={imageSrc} />
            <button  className=" btn"onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageModal;
