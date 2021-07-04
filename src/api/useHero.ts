import { useAxios } from '../utils/useAxios';
import { useQuery, UseQueryResult } from 'react-query';

export function useHero(id: string) {
  const axios = useAxios();

  const getHero = async () => {
    const { data } = await axios.get(`characters/${id}/comics`);
    return data;
  };
  return useQuery(['hero', id], getHero);
}
