import { Center, Flex, Text } from '@chakra-ui/layout';
import { selectors as contactsSelectors } from 'rdx/phone/contacts';
import { selectors } from 'rdx/phone/dialler';
import React from 'react';
import { useSelector } from 'react-redux';

export const PickerHeader = () => {
  const number = useSelector(selectors.selectNumber);
  const contact = useSelector(contactsSelectors.selectContactByNumber(parseInt(number)));

  const getHeaderLabel = () => {
    if (number.length < 3) return;

    switch (number) {
      case '911':
        return <Text color="brand.red.dark">Numer alarmowy</Text>;
      case contact?.number.toString():
        if (contact && contact.name) return <Text color="white">{contact.name}</Text>;
      // eslint-disable-next-line no-fallthrough
      default:
        return 'Dodaj numer';
    }
  };

  return (
    <Center>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        m="5px 0"
      >
        <Text minH="32px" lineHeight="32px" fontSize="32px" fontWeight="500">
          {number}
        </Text>
        <Flex
          cursor="pointer"
          color="brand.blue.dark"
          lineHeight="16px"
          minH="16px"
          fontSize="16px"
          fontWeight="500"
          mt="10px"
        >
          {getHeaderLabel()}
        </Flex>
      </Flex>
    </Center>
  );
};
