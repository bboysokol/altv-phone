import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Center, Flex, Text } from '@chakra-ui/layout';
import { actions, selectors } from 'rdx/phone/contacts';
import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { IoIosCard, IoIosSearch, IoIosTrash } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

type ConversationsHeaderProps = {
  onCreate: () => void;
};

export const ContactsHeader = ({ onCreate }: ConversationsHeaderProps) => {
  const dispatch = useDispatch();
  const isDeleteMode = useSelector(selectors.selectDeleteMode);
  const contactsToDelete = useSelector(selectors.selectContactsToDelete);

  const onSendVCard = () => {
    dispatch(actions.sendVC());
  };

  const onContactsDelete = () => {
    dispatch(actions.removeContacts(contactsToDelete));
  };

  return (
    <Flex direction="column" mb={3}>
      <Flex alignItems="center" justifyContent="space-between" px={5} my="5px">
        <Text fontSize="18pt" fontWeight="bold" my={0}>
          Kontakty
        </Text>
        <Flex>
          <Center
            bg="brand.red.dark"
            w="35px"
            h="35px"
            mr={3}
            borderRadius="50%"
            _hover={{ opacity: 0.9 }}
            _active={{ opacity: 0.8 }}
            onClick={onSendVCard}
          >
            <IoIosCard size="20px" />
          </Center>
          <Center
            bg="brand.blue.dark"
            w="35px"
            h="35px"
            borderRadius="50%"
            _hover={{ opacity: 0.9 }}
            _active={{ opacity: 0.8 }}
            onClick={onCreate}
          >
            <BsPencilSquare size="20px" />
          </Center>
          {contactsToDelete.length > 0 ? (
            <Center
              bg="brand.red.dark"
              w="35px"
              h="35px"
              ml={3}
              borderRadius="50%"
              _hover={{ opacity: 0.9 }}
              _active={{ opacity: 0.8 }}
              onClick={onContactsDelete}
            >
              <IoIosTrash size="20px" />
            </Center>
          ) : (
            ''
          )}
        </Flex>
      </Flex>
      <Flex px={5} alignItems="center" justifyContent="space-between">
        {!isDeleteMode ? (
          <InputGroup bg="gray.900" color="gray.600" borderRadius="10px">
            <InputLeftElement>
              <IoIosSearch size="23px" />
            </InputLeftElement>
            <Input
              disabled
              fontSize="13pt"
              variant="filled"
              placeholder="Szukaj"
              focusBorderColor="transparent"
            />
          </InputGroup>
        ) : (
          <>
            <Text fontSize="10pt" my={0}>
              Zaznaczono: {contactsToDelete.length}
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  );
};
