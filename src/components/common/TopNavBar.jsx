import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../components/common/theme';

function TopNavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <BackButton>←</BackButton>
        <Title>Home</Title>
        <Search>🔍</Search>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BackButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Search = styled(BackButton)``;
export default TopNavBar;
