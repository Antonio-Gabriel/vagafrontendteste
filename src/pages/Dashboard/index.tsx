import { acronym } from "../../helpers/acronym";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { SideMenu } from "../../components/SideMenu";

import { subMenuItems } from "./data";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import { Owner } from "../../components/Owner";
import { SmallButton } from "../../components/ButtonSmall";
import { getMenus } from "../../services/MenuService";
import { IMenu } from "../../types/ISideMenu";

import { ChangeEvent, useEffect, useState } from "react";

import { ICardProps } from "../../types/ICardProps";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

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

interface IPropsTheme {
  toggleTheme: () => void;
}

export function Dashboard({ toggleTheme }: IPropsTheme) {
  const { auth, item, signOut } = useAuth();
  const [toggle, setToggle] = useState(-1);
  const [search, setSearch] = useState("");

  const [menu, setMenu] = useState<IMenu[]>([]);

  useEffect(() => {
    showMenus();
  }, [menu]);

  async function showMenus() {
    await getMenus().then((response) => setMenu(response.data));
  }

  // CkeckBox Action
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([] as any);
  const [list, setList] = useState<ICardProps[]>([]);

  useEffect(() => {
    setList(subMenuItems);
  }, [list]);

  function handleSelectAll() {
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
  };

  function toggleSideMenu(index: number) {
    setToggle((currentValue) => (currentValue !== index ? index : -1));
  }

  function archiveItem() {
    if (isCheckAll && item.subMenuItems.length > 0) {
      item.subMenuItems = [];

      setIsCheckAll(!isCheckAll);
    } else {
      toast.warning(
        t("translation.Load the item and select all to be able to archive")
      );
    }
  }

  const [translation, setTranslation] = useState(false);
  const { t, i18n } = useTranslation();

  function changeLanguage() {
    i18n.changeLanguage(translation ? "pt" : "en");

    setTranslation(!translation);
  }

  return (
    <Container>
      <aside>
        <AsideHeader>
          <Owner username={acronym(auth.user)} />
          <div className="new">
            <Button
              width={9.375}
              height={3.4375}
              text={t("translation.NEW")}
              unity="rem"
            />
          </div>
        </AsideHeader>

        <Favorites>
          <article>
            <span>{t("translation.Favorites")}</span>
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

        {menu.map((item, index) => (
          <SideMenu
            isOpen={index === toggle}
            toggleMenu={() => toggleSideMenu(index)}
            id={item.id}
            name={item.name}
            subMenus={item.subMenus}
            key={item.id}
          />
        ))}
      </aside>
      <section>
        <header>
          <h1>WIID-FrontEnd</h1>
          <BtnsEvents>
            <div className="translate" onClick={changeLanguage}>
              <i className="icon-g_translate"></i>
            </div>
            <div className="theme" onClick={toggleTheme}>
              <i className="icon-dark"></i>
            </div>
            <div className="logout" onClick={signOut}>
              <i className="icon-delete"></i>
            </div>
          </BtnsEvents>
        </header>
        <SearchBar>
          <i className="icon-search" />
          <Input
            name="username"
            value={search}
            onChange={() => setSearch(search)}
            placeholder={t("translation.inbox")}
            type="text"
            autoComplete="off"
            required
          />
          <button>{t("translation.Search")}</button>
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
              <SmallButton
                text={t("translation.To assign")}
                handleClick={() => console.log("nn")}
              />
              <SmallButton
                text={t("translation.To file")}
                handleClick={archiveItem}
              />
              <SmallButton
                text={t("translation.To schedule")}
                handleClick={() => console.log("nn")}
              />
            </BtnGroups>
          </div>
          <i className="icon-filter"></i>
        </SectionGroup>

        <Cards>
          {item.subMenuItems !== undefined && item.subMenuItems.length > 0 ? (
            item.subMenuItems.map((data) => (
              <Card
                key={data.id}
                id={Number(data.id)}
                name={data.name}
                subject={data.subject}
                owner={data.owner}
                users={data.users}
                handleClick={handleClick}
                isChecked={isCheck.includes(String(data.id))}
              />
            ))
          ) : (
            <h2>{t("translation.No registry")}</h2>
          )}
        </Cards>
      </section>
    </Container>
  );
}
