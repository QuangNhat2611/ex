import React from 'react';
import AnimalCard from './AnimalCard';
import animals from './animals';
import './AnimalCard.css';

function App() {
  const showAdditionalData = (additional) => {
    const substring = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(substring);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Animals</h1>
      <div className="animal-wrapper">
        {animals.map(animal => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditionalData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;