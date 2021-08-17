import { Flex } from '@chakra-ui/layout';
import { Screen } from 'components/Phone/elements/Screen';
import { actions, selectors } from 'rdx/phone/messages';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewChat } from '../NewChat';
import { ConversationsHeader } from './ConversationsHeader';
import { ConversationItem } from './ConversationsItem';

const ConversationListContainer = () => {
  const dispatch = useDispatch();
  const conversations = useSelector(selectors.selectConversations);

  useEffect(() => {
    dispatch(actions.fetchConversations());
    return () => {
      dispatch(actions.resetIdsToDelete());
      dispatch(actions.setDeleteMode(false));
    };
  }, []);

  return (
    <Flex overflow="auto" mb={8} h="87%">
      <Flex direction="column" h="fit-content" w="100%">
        {conversations.map((item) => (
          <ConversationItem key={item.id} {...item} />
        ))}
      </Flex>
    </Flex>
  );
};

export const ConversationList = () => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <Screen bg="black">
      <Flex flex={1} direction="column" overflow="hidden" position="relative" w="100%">
        <ConversationsHeader onCreate={() => setIsCreating(true)} />
        <ConversationListContainer />
        <NewChat enabled={isCreating} onCancel={() => setIsCreating(false)} />
      </Flex>
    </Screen>
  );
};
