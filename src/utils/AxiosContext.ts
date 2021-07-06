import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { createContext } from 'react';

export const AxiosContext = createContext<AxiosInstance>(axios);
