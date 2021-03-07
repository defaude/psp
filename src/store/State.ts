export type Config = {
  styles: {
    name: string;
    description: string;
    artists: string[];
    songs: string[];
  }[];
};

export type State = {
  config: Config | null;
  ui: {
    styles: string[];
    artists: string[][];
    songs: string[][];
    descriptions: string[];
  };
};
