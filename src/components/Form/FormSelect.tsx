import { Flex, FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import type { FormCommonProps } from './FormCommon';

const Option = styled.option`
  background: white !important;
  padding: 2px 3px;
  background: transparent;
`;

type SelectOptions = {
  name: string;
  value: string | number;
};

export type FormSelectProps = FormCommonProps & {
  id: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
  error?: string;
  variant?: string;
  color?: string;
  labelColor?: string;
  options: SelectOptions[];
  onChange: (value: string) => void;
  value: number;
};

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>((props, ref) => {
  const {
    id,
    label,
    isRequired,
    placeholder,
    error,
    isDisabled,
    labelColor = 'brand.primary',
    color,
    options,
    onChange,
    value,
  } = props;

  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel htmlFor={id} mt={4} color={labelColor}>
        {label}
      </FormLabel>
      <Select
        size="sm"
        id={id}
        placeholder={placeholder}
        isRequired={isRequired}
        isDisabled={isDisabled}
        style={{
          borderBottom: '1px solid',
          borderBottomColor: labelColor,
          borderRadius: 0,
          color: color,
        }}
        _focus={{
          borderBottom: `1px solid ${labelColor}`,
        }}
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((item, i) => (
          <Option value={item.value} key={i}>
            {item.name}
          </Option>
        ))}
      </Select>
      <FormErrorMessage>{error}</FormErrorMessage>
      <Flex h={error ? '0px' : '26.5px'} />
    </FormControl>
  );
});

FormSelect.displayName = 'FormSelect';
