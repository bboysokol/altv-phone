import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  margin: 3px 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const Icon = styled.div`
  margin-top: 5px;
  height: 40px;
  width: 40px;
  background-image: url('assets/images/mazebank.png');
  background-size: cover;
  background-repeat: no-repeat;
  animation: pulse 2s infinite ease-in-out;
`;

const Spacer = styled.div`
  flex: 1;
`;

export const Header: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <Spacer />
      <Icon />
    </Container>
  );
};
