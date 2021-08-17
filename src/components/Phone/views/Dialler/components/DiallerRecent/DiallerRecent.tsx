import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { Nav } from '../DiallerNav/Nav';
import { List } from './components/List';

const Container = styled.div`
  height: 100%;
`;

export const DiallerRecent = () => {
  return (
    <Container>
      <Text my={0} px="20px">
        Ostatnie połączenia
      </Text>
      <List></List>
      <Nav />
    </Container>
  );
};
