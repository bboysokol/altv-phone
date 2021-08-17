import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { ContactName } from 'components/Phone/elements/ContactName/ContactName';
import { Header } from 'components/Phone/elements/Header';
import { Screen } from 'components/Phone/elements/Screen';
import Message from 'interfaces/Messages/Message';
import { actions, selectors } from 'rdx/phone/messages';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { useQueryRouterParam } from 'routes/QueryRouter/useQueryRouterParam';
import { ConversationItem } from './ConversationItem';

const ConversationList: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, []);

  return (
    <Flex overflow="auto" position="relative" w="100%" h="78%" ref={ref}>
      <Flex py={2} direction="column" w="100%">
        {messages.map((item) => (
          <ConversationItem key={item.id} {...item} />
        ))}
        <Box py={1} h="5px" w="100%" />
      </Flex>
    </Flex>
  );
};

const SendIcon = () => {
  return (
    <Flex bg="brand.green.dark" borderRadius="50%">
      <IoIosArrowRoundUp size="30px" />
    </Flex>
  );
};

const MessageKeyboard = () => {
  const { from } = useQueryRouterParam();
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(actions.fetchConversations());
    const interval = setInterval(() => {
      dispatch(actions.fetchConversations());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSend = () => {
    if (message) {
      dispatch(actions.sendMessage({ number: parseInt(from), message, bysystem: false }));
      setMessage('');
      setTimeout(() => {
        dispatch(actions.fetchConversations());
      }, 1000);
    }
  };

  return (
    <Flex p="5px" mb="30px">
      <InputGroup>
        <Textarea
          h="80px"
          py="0px"
          pt="5px"
          justifyContent="center"
          alignItems="center"
          placeholder="Wiadomość"
          fontSize="11pt"
          borderRadius="25px"
          focusBorderColor="brand.blue.dark"
          w="89%"
          maxW="100%"
          resize="none"
          color="white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <InputRightElement cursor="pointer" w="30px" h="35px" onClick={handleSend}>
          <SendIcon />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export const ConversationView = () => {
  const { navigate } = useQueryRouterNav();
  const { from } = useQueryRouterParam();

  if (!from) navigate('phone~~messages');

  const conversation = useSelector(selectors.selectConversationByNumber(`${from}`));
  return (
    <Screen>
      <Header onBack={() => navigate('phone~~messages')} backLabel="">
        <ContactName number={conversation?.from.toString() || `${from}`} />
      </Header>
      <Flex
        flex={1}
        direction="column"
        justifyContent="space-between"
        overflow="hidden"
        position="relative"
      >
        <ConversationList messages={conversation?.messages || []} />
        <MessageKeyboard />
      </Flex>
    </Screen>
  );
};
