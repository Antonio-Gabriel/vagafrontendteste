import { acronym } from "../../helpers/acronym";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { SideMenu } from "../../components/SideMenu";

import { Container, AsideHeader, Favorites, BtnsEvents } from "./styles";
import { useState } from "react";

import { SideMenu as SideMenuData } from "./data";

interface IPropsTheme {
  toggleTheme: () => void;
}

export function Dashboard({ toggleTheme }: IPropsTheme) {
  const { auth } = useAuth();
  const [toggle, setToggle] = useState(-1);

  function toggleSideMenu(index: number) {
    setToggle((currentValue) => (currentValue !== index ? index : -1));
  }

  return (
    <Container>
      <aside>
        <AsideHeader>
          <div className="acronym">
            <span>{acronym(auth.user)}</span>
          </div>
          <div className="new">
            <Button width={9.375} height={3.4375} text="NEW" unity="rem" />
          </div>
        </AsideHeader>

        <Favorites>
          <article>
            <span>Favorites</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </article>
        </Favorites>

        {SideMenuData.map((item, index) => (
          <SideMenu
            isOpen={index === toggle}
            toggleMenu={() => toggleSideMenu(index)}
            id={item.id}
            name={item.name}
            submenus={item.subMenus}
            key={item.id}
          />
        ))}
      </aside>
      <section>
        <header>
          <h1>WIID-FrontEnd</h1>
          <BtnsEvents>
            <div className="translate">
              <i className="icon-g_translate"></i>
            </div>
            <div className="theme" onClick={toggleTheme}>
              <i className="icon-dark"></i>
            </div>
          </BtnsEvents>
        </header>
      </section>
    </Container>
  );
}
