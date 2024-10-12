import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';


const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
`;

const CursorImage = styled.img`
  position: absolute;
  width: 32px; // Adjust size as needed
  height: 32px; // Adjust size as needed
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  pointer-events: none;
  z-index: 9999;
`;

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <CursorContainer>
      <CursorImage ref={cursorRef} src="https://cdn.custom-cursor.com/packs/9822/ok-ko-wally-the-white-pack.png" alt="Cursor" />
    </CursorContainer>
  );
};

export default CustomCursor;