import React from 'react';
import { QueryRoute } from 'routes/QueryRouter/QueryRoute';
import { Screen } from '../../elements/Screen';
import { About } from './components/About/About';
import { Menu } from './components/Menu/Menu';
import { Wallpaper } from './components/Wallpaper/Wallpaper';

export const Settings = () => {
  return (
    <Screen bg="black">
      <QueryRoute path="phone~~settings" component={() => <Menu />} exact />
      <QueryRoute path="phone~~settings~about" component={() => <About />} />
      <QueryRoute path="phone~~settings~wallpaper" component={() => <Wallpaper />} />
    </Screen>
  );
};
