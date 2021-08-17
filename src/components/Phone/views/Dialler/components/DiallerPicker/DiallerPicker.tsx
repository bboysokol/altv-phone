import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Nav } from '../DiallerNav/Nav';
import { PickerControls } from './PickerControls';
import { PickerHeader } from './PickerHeader';
import { PickerKeyboard } from './PickerKeyboard';

export const DialerPicker = () => {
  return (
    <Flex direction="column">
      <PickerHeader />
      <PickerKeyboard />
      <PickerControls />
      <Nav />
    </Flex>
  );
};
