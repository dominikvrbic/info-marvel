import React from 'react';
import { chakra, ButtonProps } from '@chakra-ui/react';

interface Props {
  text: string;
  onClick?: () => void;
  rest?: ButtonProps;
}

export const Button = ({ text, onClick, rest }: Props) => {
  return (
    <chakra.button
      onClick={onClick}
      size="xl"
      bg="red"
      color="white"
      px={10}
      py={4}
      sx={{
        clipPath: 'polygon(15% 0, 100% 0, 100% 80%, 85% 100%, 0 100%, 0 20%)',
        WebkitClipPath:
          'polygon(15% 0, 100% 0, 100% 80%, 85% 100%, 0 100%, 0 20%)',
      }}
      {...rest}
    >
      {text}
    </chakra.button>
  );
};
