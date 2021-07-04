import React from 'react';
import { motion } from 'framer-motion';
import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

const MotionBox = motion<BoxProps>(Box);

export const Card = ({
  imageUrl = 'https://via.placeholder.com/400',
  title,
  subtitle,
}: Props) => {
  return (
    <MotionBox
      bg="#303030"
      maxW="200px"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      sx={{
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)',
        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)',
      }}
    >
      <Image src={imageUrl} w="full" />
      <Box bg="red" w="full" h="7px"></Box>
      <Flex
        direction="column"
        justify="space-between"
        color="white"
        minH="150px"
        maxH="200px"
        p={4}
      >
        <Text>{title}</Text>
        {subtitle && <Text>{subtitle}</Text>}
      </Flex>
    </MotionBox>
  );
};
