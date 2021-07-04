import React from 'react';

import { Button, Search, Card } from '../components';
import { useHeros } from '../api';

export const HomePage = (): JSX.Element => {
  const { data } = useHeros();
  return (
    <>
      <Button text="LOAD MORE" />
      <Search inputProps={{ placeholder: 'Search character...' }} />
      <Card title="BLACK WIDOW" subtitle="Yelene Belova" />
    </>
  );
};
