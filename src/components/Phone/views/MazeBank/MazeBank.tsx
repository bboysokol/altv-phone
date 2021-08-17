import styled from '@emotion/styled';
import React from 'react';
import { QueryRoute } from 'routes/QueryRouter/QueryRoute';
import { Screen } from '../../elements/Screen';
import { Dashboard } from './components/Dashboard/Dashboard';
import { LoadingScreen } from './components/LoadingScreen';
import { NoAccount } from './components/NoAccount';
import { Transfer } from './components/Transfer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: black;
`;

export const MazeBank = () => {
  return (
    <Screen bg="white" color="black">
      <Container>
        <QueryRoute path="phone~~mazebank" component={() => <LoadingScreen />} exact></QueryRoute>
        <QueryRoute path="phone~~mazebank~noaccount" component={() => <NoAccount />}></QueryRoute>
        <QueryRoute path="phone~~mazebank~dashboard" component={() => <Dashboard />}></QueryRoute>
        <QueryRoute path="phone~~mazebank~transfer" component={() => <Transfer />}></QueryRoute>
      </Container>
    </Screen>
  );
};
