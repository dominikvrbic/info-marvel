import React from 'react';
import { motion } from 'framer-motion';
import {
  AspectRatio,
  Box,
  BoxProps,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { Thumbnail } from '../api/useHeros';

interface Props {
  title: string;
  comicsCount?: number;
  thumbnail: Thumbnail;
}

const MotionBox = motion<BoxProps>(Box);

export const Card = ({ thumbnail, title, comicsCount = 0 }: Props) => {
  const imageUrl = thumbnail.path + '.' + thumbnail.extension;

  return (
    <MotionBox
      h="22rem"
      bg="#303030"
      maxW={['full', '200px']}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      sx={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)',
        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)',
      }}
    >
      <AspectRatio h="10rem" w="full" ratio={4 / 3}>
        <Image src={imageUrl} w="full" h="full" />
      </AspectRatio>
      <Box bg="red" w="full" h="7px" />
      <Flex
        direction="column"
        justify="space-between"
        color="white"
        minH="150px"
        maxH="200px"
        p={4}
      >
        <Text>{title}</Text>
        <Text>{comicsCount} Comics</Text>
      </Flex>
    </MotionBox>
  );
};
