import { IRequestCardProps } from "../../types/ICardProps";
import { api } from "../api";

export async function ItemService(item_id: number) {
  return await (
    await api.get<IRequestCardProps>(`/items/${item_id === 0 ? "" : item_id}`)
  ).data;
}
