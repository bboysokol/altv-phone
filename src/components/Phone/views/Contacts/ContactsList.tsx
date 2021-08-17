import { Checkbox } from '@chakra-ui/checkbox';
import { Center, Flex, Text } from '@chakra-ui/layout';
import useLongPress from 'hooks/useLongPress';
import { actions as contactsActions, selectors } from 'rdx/phone/contacts';
import { actions } from 'rdx/phone/dialler';
import React from 'react';
import { IoIosCall, IoIosChatbubbles } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';

type ContactItemProps = {
  id: number;
  name: string;
  number: number;
};

const ContactItem = ({ id, name, number }: ContactItemProps) => {
  const { navigate } = useQueryRouterNav();
  const contactsToDelete = useSelector(selectors.selectContactsToDelete);
  const isDeleteMode = useSelector(selectors.selectDeleteMode);
  const dispatch = useDispatch();

  const handleCall = () => {
    dispatch(actions.setCallNumber(number.toString()));
    navigate('phone~~dialler');
  };

  const handleSelect = (id: number) => {
    if (contactsToDelete.find((item) => item === id))
      dispatch(contactsActions.removeIdFromDelete(id));
    else dispatch(contactsActions.addIdToDelete(id));
  };

  const onLongPress = () => {
    if (isDeleteMode) dispatch(contactsActions.resetIdsToDelete());
    dispatch(contactsActions.setDeleteMode(!isDeleteMode));
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const longPressEvent = useLongPress(onLongPress, () => {}, defaultOptions);

  const handleMessage = () => {
    navigate('phone~~messages~message', { from: number.toString() });
  };

  return (
    <Flex
      py={2}
      px={3}
      borderBottom="2px solid"
      borderColor="gray.800"
      alignItems="center"
      justifyContent="space-between"
      {...longPressEvent}
      _hover={{ backgroundColor: 'rgba(240, 159, 159, 0.05)' }}
    >
      <Flex maxW="68%">
        <Flex
          justifyContent="center"
          alignItems="center"
          w="40px"
          h="40px"
          borderRadius="50%"
          bg="gray.400"
          mr="20px"
          textOverflow="ellipsis"
        >
          <Text fontSize="15pt" my={0}>
            {name[0]}
          </Text>
        </Flex>
        <Flex whiteSpace="nowrap" direction="column" maxW="70%" justifyContent="center">
          <Text fontSize="10pt" overflow="hidden" textOverflow="ellipsis" my={0}>
            {name}
          </Text>
          <Text fontSize="8pt" color="gray.300" my={0}>
            {number}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Center
          h="100%"
          onClick={handleMessage}
          _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          borderRadius="50%"
          p={1}
          color="brand.blue.dark"
        >
          <IoIosChatbubbles size="25px" />
        </Center>
        <Center
          h="100%"
          onClick={handleCall}
          _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          borderRadius="50%"
          p={1}
          mx={1}
          color="brand.green.dark"
        >
          <IoIosCall size="25px" />
        </Center>
        {isDeleteMode && id !== 0 ? (
          <Checkbox
            colorScheme="red"
            isChecked={!!contactsToDelete.find((itemId) => itemId === id)}
            onChange={() => handleSelect(id)}
          />
        ) : (
          ''
        )}
      </Flex>
    </Flex>
  );
};

export const ContactsList = () => {
  const contacts = useSelector(selectors.selectContacts);

  return (
    <Flex flex={1} w="100%" overflow="auto" pb="30px">
      <Flex w="100%" direction="column" margin="auto" mt={0}>
        {contacts.map((item) => (
          <ContactItem key={item.number} {...item} />
        ))}
      </Flex>
    </Flex>
  );
};
