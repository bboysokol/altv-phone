import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Center, Flex, Text } from '@chakra-ui/layout';
import { actions, selectors } from 'rdx/phone/messages';
import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { IoIosSearch, IoIosTrash } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

type ConversationsHeaderProps = {
  onCreate: () => void;
};

export const ConversationsHeader = ({ onCreate }: ConversationsHeaderProps) => {
  const dispatch = useDispatch();
  const isDeleteMode = useSelector(selectors.selectDeleteMode);
  const conversationsToDelete = useSelector(selectors.selectConversationsToDelete);

  const onConversationsDelete = () => {
    dispatch(actions.deleteConversations(conversationsToDelete));
  };

  return (
    <Flex direction="column" mb={3}>
      <Flex alignItems="center" justifyContent="space-between" px={5} my="5px">
        <Text fontSize="18pt" fontWeight="bold" my={0}>
          Wiadomości
        </Text>
        <Flex>
          <Center
            bg="brand.blue.dark"
            w="35px"
            h="35px"
            mx={3}
            borderRadius="50%"
            _hover={{ opacity: 0.9 }}
            _active={{ opacity: 0.8 }}
            onClick={onCreate}
          >
            <BsPencilSquare size="20px" />
          </Center>
          {conversationsToDelete.length > 0 ? (
            <Center
              bg="brand.red.dark"
              w="35px"
              h="35px"
              borderRadius="50%"
              _hover={{ opacity: 0.9 }}
              _active={{ opacity: 0.8 }}
              onClick={onConversationsDelete}
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
              Zaznaczono: {conversationsToDelete.length}
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  );
};
