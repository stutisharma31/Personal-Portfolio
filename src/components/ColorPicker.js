import React from 'react';
import styled from 'styled-components';

const ColorPickerContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;



    @media (max-width: 768px) {
    display: none;
  }
`;


const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ColorPicker = ({ onChange }) => {
  const colors = [
    '#854CE6', // Original purple
    '#00C853', // Green
    '#FF5722', // Deep Orange
    '#2196F3', // Blue
    '#FFC107', // Amber
    '#E91E63', // Pink
    '#9C27B0', // Purple
    '#673AB7', // Deep Purple

    '#FFEB3B', // Yellow
    '#FF9800', // Orange
    '#FF5722', // Deep Orange
    '#795548', // Brown
    '#607D8B', // Blue Grey
  ];

  return (
    <ColorPickerContainer style={{ }}>
      {colors.map((color) => (
        <ColorButton
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        />
      ))}
    </ColorPickerContainer>
  );
};

export default ColorPicker;
