import { ISideSubMenu } from "../../types/ISideMenu";
import { DropDownCollapse, NavigationDropDown } from "./styles";

import { DropDownItem } from "../SideMenuItem/styles";
import { useAuth } from "../../hooks/useAuth";
import { ItemService } from "../../services/ItemService";

type ISideMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  id: number;
  name: string;
  subMenus: ISideSubMenu[];
};

export function SideMenu({
  isOpen,
  toggleMenu,
  id,
  name,
  subMenus,
}: ISideMenuProps) {
  const { setItem } = useAuth();

  async function handleSelectId(id: number) {
    const itemResponse = await ItemService(id).then((response) => response);
    setItem(itemResponse);
  }

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
              {subMenus.map((item) => (
                <li
                  key={item.id}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    handleSelectId(item.id);
                  }}
                >
                  <DropDownItem to="/">{item.name}</DropDownItem>
                </li>
              ))}
            </DropDownCollapse>
          </li>
        </ul>
      </NavigationDropDown>
    </>
  );
}
