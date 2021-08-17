import { Flex } from '@chakra-ui/layout';
import { actions, selectors } from 'rdx/phone/dialler';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { ListItem } from './ListItem';

export const List = () => {
  const { navigate } = useQueryRouterNav();

  const dispatch = useDispatch();
  const callLogs = useSelector(selectors.selectCallLog);

  useEffect(() => {
    dispatch(actions.getCallLogs());
  }, []);

  const handleClick = (number: number) => {
    dispatch(actions.setCallNumber(number.toString()));
    navigate('phone~~dialler');
  };

  return (
    <Flex flex={1} direction="column" maxHeight="512px" height="512px">
      <Flex direction="column" flex={1} overflow="auto">
        {callLogs.map((item, index) => (
          <ListItem key={index} {...item} onClick={() => handleClick(item.phoneNumber)} />
        ))}
      </Flex>
    </Flex>
  );
};
