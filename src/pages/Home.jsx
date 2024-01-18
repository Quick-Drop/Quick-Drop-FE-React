import React from 'react';
import styled from 'styled-components';
import TopNavBar from '../components/common/TopNavBar';

function Home() {
  return (
    <Wrapper>
      <TopNavBar />
      <Category />
      <NavBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Category = styled.div``;
const NavBar = styled.div``;

export default Home;
