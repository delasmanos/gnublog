import list from "~util/music-theory/musicsymbols.json";

export type Keys = keyof typeof list;

export type MusicSymbol = {
  name: string;
  unicodeHex: string;
  htmlDecCode: string;
};
export type MusicSymbolList = Record<Keys, MusicSymbol>;
export const musicSymbolist: MusicSymbolList = list;
