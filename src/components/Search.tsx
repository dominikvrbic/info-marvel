import React from 'react';
import {
  Input,
  InputElementProps,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Props {
  inputProps: InputElementProps;
}

export const Search = ({ inputProps }: Props) => {
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
        {...inputProps}
      ></Input>
    </InputGroup>
  );
};
