import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useHero } from '../api';

interface Props {}

export const Hero = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Redirect to="/" />;
  useHero(id);
  return <div>Hero</div>;
};
