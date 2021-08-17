import { Text } from '@chakra-ui/layout';
import { selectors as contactsSelectors } from 'rdx/phone/contacts';
import React from 'react';
import { useSelector } from 'react-redux';

type ContactNameProps = {
  number: string | number;
};

export const ContactName = ({ number }: ContactNameProps) => {
  const contact = useSelector(contactsSelectors.selectContactByNumber(parseInt(`${number}`)));
  if (`${number}`.length < 3) return <></>;
  if (isNaN(parseInt(`${number}`))) return <></>;

  switch (number) {
    case '911':
      return <Text color="brand.red.dark">Numer alarmowy</Text>;
    case contact?.number.toString():
      if (contact && contact.name)
        return (
          <Text overflow="hidden" textOverflow="ellipsis" color="white" my={0}>
            {contact.name}
          </Text>
        );
    // eslint-disable-next-line no-fallthrough
    default:
      return <>{number}</>;
  }
};
