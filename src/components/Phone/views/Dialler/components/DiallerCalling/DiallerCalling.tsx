import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { CallingButtons } from './CallingButtons';
import { CallingControls } from './CallingControls';
import { CallingHeader } from './CallingHeader';

export const DiallerCalling = () => {
  return (
    <Flex flex={1} direction="column" p={10}>
      <CallingHeader />
      <CallingButtons />
      <CallingControls />
    </Flex>
  );
};
