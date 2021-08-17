import { Checkbox } from '@chakra-ui/checkbox';
import { Box, Flex, Text } from '@chakra-ui/layout';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import calendarPlugin from 'dayjs/plugin/calendar';
import Conversation from 'interfaces/Messages/Conversation';
import Message from 'interfaces/Messages/Message';
import { selectors } from 'rdx/phone/contacts';
import { actions, selectors as messageSelectors } from 'rdx/phone/messages';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import useLongPress from '../../../../../../hooks/useLongPress';

dayjs.locale('pl');
dayjs.extend(calendarPlugin);

const ConversationIndicator: React.FC<{ from: string }> = ({ from }) => {
  return (
    <Flex alignItems="center">
      <Box w="15px" h="15px" borderRadius="50%" bg="transparent" mx={2} />
      <Flex
        justifyContent="center"
        alignItems="center"
        w="40px"
        h="40px"
        borderRadius="50%"
        bg="gray.400"
        mr={4}
      >
        <Text fontSize="15pt" m={0}>
          {from[0]}
        </Text>
      </Flex>
    </Flex>
  );
};

type ConversationDetailsProps = {
  from: string;
  lastMessage: Message;
  id: number;
};

const ConversationDetails = ({ from, lastMessage, id }: ConversationDetailsProps) => {
  const isDeleteMode = useSelector(messageSelectors.selectDeleteMode);
  const conversationsToDelete = useSelector(messageSelectors.selectConversationsToDelete);
  const dispatch = useDispatch();

  const handleSelect = (id: number) => {
    if (conversationsToDelete.find((item) => item === id)) dispatch(actions.removeIdFromDelete(id));
    else dispatch(actions.addIdToDelete(id));
  };

  return (
    <Flex direction="column" overflow="hidden" w="100%">
      <Flex flex={1} justifyContent="space-between" alignItems="center" fontSize="12pt">
        <Text fontSize="10pt" my={0}>
          {' '}
          {from}{' '}
        </Text>
        {!isDeleteMode ? (
          <Flex
            maxW="130px"
            whiteSpace="nowrap"
            fontSize="9pt"
            alignItems="center"
            color="gray.300"
            justifyContent="space-between"
          >
            <Text overflow="hidden" textOverflow="ellipsis" my={0}>
              {dayjs(lastMessage.created).calendar('', {
                sameDay: '[Dzisiaj o] HH:mm',
                nextDay: '[Jutro o] HH:mm',
                nextWeek: 'dddd [o] HH:mm',
                lastDay: '[Wczoraj o] HH:mm',
                lastWeek: 'dddd [o] HH:mm',
                sameElse: 'DD/MM/YYYY',
              })}
            </Text>
            <BiChevronRight size="15pt" />
          </Flex>
        ) : (
          <Checkbox
            mr="25px"
            colorScheme="red"
            isChecked={!!conversationsToDelete.find((itemId) => itemId === id)}
            onChange={() => handleSelect(id)}
          />
        )}
      </Flex>
      <Text fontSize="9pt" overflow="hidden" textOverflow="ellipsis" color="gray.300" my={0}>
        {lastMessage.message.length > 20
          ? `${lastMessage.message.substring(0, 20).trim()}...`
          : lastMessage.message}
      </Text>
    </Flex>
  );
};

export const ConversationItem: React.FC<Conversation> = ({ messages, from, id }) => {
  const contact = useSelector(selectors.selectContactByNumber(parseInt(from)));
  const isDeleteMode = useSelector(messageSelectors.selectDeleteMode);

  const { navigate } = useQueryRouterNav();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isDeleteMode) navigate('phone~~messages~message', { from });
  };

  const onLongPress = () => {
    if (isDeleteMode) dispatch(actions.resetIdsToDelete());
    dispatch(actions.setDeleteMode(!isDeleteMode));
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const longPressEvent = useLongPress(onLongPress, handleClick, defaultOptions);

  return (
    <Flex
      border="1px solid"
      borderWidth="1px 0 0"
      borderColor="gray.900"
      alignItems="center"
      py={3}
      {...longPressEvent}
      _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      w="100%"
    >
      <Flex maxH="65px" w="100%">
        <ConversationIndicator from={contact?.name ?? from} />
        <ConversationDetails
          lastMessage={messages.slice(-1)[0]}
          from={contact?.name ?? from}
          id={id}
        />
      </Flex>
    </Flex>
  );
};
