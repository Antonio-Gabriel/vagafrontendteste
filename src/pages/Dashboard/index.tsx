import { acronym } from "../../helpers/acronym";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { SideMenu } from "../../components/SideMenu";

import {
  Container,
  AsideHeader,
  Favorites,
  BtnsEvents,
  SearchBar,
  SectionGroup,
  BtnGroups,
  Cards,
} from "./styles";
import { ChangeEvent, useEffect, useState } from "react";

import { SideMenu as SideMenuData, subMenuItems } from "./data";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import { ICardProps } from "../../types/ICardProps";

interface IPropsTheme {
  toggleTheme: () => void;
}

export function Dashboard({ toggleTheme }: IPropsTheme) {
  const { auth } = useAuth();
  const [toggle, setToggle] = useState(-1);
  const [search, setSearch] = useState("");

  // CkeckBox Action
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([] as any);
  const [list, setList] = useState<ICardProps[]>([]);

  useEffect(() => {
    setList(subMenuItems);
  }, [list]);

  function handleSelectAll(event: ChangeEvent<HTMLInputElement>) {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((item) => String(item?.id)));

    if (isCheckAll) {
      setIsCheck([]);
    }
  }

  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setIsCheck([...isCheck, id]);

    if (!checked) {
      setIsCheck(isCheck.filter((item: string) => item !== id));
    }

    // setIsCheckAll(isCheckAll);
    // setIsCheck(list.map((item) => String(item?.id)));
  };

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
        <SearchBar>
          <i className="icon-search" />
          <Input
            name="username"
            value={search}
            onChange={() => setSearch(search)}
            placeholder="Caixa de entrada"
            type="text"
            autoComplete="off"
            required
          />
          <button>Pesquisar</button>
        </SearchBar>
        <div className="divider" />

        <SectionGroup>
          <div className="left">
            <input
              type="checkbox"
              className="checkbox"
              id="selectAll"
              onChange={handleSelectAll}
              checked={isCheckAll}
            />
            <BtnGroups>
              <button>Atribuir</button>
              <button>Arquivar</button>
              <button>Agendar</button>
            </BtnGroups>
          </div>
          <i className="icon-filter"></i>
        </SectionGroup>

        <Cards>
          {subMenuItems.map((item) => (
            <Card
              key={item.id}
              id={Number(item.id)}
              name={item.name}
              subject={item.subject}
              owner={item.owner}
              users={item.users}
              handleClick={handleClick}
              isChecked={isCheck.includes(String(item.id))}
            />
          ))}
        </Cards>
      </section>
    </Container>
  );
}
