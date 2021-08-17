import { AspectRatio, Box, Flex } from '@chakra-ui/layout';
import { keyframes } from '@chakra-ui/system';
import styled from '@emotion/styled';
import React from 'react';

const vibrateAnimation = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -1px) rotate(-1deg); }
    20% { transform: translate(-1px, 0px) rotate(1deg); }
    30% { transform: translate(1px, 1px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 1px) rotate(-1deg); }
    60% { transform: translate(-1px, 1px) rotate(0deg); }
    70% { transform: translate(1px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 1px) rotate(0deg); }
    100% { transform: translate(1px, 1px) rotate(0deg); }
`;

const Border = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('assets/images/phone/ifruitborder.png');
  background-position: center;
  background-size: 100%;
  pointer-events: none;
`;

export type FrameProps = {
  vibrate?: boolean;
};

export const Frame: React.FC<FrameProps> = ({ children, vibrate }) => {
  return (
    <Box w="100%">
      <AspectRatio
        maxW="100%"
        ratio={416 / 823}
        backgroundPosition="center"
        animation={vibrate ? `1s ${vibrateAnimation} ease-in-out infinite` : ''}
      >
        <Flex w="100%" h="100%" flex={1}>
          <Border />
          <Flex
            w="100%"
            h="100%"
            flex={1}
            px="4.5%"
            py="7.5%"
            justifyContent="center"
            alignItems="center"
          >
            <Flex h="96.3%" flex={1} borderRadius="30px" overflow="hidden">
              <Flex flex={1} direction="column">
                {children}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </AspectRatio>
    </Box>
  );
};
