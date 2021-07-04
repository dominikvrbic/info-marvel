import React from 'react';

import { Button, Search, Card } from '../components';
import { useHeros } from '../api';
import { Link } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react';

export const HomePage = (): JSX.Element => {
  const { data, isSuccess } = useHeros();
  return (
    <>
      <Search inputProps={{ placeholder: 'Search character...' }} />
      <SimpleGrid w="full" pt={4} spacing={[2, 2, 4]} columns={[1, 3, 5]}>
        {isSuccess &&
          data &&
          data.data.results.map((result) => (
            <Link key={result.id} to={`/hero/${result.id}`}>
              <Card
                title={result.name}
                imageUrl={
                  result.thumbnail.path + '.' + result.thumbnail.extension
                }
                comicsCount={result.comics.available}
              />
            </Link>
          ))}
        <Button mx="auto" maxW="15rem" text="LOAD MORE" />
      </SimpleGrid>
    </>
  );
};
