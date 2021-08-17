import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { IoIosBatteryFull, IoIosCellular } from 'react-icons/io';
import { Time } from '../Time';

export const StatusBar = () => {
  return (
    <Flex
      h="5%"
      p="5px 25px"
      alignItems="center"
      justifyContent="space-between"
      fontSize="10px"
      fontWeight="bold"
    >
      <Time />
      <Flex alignItems="center">
        <IoIosCellular size="12px" />
        <Flex mx="2px">
          <IoIosBatteryFull size="22px" />
        </Flex>
      </Flex>
    </Flex>
  );
};
