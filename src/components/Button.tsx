import { chakra, ButtonProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends ButtonProps {
  text: string;
}

export const Button = ({ text, ...rest }: Props) => {
  return (
    <chakra.button
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
