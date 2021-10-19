export interface IServiceBgImage {
  url: string;
}

export interface IHomeService {
  id: string;
  name: string;
  icon: {
    url: string;
  };
  description: string;
}

export type ServicesProps = {
  servicesBgImage: IServiceBgImage;
  homeServices: IHomeService[];
};
