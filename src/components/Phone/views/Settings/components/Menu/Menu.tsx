import styled from '@emotion/styled';
import React from 'react';
import { Header } from '../Header';
import { List } from './List';

const Container = styled.div`
  height: 100%;
`;

export const Menu = () => {
  return (
    <Container>
      <Header />
      <List></List>
    </Container>
  );
};
