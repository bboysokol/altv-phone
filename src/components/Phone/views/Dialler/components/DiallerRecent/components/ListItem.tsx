import { Flex, Text } from '@chakra-ui/layout';
import dayjs from 'dayjs';
import { selectors } from 'rdx/phone/contacts';
import React from 'react';
import { HiPhoneIncoming, HiPhoneMissedCall, HiPhoneOutgoing } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { CallLogType } from '../../../../../../../helpers/enums/CallLogType';

const typeToIcon = [
  { Icon: HiPhoneOutgoing, color: '#8bc34a' },
  { Icon: HiPhoneMissedCall, color: '#ff2727' },
  { Icon: HiPhoneIncoming, color: '#628bf4' },
];

export type ListItemProps = {
  onClick?: () => void;
  phoneNumber: number;
  type: CallLogType;
  date: string;
};

export const ListItem: React.FC<ListItemProps> = ({ phoneNumber, type, date, onClick }) => {
  const { Icon, color } = typeToIcon[+`${type}`];
  const contact = useSelector(selectors.selectContactByNumber(phoneNumber));
  return (
    <Flex
      onClick={onClick}
      px="30px"
      py="8px"
      justifyContent="space-between"
      transition="0.15s ease-in-out"
      _hover={{ bg: 'rgba(255, 255, 255, 0.06)' }}
      minH="50px"
    >
      <Flex alignItems="center" justifyContent="space-between" flexGrow={1}>
        <Flex alignItems="center" py={1}>
          <Icon fontSize="20px" color={color} />
          <Text pl="10px" fontSize="10pt" my={0}>
            {contact?.name ?? phoneNumber}
          </Text>
        </Flex>
        <Text textAlign="right" pl="10px" fontSize="9pt" my={0} color="rgba(255, 255, 255, 0.8)">
          {dayjs(date).calendar('', {
            sameDay: '[Dzisiaj o] HH:mm',
            nextDay: '[Jutro o] HH:mm',
            nextWeek: 'dddd [o] HH:mm',
            lastDay: '[Wczoraj o] HH:mm',
            lastWeek: 'dddd [o] HH:mm',
            sameElse: 'DD/MM/YYYY',
          })}
        </Text>
      </Flex>
    </Flex>
  );
};
