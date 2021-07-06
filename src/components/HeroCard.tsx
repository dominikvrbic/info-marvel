import React from 'react';
import { motion } from 'framer-motion';
import {
  AspectRatio,
  Box,
  BoxProps,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Thumbnail } from '../api/useHeros';

interface Props {
  title: string;
  thumbnail: Thumbnail;
  author?: string;
  description?: string;
}
import { ComicModal } from './ComicModal';
const MotionBox = motion<BoxProps>(Box);

export function HeroCard({ thumbnail, title, author, description }: Props) {
  const imageUrl = thumbnail.path + '.' + thumbnail.extension;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MotionBox
        onClick={onOpen}
        cursor="pointer"
        h="25rem"
        maxW={['full', '200px']}
        whileHover={{
          scale: 1.04,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        }}
        whileTap={{ scale: 0.9 }}
      >
        <AspectRatio h="15rem" w="full" ratio={9 / 16}>
          <Image src={imageUrl} w="full" h="full" />
        </AspectRatio>
        <Flex
          direction="column"
          justify="space-between"
          minH="150px"
          maxH="200px"
          p={4}
        >
          <Text>{title}</Text>
          {author && <Text>{author}</Text>}
        </Flex>
      </MotionBox>
      <ComicModal
        title={title}
        description={description}
        imageUrl={imageUrl}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
