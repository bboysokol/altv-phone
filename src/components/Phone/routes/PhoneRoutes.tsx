import React from 'react';
import { QueryRoute } from 'routes/QueryRouter/QueryRoute';
import { Bleeter } from '../views/Bleeter/Bleeter';
import { Contacts } from '../views/Contacts/Contacts';
import { Darknet } from '../views/Darknet/Darknet';
import { Dialler } from '../views/Dialler/Dialler';
import { LifeInvader } from '../views/LifeInvader/LifeInvader';
import { LockedScreen } from '../views/LockedScreen/LockedScreen';
import { MainScrreen } from '../views/MainScreen/MainScreen';
import { MazeBank } from '../views/MazeBank/MazeBank';
import { Messages } from '../views/Messages/Messages';
import { Settings } from '../views/Settings/Settings';

export const PhoneRoutes = () => {
  return (
    <>
      <QueryRoute path="phone~~main" component={() => <MainScrreen />} />
      <QueryRoute path="phone~~locked" component={() => <LockedScreen />} />
      <QueryRoute path="phone~~settings" component={() => <Settings />} />
      <QueryRoute path="phone~~bleeter" component={() => <Bleeter />} />
      <QueryRoute path="phone~~mazebank" component={() => <MazeBank />} />
      <QueryRoute path="phone~~darknet" component={() => <Darknet />} />
      <QueryRoute path="phone~~lifeinvader" component={() => <LifeInvader />} />
      <QueryRoute path="phone~~dialler" component={() => <Dialler />} />
      <QueryRoute path="phone~~messages" component={() => <Messages />} />
      <QueryRoute path="phone~~contacts" component={() => <Contacts />} />
    </>
  );
};
