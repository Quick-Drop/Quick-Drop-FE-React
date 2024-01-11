import React from 'react';
import styled from 'styled-components';
import Carousel from '../../components/Carousel';
import { COLOR } from '../../components/common/color';
import Wrapper from '../../components/common/Wrapper';

function Home() {
  return (
    <Wrapper>
      <SkipButton>Skip</SkipButton>
      <Carousel />
      <Title>
        <div>기부를 손쉽게!</div> 준비 되셨나요?
      </Title>
      <Text>
        Intro & onboarding part for a guide of this application “quick drop”
        blahblahbla
      </Text>
      <SignUpButton>Sign Up</SignUpButton>
      <SignInButton>Sign In</SignInButton>
    </Wrapper>
  );
}

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
  color: ${COLOR.mainPurple};
  width: 60px;
  height: 36px;
`;

const SignUpButton = styled(Button)`
  margin: 10px auto 10px;
  background-color: ${COLOR.mainPurple};
  color: white;
`;
const SignInButton = styled(Button)`
  margin: 10px auto 10px;
  background-color: ${COLOR.lightPurple};
  color: #54408c;
`;

export default Home;
