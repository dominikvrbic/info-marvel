import Axios from 'axios';
import { useMemo, createElement } from 'react';

import { AxiosContext } from './AxiosContext';
import { createHash } from './createHash';

const { Provider } = AxiosContext;
/**
 *
 * @param param0 task a react app or a part of an app that needs to use the axios instance that has auth on it
 * @returns
 */
export function AxiosProvider({ children }: React.PropsWithChildren<unknown>) {
  const auth = useMemo(() => {
    const axios = Axios.create({
      baseURL: import.meta.env.VITE_PUBLIC_API_URL?.toString(),
    });

    // REQUEST interceptor
    axios.interceptors.request.use((config) => {
      const { hash, publicKey, timestamp } = createHash();
      config.params = {
        ...config.params,
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
      };

      return config;
    });

    return axios;
  }, []);

  return createElement(Provider, { value: auth }, children);
}
