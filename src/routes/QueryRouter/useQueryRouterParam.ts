import { omit } from 'lodash';
import { useQueryRoute } from './QueryRouteContext';

export const useQueryRouterParam = () => {
  const params = useQueryRoute();
  return omit(params, 'root', 'nested');
};
