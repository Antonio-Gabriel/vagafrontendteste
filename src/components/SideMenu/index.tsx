import { ISideSubMenu } from "../../types/ISideMenu";
import { DropDownCollapse, NavigationDropDown } from "./styles";

import { SideMenuItem } from "../SideMenuItem";

type ISideMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  id: number;
  name: string;
  submenus: ISideSubMenu[];
};

export function SideMenu({
  isOpen,
  toggleMenu,
  id,
  name,
  submenus,
}: ISideMenuProps) {
  return (
    <>
      <NavigationDropDown isOpen={isOpen} onClick={toggleMenu} key={id}>
        <ul>
          <li>
            <header>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 9L12 17L19 9L5 9Z" fill="#E1E1E6" />
              </svg>

              <span>{name}</span>
            </header>
            <DropDownCollapse>
              <SideMenuItem submenu={submenus} />
            </DropDownCollapse>
          </li>
        </ul>
      </NavigationDropDown>
    </>
  );
}
