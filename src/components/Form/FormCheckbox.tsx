import { Checkbox, FormControl, FormErrorMessage } from '@chakra-ui/react';
import React from 'react';
import type { FormCommonProps } from './FormCommon';

export type FormCheckboxProps = FormCommonProps & {
  color?: string;
};

export const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ color, label, id, isRequired, isDisabled, error }, ref) => (
    <FormControl id={id} isInvalid={!!error}>
      <Checkbox
        id={id}
        name={id}
        ref={ref}
        mt={6}
        colorScheme="brand"
        color={color}
        isRequired={isRequired}
        isDisabled={isDisabled}
      >
        {label}
      </Checkbox>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  ),
);

FormCheckbox.displayName = 'FormCheckbox';
