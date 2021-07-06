import { Image } from '@chakra-ui/image';
import { Text, Flex, Container } from '@chakra-ui/layout';
import { useMediaQuery, Divider, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Redirect, useParams } from 'react-router';

import { useComics, useHero } from '../api';
import { HeroCard, Spinner } from '../components';

export const Hero = () => {
  const { id } = useParams<{ id: string }>();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

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
          isLargerThan480
            ? {
                clipPath: 'polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)',
                WebkitClipPath:
                  'polygon(0 0, 100% 0, 100% 60%, 0% 100%, 0 100%)',
              }
            : {}
        }
        pt="8"
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

      <Divider orientation="horizontal" pb={8} />
      <Container maxW="container.xl">
        <Text fontWeight="semibold" as="h2" fontSize="4xl">
          Comics
        </Text>
        <SimpleGrid
          mx="auto"
          pt={4}
          px="2"
          w="full"
          spacing={[2, 2, 4]}
          columns={[1, 3, 5]}
        >
          {comicsData?.data.results.map((comic) => (
            <HeroCard
              thumbnail={comic.thumbnail}
              title={comic.title}
              author={comic?.creators?.items[0]?.name}
              key={comic.id}
              description={comic.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
