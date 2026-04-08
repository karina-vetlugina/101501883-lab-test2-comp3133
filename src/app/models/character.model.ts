export interface Wand {
  wood: string | null;
  core: string | null;
  length: number | null;
}

export interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
  species: string;
  wizard: boolean;
  ancestry: string;
  actor: string;
  wand: Wand;
}
