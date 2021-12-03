import { DropDownItem } from "./styles";
import { ISideSubMenu } from "../../types/ISideMenu";

type ISubmenu = {
  submenu: ISideSubMenu[];
};

export function SideMenuItem({ submenu }: ISubmenu) {
  return (
    <>
      {submenu.map((item) => (
        <li key={item.id}>
          <DropDownItem to="/">{item.name}</DropDownItem>
        </li>
      ))}
    </>
  );
}
