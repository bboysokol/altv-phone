import { Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Screen } from '../../elements/Screen';

export const Bleeter = () => {
  return (
    <Screen bg="white" color="black">
      <Center flex={1} bg="white" flexDirection="column">
        <Flex
          bgGradient="linear(to-b, rgb(44, 175, 87), rgb(44, 175, 87))"
          borderRadius="15px"
          p={3}
          mb={5}
        >
          <Image w="200px" h="200px" src="assets/images/bleeter.png" />
        </Flex>
        <Text fontSize="18pt">Serwis niedostępny...</Text>
      </Center>
    </Screen>
  );
};
