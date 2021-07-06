import { useContext } from 'react';

import { AxiosContext } from './AxiosContext';

/**
 *
 * @returns returns the axios instance with auth
 */
export const useAxios = () => useContext(AxiosContext);
