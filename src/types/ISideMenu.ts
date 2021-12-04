export type ISideSubMenu = {
  id: number;
  name: string;
};

export type IMenu = {
  id: number;
  name: string;
  subMenus: ISideSubMenu[];
};
