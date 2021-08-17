import { Flex, Text } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { actions } from 'rdx/phone/dialler';
import React from 'react';
import { useDispatch } from 'react-redux';
import DiallingButton from '../DiallerCalling/DiallingButton';

type DialProps = {
  digit: string;
  additional?: string;
};

const Dial = ({ digit, additional }: DialProps) => {
  const dispatch = useDispatch();

  const handleClick = debounce(() => {
    dispatch(actions.pushDigit(digit));
  }, 20);

  return (
    <Flex
      flex="1 0 33%"
      justifyContent="center"
      my={2}
      _hover={{ opacity: '0.8' }}
      _active={{ opacity: '0.6' }}
      onClick={handleClick}
    >
      <DiallingButton
        size="75px"
        activeBgColor="gray.800"
        activeColor="white"
        activated
        activeIcon={
          <>
            <Text fontSize="32px" fontWeight="300" lineHeight="11pt" mb={2} mt={5}>
              {digit}
            </Text>
            <Text fontSize="10px" w="100%" letterSpacing="3px" fontWeight="500" my={0}>
              {additional}
            </Text>
          </>
        }
        onClick={handleClick}
      />
    </Flex>
  );
};

export const PickerKeyboard = () => {
  return (
    <Flex flexWrap="wrap" px={4}>
      <Dial digit="1" additional=" " />
      <Dial digit="2" additional="ABC" />
      <Dial digit="3" additional="DEF" />
      <Dial digit="4" additional="GHI" />
      <Dial digit="5" additional="JKL" />
      <Dial digit="6" additional="MNO" />
      <Dial digit="7" additional="PQRS" />
      <Dial digit="8" additional="TUV" />
      <Dial digit="9" additional="WXYZ" />
      <Dial digit="*" />
      <Dial digit="0" additional="+" />
      <Dial digit="#" additional=" " />
    </Flex>
  );
};
