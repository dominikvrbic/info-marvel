import {
  QueryFunction,
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from 'react-query';

import { useAxios } from '../utils';

interface Heroes {
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

export interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: Url[];
}

interface Url {
  type: string;
  url: string;
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

export interface Thumbnail {
  path: string;
  extension: string;
}
export function useHeroes(name?: string): UseInfiniteQueryResult<Heroes> {
  const axios = useAxios();

  const getHeroes: QueryFunction<Heroes> = async ({ pageParam }) => {
    const params = name ? { nameStartsWith: name } : {};
    const { data } = await axios.get<Heroes>('characters', {
      params: { ...params, offset: pageParam },
    });
    return data;
  };

  return useInfiniteQuery<Heroes>(['heroes', name], getHeroes, {
    getNextPageParam: (lastPage) =>
      lastPage.data.total > 0
        ? lastPage.data.offset + lastPage.data.limit
        : undefined,
  });
}
