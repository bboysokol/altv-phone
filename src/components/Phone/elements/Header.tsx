import { Center, Flex, Text } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.brand.blue.dark};
`;

export type HeaderProps = {
  label?: string;
  backLabel?: string;
  onBack?: () => void;
  bg?: string;
  fontSize?: string;
};

export const Header: React.FC<HeaderProps> = ({
  label,
  backLabel = 'Wstecz',
  onBack,
  children,
  bg,
  fontSize = '20px',
}) => {
  const backButton = (
    <Back onClick={onBack}>
      <IoIosArrowBack size="30px" />
      <Flex maxW="70%" whiteSpace="nowrap" justifyContent="center" alignItems="center">
        <Text fontSize={fontSize} fontWeight="400" my={0}>
          {backLabel}
        </Text>
      </Flex>
    </Back>
  );

  return (
    <Center
      color="white"
      w="100%"
      h="45px"
      bg={bg || 'gray.900'}
      borderBottom="1px solid"
      borderColor="gray.700"
      position="relative"
    >
      {onBack ? backButton : null}
      <Text fontSize={fontSize} fontWeight="500" my={0}>
        {children || label}
      </Text>
    </Center>
  );
};
