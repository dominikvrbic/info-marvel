import Axios from 'axios';
import { useMemo, createElement } from 'react';
import { createHash } from './createHash';
import { AxiosContext } from './AxiosContext';

const { Provider } = AxiosContext;
/**
 *
 * @param param0 task a react app or a part of an app that needs to use the axios instance that has auth on it
 * @returns
 */
export function AxiosProvider({ children }: React.PropsWithChildren<unknown>) {
  const auth = useMemo(() => {
    const axios = Axios.create();

    // REQUEST interceptor
    axios.interceptors.request.use((config) => {
      const { hash, publicKey, timestamp } = createHash();
      config.params.ts = timestamp;
      config.params.apikey = publicKey;
      config.params.hash = hash;
      return config;
    });

    return axios;
  }, []);

  return createElement(Provider, { value: auth }, children);
}
