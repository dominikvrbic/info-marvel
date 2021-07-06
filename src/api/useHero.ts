import { useQuery, UseQueryResult } from 'react-query';

import { useAxios } from '../utils/useAxios';

interface Hero {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Events;
  urls: Url[];
}

interface Url {
  type: string;
  url: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

interface Item2 {
  resourceURI: string;
  name: string;
  type: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Item {
  resourceURI: string;
  name: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}
export function useHero(id: string): UseQueryResult<Hero> {
  const axios = useAxios();

  const getHero = async () => {
    const { data } = await axios.get<Hero>(`characters/${id}`);
    return data;
  };
  return useQuery<Hero>(['hero', id], getHero);
}
