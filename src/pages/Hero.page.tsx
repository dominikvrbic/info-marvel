import { Image } from '@chakra-ui/image';
import { Text, HStack, Stack, Flex } from '@chakra-ui/layout';
import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useHero } from '../api';

interface Props {}

export const Hero = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Redirect to="/" />;
  const { data } = useHero(id);
  return (
    <>
      <Flex
        direction={['column', 'row']}
        w="100%"
        bg="#1c1c1c"
        minH="35rem"
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)',
          WebkitClipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%, 0 100%)',
        }}
        pt="8"
        justify="center"
      >
        <Text mt="8" color="white" as="h1" fontSize={['lg', 'xl', '2xl']}>
          {data?.data.results[0].name}
        </Text>
        <Image
          mt="8"
          w="15rem"
          h="15rem"
          borderRadius="full"
          alt={data?.data.results[0].name}
          src={
            data?.data.results[0].thumbnail.path +
            '.' +
            data?.data.results[0].thumbnail.extension
          }
        />
      </Flex>
    </>
  );
};
