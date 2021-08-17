import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-image: no-repeat;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 160px;
  height: 160px;
  background-image: url('assets/images/mazebank.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Text = styled.p`
  text-align: center;
  padding: 10px 0;
  color: black;
  font-size: 18px;
`;

export const NoAccount = () => {
  return (
    <Container>
      <Logo />
      <Text>Nie znaleźliśmy Twojego konta. Udaj się do placówki banku aby otworzyć konto.</Text>
    </Container>
  );
};
