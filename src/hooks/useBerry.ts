import { useQuery } from '@tanstack/react-query';
import { pokeApi } from '../api/pokeApi';
import type { Berry } from '../types/berry';

// Example TanStack Query hook. Use it as a pattern for your own requests; it isn't used anywhere yet.
// Docs: https://tanstack.com/query/latest/docs/framework/react/guides/queries

// 1. A plain async function that makes the request and returns typed data
async function fetchBerry(name: string): Promise<Berry> {
  const { data } = await pokeApi.get<Berry>(`/berry/${name}`);
  return data;
}

// 2. A custom hook that wraps useQuery
export function useBerry(name: string) {
  return useQuery({
    // A unique key for this data. Include everything the request depends on (here, the name),
    // so each berry is cached separately and changing the name fetches the new one.
    queryKey: ['berry', name],
    queryFn: () => fetchBerry(name),
  });
}

// 3. Use it in a component:
//
//   const { data: berry, isPending, isError } = useBerry('cheri');
//
//   if (isPending) return <p>Loading…</p>;
//   if (isError) return <p>Something went wrong.</p>;
//   return <p>{berry.name} takes {berry.growth_time} hours to grow</p>;
