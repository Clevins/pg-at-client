export interface ISocialLink {
  id: string;
  name: string;
  url: string;
  icon: {
    url: string;
  };
}

export type SocialsProps = {
  socialLinks: ISocialLink[];
};
