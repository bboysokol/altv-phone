import { Center, Text } from '@chakra-ui/layout';
import { ContactName } from 'components/Phone/elements/ContactName/ContactName';
import { selectors } from 'rdx/phone/dialler';
import { CallState } from 'rdx/phone/dialler/dialler.slice';
import React from 'react';
import { useSelector } from 'react-redux';
import { CallingTimer } from './CallingTimer';

const Contact = () => {
  const number = useSelector(selectors.selectNumber);

  return (
    <Text minH="70px" fontSize="25pt" fontWeight="500" whiteSpace="normal" mb={0}>
      <ContactName number={number.toString()} />
    </Text>
  );
};

const CallStatus = () => {
  const status = useSelector(selectors.selectStatus);

  const getStatus = () => {
    switch (status) {
      case CallState.pending:
        return 'łączę...';
      case CallState.ended:
      case CallState.canceled:
        return 'rozmowa zakończona';
      case CallState.active:
        return <CallingTimer />;
      case CallState.incomming:
        return 'przychodząca';
      case CallState.busy:
        return 'numer zajęty';
      case CallState.notReachable:
        return 'numer niedostępny';
      case CallState.rejected:
        return 'rozmowa odrzucona';
      default:
        return '';
    }
  };

  return (
    <Text fontSize="16pt" mt={0}>
      {getStatus()}
    </Text>
  );
};

export const CallingHeader = () => {
  return (
    <Center flexDirection="column">
      <Contact />
      <CallStatus />
    </Center>
  );
};
