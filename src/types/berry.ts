// Part of the response from GET /berry/{name}. Only the fields the example uses are typed.
export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  size: number;
  smoothness: number;
}
