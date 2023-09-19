interface IFiles {
  coverArt: string,
  poster: string,
  audio: string,
}

interface IAlbum {
  title: string,
  year: number,
}

interface ISongDescription {
  album: IAlbum,
  artist: string,
  title: string,
  files: IFiles,
}

export interface ISong {
  id: number,
  song: ISongDescription,
  related?: number[],
}