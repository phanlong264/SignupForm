import React from 'react';
import './ImageSection.css'; // Nếu có file CSS riêng cho ImageSection

const ImageSection = () => {
  return (
    <div className="image-section">
      <img src="/background.png" alt="illustration" className="illustration" />
    </div>
  );
};

export default ImageSection;
