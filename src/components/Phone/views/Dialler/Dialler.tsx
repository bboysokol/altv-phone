import React from 'react';
import { QueryRoute } from 'routes/QueryRouter/QueryRoute';
import { Screen } from '../../elements/Screen';
import { DiallerCalling } from './components/DiallerCalling/DiallerCalling';
import { DialerPicker } from './components/DiallerPicker/DiallerPicker';
import { DiallerRecent } from './components/DiallerRecent/DiallerRecent';

export const Dialler = () => {
  return (
    <Screen bg="black">
      <QueryRoute path="phone~~dialler~calling" component={() => <DiallerCalling />} exact />
      <QueryRoute path="phone~~dialler" component={() => <DialerPicker />} exact />
      <QueryRoute path="phone~~dialler~recent" component={() => <DiallerRecent />} exact />
    </Screen>
  );
};
