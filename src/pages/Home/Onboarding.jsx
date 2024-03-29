import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Carousel from '../../components/Carousel';
import theme, { COLOR } from '../../components/common/theme';

function Onboarding() {
  const signUpOnClick = () => {
    console.log('Sign Up');
  };
  const signInOnClick = () => {
    console.log('Sign In');
  };
  return (
    <ThemeProvider theme={theme}>
      <MobileContainer>
        <SkipButton>Skip</SkipButton>
        <Carousel />
        <Title>
          <div>기부를 손쉽게!</div> 준비 되셨나요?
        </Title>
        <Text>
          Intro & onboarding part for a guide of this application “quick drop”
          blahblahbla
        </Text>
        <SignUpButton onClick={signUpOnClick}>Sign Up</SignUpButton>
        <SignInButton onClick={signInOnClick}>Sign In</SignInButton>
      </MobileContainer>
    </ThemeProvider>
  );
}

const MobileContainer = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;

const Title = styled.h1`
  width: 243px;
  height: 64px;
  margin: 20px auto 20px;
  font-size: 24px;
  text-align: center;
`;

const Text = styled.div`
  display: block;
  margin: 0 auto;
  width: 292px;
  height: 72px;
  color: ${COLOR.gray};
  font-size: 16px;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  display: block;
  border-radius: 12px;
  width: 327px;
  height: 56px;
  border: none;
  font-size: 1em;
  padding: 0.25em 1em;
`;

const SkipButton = styled(Button)`
  background-color: transparent;
  color: ${COLOR.mainGreen};
  width: 60px;
  height: 36px;
  &:hover {
    font-size: 2em;
  }
`;

const SignUpButton = styled(Button)`
  margin: 10px auto 10px;
  background-color: ${COLOR.mainGreen};
  color: ${COLOR.white};
  &:hover {
    background-color: ${COLOR.white};
    color: ${COLOR.mainGreen};
  }
`;
const SignInButton = styled(Button)`
  margin: 10px auto 10px;
  background-color: ${COLOR.lightGreen};
  color: #54408c;
  &:hover {
    background-color: ${COLOR.mainGreen};
    color: ${COLOR.lightGreen};
  }
`;

export default Onboarding;
