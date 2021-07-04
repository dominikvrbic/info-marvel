import md from 'md5';

/**
 *
 * @returns all of the data that is needed to be added to the api calls for 'auth'
 */
export function createHash(): {
  timestamp: string;
  publicKey: string;
  hash: string;
} {
  const privateKey = import.meta.env.VITE_PRIVATE_KEY?.toString() || '';
  const publicKey = import.meta.env.VITE_PUBLIC_KEY?.toString() || '';
  const currentDate = new Date();
  const timestamp = currentDate.getTime().toString();

  return { timestamp, publicKey, hash: md(timestamp + privateKey + publicKey) };
}
