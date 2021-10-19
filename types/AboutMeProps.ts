export interface IAboutMeSection {
  id: string;
  title: string;
  descption: string;
}

export type AboutMeProps = {
  profileImage: {
    url: string;
  };
  aboutMeSections: IAboutMeSection[];
};
