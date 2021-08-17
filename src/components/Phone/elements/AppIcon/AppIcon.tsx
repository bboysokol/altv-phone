import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useQueryRouterNav } from '../../../../routes/QueryRouter/useQueryRouterNav';

export type AppIconProps = {
  gradient: string;
  onClick?: () => void;
  label?: string;
  to?: string;
  pb?: number;
  size?: string;
};

export const AppIcon: React.FC<AppIconProps> = ({
  children,
  gradient,
  label,
  pb,
  to = 'phone~~locked',
  size = '50px',
}) => {
  const { navigate } = useQueryRouterNav();

  return (
    <Flex flex="1 0 25%" direction="column" alignItems="center" pb={pb} fontSize="10pt">
      <Flex
        w={size}
        h={size}
        bg={gradient}
        bgGradient={gradient}
        onClick={() => navigate(to)}
        borderRadius="15px"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        {children}
      </Flex>
      {label}
    </Flex>
  );
};
