import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional
}) {
  return (
    <div className="animal-card">
      <h2>{name}</h2>
      <ul>
        <li><strong>Scientific Name:</strong> {scientificName}</li>
        <li><strong>Size:</strong> {size} kg</li>
        <li><strong>Diet:</strong> {diet.join(', ')}.</li>
      </ul>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
}

// Định nghĩa PropTypes để kiểm tra kiểu dữ liệu truyền vào
AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

// Định nghĩa defaultProps để phòng hờ trường hợp thiếu dữ liệu (như trường hợp của Lion)
AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
    link: 'No Additional Information'
  }
};