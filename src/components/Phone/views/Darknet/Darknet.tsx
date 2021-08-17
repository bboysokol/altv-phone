import styled from '@emotion/styled';
import React from 'react';
import { Screen } from '../../elements/Screen';

const Container = styled.div`
  flex: 1;
  background-image: url('https://i.pinimg.com/originals/5f/30/1d/5f301dccbe9989bdaf1e95364202d910.gif');
  background-size: cover;
  background-position-x: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  height: 50%;
  width: 80%;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14pt;

  p {
    color: gray;
    font-size: 9pt;
  }
`;

export const Darknet = () => {
  return (
    <Screen bg="black">
      <Container>
        <Info>NO ACCESS</Info>
      </Container>
    </Screen>
  );
};
