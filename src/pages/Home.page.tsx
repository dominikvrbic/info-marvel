import { SimpleGrid, Container } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from 'react-use';

import { useHeros } from '../api';
import { Button, Search, HomePageCard, Spinner } from '../components';

export const HomePage = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const [searchDebounce, setSearchDebounce] = useState('');
  const { data, isSuccess, isLoading } = useHeros(searchDebounce);
  useDebounce(
    () => {
      setSearchDebounce(search);
    },
    400,
    [search]
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
        <SimpleGrid w="full" pt={4} spacing={[2, 2, 4]} columns={[1, 3, 5, 7]}>
          {isSuccess &&
            data?.data.results.map((result) => (
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
      {!isLoading && <Button my="8" mx="auto" maxW="15rem" text="LOAD MORE" />}{' '}
    </Container>
  );
};
