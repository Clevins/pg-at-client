export interface IVideoShelf {
  id: string;
  title: string;
  videos: IVideo[];
}

export interface IVideo {
  author: string;
  id: string;
  title: string;
  uploadDate: string;
  video: {
    url: string;
  };
  thumbnail: {
    url: string;
  };
}

export type VideosProps = {
  videoShelves: IVideoShelf[];
};

export type VideoCardProps = {
  videoData: IVideo;
};

export type VideoShelfProps = {
  videoShelfData: IVideoShelf;
};
