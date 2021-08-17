import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import type { FormCommonProps } from './FormCommon';

export type FormInputProps = FormCommonProps & {
  id: string;
  label: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  error?: string;
  variant?: string;
  color?: string;
  labelColor?: string;
  hint?: string;
  onChange: (value: string) => void;
  value?: string;
};

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const {
    id,
    label,
    isRequired,
    placeholder,
    error,
    isDisabled,
    type,
    variant = 'flushed',
    labelColor = 'brand.primary',
    color,
    onChange,
    value,
    hint,
  } = props;

  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel htmlFor={id} mt={4} color={labelColor}>
        {label}
      </FormLabel>
      <Input
        id={id}
        name={id}
        type={type}
        ref={ref}
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderColor={color}
        _focus={{
          borderColor: labelColor,
        }}
        variant={variant}
        color={color}
        size="sm"
        placeholder={placeholder}
        isRequired={isRequired}
        isDisabled={isDisabled}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : (
        <FormHelperText fontSize="8pt" color="grey">
          {hint}
        </FormHelperText>
      )}
    </FormControl>
  );
});

FormInput.displayName = 'FormInput';
