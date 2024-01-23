export interface PokeResponse {
  count: Number;
  next: String;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
