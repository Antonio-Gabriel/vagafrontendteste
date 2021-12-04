import { IMenu } from "../../types/ISideMenu";
import { api } from "../api";

export async function getMenus() {
  return await api.get<IMenu[]>("/menus");
}
