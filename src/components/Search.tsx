import React from 'react';
import {
  Input,
  InputProps,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Search = (props: InputProps) => {
  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon />} />
      <Input
        borderRadius="0"
        size="lg"
        border="0px"
        borderBottom="7px solid black"
        focusBorderColor="none"
        _hover={{
          borderBottom: '7px solid #666666',
        }}
        {...props}
      ></Input>
    </InputGroup>
  );
};
