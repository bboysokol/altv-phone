import { createContext, useContext } from 'react';

type QueryRouteContextType = {
  root: string;
  nested: string;
  [key: string]: string;
};

export const QueryRouteContext = createContext<QueryRouteContextType>({
  root: '',
  nested: '',
});

export const useQueryRoute = () => useContext(QueryRouteContext);
