import { Text } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const Header: React.FC = ({ children }) => {
  return (
    <Container>
      {children}

      <Text px={5} my={3} fontSize="16pt" fontWeight="bold">
        Ustawienia
      </Text>
    </Container>
  );
};
