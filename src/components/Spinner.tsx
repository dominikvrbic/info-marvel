import { Image, ImageProps } from '@chakra-ui/react';
import React from 'react';
import spin from '../assets/spinner.svg';

export const Spinner = (props: ImageProps) => (
  <Image src={spin} alt="spinner" {...props} />
);
