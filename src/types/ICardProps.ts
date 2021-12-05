import { ChangeEvent } from "react";

export type ICardProps = {
  id?: number;
  name?: string;
  subject?: string;
  owner?: string;
  users?: string[];
  handleClick?: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
};

export type IRequestCardProps = {  
  id: number;
  subMenuItems: Omit<ICardProps[], "handleClick" | "isChecked">;
}