import { SimpleGrid, Container } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from 'react-use';

import { useHeroes, Result } from '../api';
import { Button, Search, HomePageCard, Spinner } from '../components';

export const HomePage = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const [searchDebounce, setSearchDebounce] = useState('');
  const { data, isSuccess, isLoading, fetchNextPage, hasNextPage } =
    useHeroes(searchDebounce);

  const next = () => fetchNextPage();

  useDebounce(
    () => {
      setSearchDebounce(search);
    },
    400,
    [search]
  );

  const allRows = (data?.pages ?? []).reduce<Result[]>(
    (rows, heroes) => [...rows, ...heroes.data.results],
    []
  );

  return (
    <Container h="100vh" maxW="8xl" centerContent>
      <Search
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="Search character..."
      />
      {isLoading ? (
        <Spinner mx="auto" />
      ) : (
        <SimpleGrid
          w="full"
          my="8"
          pt={4}
          spacing={[2, 2, 4]}
          columns={[1, 3, 5, 7]}
        >
          {isSuccess &&
            allRows.map((result) => (
              <Link key={result.id} to={`/hero/${result.id}`}>
                <HomePageCard
                  title={result.name}
                  thumbnail={result.thumbnail}
                  comicsCount={result.comics.available}
                />
              </Link>
            ))}
        </SimpleGrid>
      )}
      {!isLoading && hasNextPage && (
        <Button mx="auto" maxW="15rem" text="LOAD MORE" onClick={next} />
      )}
    </Container>
  );
};
