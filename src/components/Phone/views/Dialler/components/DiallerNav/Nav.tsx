import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { IoIosKeypad, IoIosTime } from 'react-icons/io';
import { NavTab } from './NavTab';

export const Nav = () => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="space-around">
      <NavTab text="Ostatnie" icon={IoIosTime} redirect="phone~~dialler~recent" />
      <NavTab text="Klawiatura" icon={IoIosKeypad} redirect="phone~~dialler" />
    </Flex>
  );
};
