import { Text } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import calendarPlugin from 'dayjs/plugin/calendar';
import Message from 'interfaces/Messages/Message';
import React from 'react';

dayjs.locale('pl');
dayjs.extend(calendarPlugin);

const MessageItemContainer = styled.div<{ fromCurrent: boolean }>`
  padding: 8px 12px;
  margin: 2px 4px;
  max-width: 75%;
  font-size: 10pt;
  border-radius: 18px;

  ${({ fromCurrent, theme }) => `
    background-color: ${fromCurrent ? theme.colors.brand.blue.light : theme.colors.gray['800']};
    align-self: ${fromCurrent ? 'flex-end' : 'flex-start'};
  `}
`;

export const ConversationItem = ({ id, created, message, self }: Message) => {
  return (
    <MessageItemContainer key={id} fromCurrent={self}>
      {message}
      <Text fontSize="8pt" my={0}>
        {dayjs(created).calendar('', {
          sameDay: '[Dzisiaj o] HH:mm',
          nextDay: '[Jutro o] HH:mm',
          nextWeek: 'dddd [o] HH:mm',
          lastDay: '[Wczoraj o] HH:mm',
          lastWeek: 'dddd [o] HH:mm',
          sameElse: 'DD/MM/YYYY',
        })}
      </Text>
    </MessageItemContainer>
  );
};
