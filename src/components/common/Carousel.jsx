import React from 'react';
import styled from 'styled-components';

function Carousel() {
  return <StyledCarousel />;
}

const StyledCarousel = styled.div`
  display: block;
  margin: 0 auto;
  background-color: black;
  border-radius: 2px;
  width: 320px;
  height: 320px;
`;

export default Carousel;
