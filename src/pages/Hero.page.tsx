import { Image } from '@chakra-ui/image';
import { Text, Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useComics, useHero } from '../api';
import { Spinner } from '../components';

interface Props {}

export const Hero = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const [isLargerThan1280] = useMediaQuery('(min-width: 480px)');

  if (!id) return <Redirect to="/" />;
  const { data, isLoading, isError } = useHero(id);
  const { data: comicsData, isLoading: isLoadingComics } = useComics(id);
  if (isError) return <Redirect to="/" />;

  return isLoading && isLoadingComics ? (
    <Spinner h="15rem" w="15rem" mx="auto" />
  ) : (
    <>
      <Flex
        direction={['column', 'row']}
        w="100%"
        bg="#1c1c1c"
        minH={['15rem', '35rem']}
        sx={
          isLargerThan1280
            ? {
                clipPath: 'polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, 100% 0, 100% 60%, 0% 100%, 0 100%)',
              }
            : {}
        }
        py="8"
        justify="center"
      >
        <Text
          pt={[0, '7rem']}
          h={['8rem', '15rem']}
          textAlign="center"
          color="white"
          as="h1"
          px="4"
          fontSize={['lg', 'xl', '2xl']}
        >
          {data?.data.results[0].name.toUpperCase()}
        </Text>
        <Image
          mx={['auto', 0]}
          mt={[0, 8]}
          w={['10rem', '15rem']}
          h={['10rem', '15rem']}
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
