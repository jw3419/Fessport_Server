interface board {
  [index: number]: { _id: string; title: string };
}

export interface Mypost {
  reviews?: board;
  resells?: board;
  companions?: board;
}
