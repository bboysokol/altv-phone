import { Button } from '@chakra-ui/react';
import React from 'react';
import type { FormCommonProps } from './FormCommon';

export type FormButtonProps = FormCommonProps & {
  type?: 'submit' | 'button' | 'reset';
  isLoading?: boolean;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  mx?: string;
  onClick?: () => void;
};

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  color = 'white',
  backgroundColor = 'brand.primary',
  type,
  mx,
  onClick,
  isLoading,
  fontSize,
}) => {
  return (
    <Button
      onClick={onClick}
      colorScheme={backgroundColor}
      size="lg"
      color={color}
      backgroundColor={backgroundColor}
      type={type}
      fontSize={fontSize}
      mt={6}
      mx={mx}
      w="100%"
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
};
