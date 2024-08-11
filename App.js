import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedParts, setSelectedParts] = useState([]);
  const [isFrontView, setIsFrontView] = useState(true);

  const toggleBodyPart = (partName) => {
    setSelectedParts((prevParts) =>
      prevParts.includes(partName)
        ? prevParts.filter((part) => part !== partName)
        : [...prevParts, partName]
    );
  };

  const handleClick = (event) => {
    const partName = event.target.id;
    if (partName) {
      toggleBodyPart(partName);
    }
  };

  const toggleView = () => {
    setIsFrontView(!isFrontView);
  };

  return (
    <div className="app">
      <h1>Interactive Human Body Model</h1>
      <button onClick={toggleView}>
        Show {isFrontView ? 'Back' : 'Front'} View
      </button>
      <div className="body-model">
        {isFrontView ? (
          <div className="front-view">
            <div
              id="Head"
              className={`body-part ${selectedParts.includes('Head') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Head
            </div>
            <div
              id="Neck"
              className={`body-part ${selectedParts.includes('Neck') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Neck
            </div>
            <div
              id="LeftChest"
              className={`body-part ${selectedParts.includes('LeftChest') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Left Chest
            </div>
            <div
              id="RightChest"
              className={`body-part ${selectedParts.includes('RightChest') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Right Chest
            </div>
            <div
              id="Stomach"
              className={`body-part ${selectedParts.includes('Stomach') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Stomach
            </div>
            <div
              id="UpperLeftArm"
              className={`body-part ${selectedParts.includes('UpperLeftArm') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Upper Left Arm
            </div>
            <div
              id="LowerLeftArm"
              className={`body-part ${selectedParts.includes('LowerLeftArm') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Lower Left Arm
            </div>
            <div
              id="UpperRightArm"
              className={`body-part ${selectedParts.includes('UpperRightArm') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Upper Right Arm
            </div>
            <div
              id="LowerRightArm"
              className={`body-part ${selectedParts.includes('LowerRightArm') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Lower Right Arm
            </div>
            <div
              id="UpperLeftLeg"
              className={`body-part ${selectedParts.includes('UpperLeftLeg') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Upper Left Leg
            </div>
            <div
              id="LowerLeftLeg"
              className={`body-part ${selectedParts.includes('LowerLeftLeg') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Lower Left Leg
            </div>
            <div
              id="UpperRightLeg"
              className={`body-part ${selectedParts.includes('UpperRightLeg') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Upper Right Leg
            </div>
            <div
              id="LowerRightLeg"
              className={`body-part ${selectedParts.includes('LowerRightLeg') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Lower Right Leg
            </div>
          </div>
        ) : (
          <div className="back-view">
            <div
              id="BackHead"
              className={`body-part ${selectedParts.includes('BackHead') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Head
            </div>
            <div
              id="BackNeck"
              className={`body-part ${selectedParts.includes('BackNeck') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Neck
            </div>
            <div
              id="BackLeftShoulder"
              className={`body-part ${selectedParts.includes('BackLeftShoulder') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Left Shoulder
            </div>
            <div
              id="BackRightShoulder"
              className={`body-part ${selectedParts.includes('BackRightShoulder') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Right Shoulder
            </div>
            <div
              id="BackUpperLeftArm"
              className={`body-part ${selectedParts.includes('BackUpperLeftArm') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Upper Left Arm
            </div>
            <div
              id="BackLowerLeftArm"
              className={`body-part ${selectedParts.includes('BackLowerLeftArm') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Lower Left Arm
            </div>
            <div
              id="BackUpperRightArm"
              className={`body-part ${selectedParts.includes('BackUpperRightArm') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Upper Right Arm
            </div>
            <div
              id="BackLowerRightArm"
              className={`body-part ${selectedParts.includes('BackLowerRightArm') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Lower Right Arm
            </div>
            <div
              id="BackUpperLeftLeg"
              className={`body-part ${selectedParts.includes('BackUpperLeftLeg') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Upper Left Leg
            </div>
            <div
              id="BackLowerLeftLeg"
              className={`body-part ${selectedParts.includes('BackLowerLeftLeg') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Lower Left Leg
            </div>
            <div
              id="BackUpperRightLeg"
              className={`body-part ${selectedParts.includes('BackUpperRightLeg') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Upper Right Leg
            </div>
            <div
              id="BackLowerRightLeg"
              className={`body-part ${selectedParts.includes('BackLowerRightLeg') ? 'highlighted' : ''}`}
              onClick={handleClick}
            >
              Back Lower Right Leg
            </div>
          </div>
        )}
      </div>
      <div className="selected-parts">
        <h2>Selected Parts</h2>
        <ul>
          {selectedParts.map((part) => (
            <li key={part}>{part}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
