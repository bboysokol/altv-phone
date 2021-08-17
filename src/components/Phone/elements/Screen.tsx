import { Flex } from '@chakra-ui/layout';
import { keyframes } from '@chakra-ui/system';
import React from 'react';
import { MainButton } from './MainButton';
import { StatusBar } from './StatusBar/StatusBar';

const scaleUp = keyframes`
    0% {
        opacity: 0.2;
        transform: scale(1.05);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export type ScreenProps = {
  color?: string;
  bg?: string;
};

export const Screen: React.FC<ScreenProps> = ({ children, bg = 'gray.900', color = 'white' }) => {
  return (
    <Flex h="100%" w="100%" flex={1} bg={bg} color={color} direction="column">
      <StatusBar />
      <Flex
        flex={1}
        bg={bg === 'transparent' ? '' : 'black'}
        direction="column"
        overflow="hidden"
        animation={`ease-in-out 0.3s ${scaleUp}`}
      >
        {children}
      </Flex>
      <MainButton bg={color} />
    </Flex>
  );
};
