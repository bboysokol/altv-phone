import { Box, ChakraComponent, Flex, FlexProps } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const StyledFlex = styled(Flex)<{ disabled?: boolean }>`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export interface DiallingButtonProps extends FlexProps {
  size?: string;
  activeBgColor?: string;
  inactiveBgColor?: string;
  activeColor?: string;
  inactiveColor?: string;
  activeText?: string;
  inactiveText?: string;
  activated?: boolean;
  initialActivated?: boolean;
  disabled?: boolean;
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
  buttonProps?: Omit<FlexProps, 'w' | 'h' | 'bg' | 'color' | 'onClick'>;
  onClick?: () => void;
}

const DiallingButton: ChakraComponent<'div', DiallingButtonProps> = (props) => {
  const {
    size,
    activeColor,
    inactiveColor,
    activated,
    initialActivated,
    disabled,
    activeIcon,
    inactiveIcon,
    activeBgColor,
    inactiveBgColor,
    activeText,
    inactiveText,
    buttonProps,
    onClick,
    ...rest
  } = props;

  const [activatedInternal, setActivedInternal] = useState<boolean>(true);
  const bgColor = activatedInternal ? activeBgColor : inactiveBgColor;
  const color = activatedInternal ? activeColor : inactiveColor;

  useEffect(() => {
    if (initialActivated !== undefined) {
      setActivedInternal(initialActivated);
    }
  }, []);

  useEffect(() => {
    if (activated !== undefined) {
      setActivedInternal(activated);
    }
  }, [activated]);

  const onBtnClick = () => {
    if (activated === undefined) {
      setActivedInternal(!activatedInternal);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <Box {...rest} opacity={disabled ? '0.7' : '1'}>
      <StyledFlex
        {...buttonProps}
        disabled={disabled}
        w={size}
        h={size}
        bg={bgColor}
        color={color}
        direction="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        textAlign="center"
        onClick={onBtnClick}
      >
        {activatedInternal ? activeIcon : inactiveIcon}
      </StyledFlex>
      {activeText || inactiveText ? (
        <Flex mt={1} justifyContent="center">
          {activatedInternal ? activeText : inactiveText}
        </Flex>
      ) : null}
    </Box>
  );
};

export default DiallingButton;
