import { ICardProps } from "../../types/ICardProps";

export const SideMenu = [
  {
    id: 1,
    name: "Conta 1",
    subMenus: [
      {
        id: 11,
        name: "Caixa de entrada",
      },
      {
        id: 12,
        name: "Caixa de saída",
      },
    ],
  },
  {
    id: 2,
    name: "Conta 2",
    subMenus: [
      {
        id: 22,
        name: "Inbox",
      },
    ],
  },
  {
    id: 3,
    name: "Conta 3",
    subMenus: [
      {
        id: 33,
        name: "Entrada",
      },
      {
        id: 34,
        name: "Vip",
      },
      {
        id: 35,
        name: "Lixo",
      },
    ],
  },
];

export const subMenuItems: ICardProps[] = [
  {
    id: 1,
    name: "Joao Cabral",
    subject: "Recebeu minha mensagem?",
    owner: "JC",
    users: ["JC", "MN", "CC"],
  },
  {
    id: 2,
    name: "Maria Nadir",
    subject: "Bom dia",
    owner: "MN",
    users: ["MN"],
  },
  {
    id: 3,
    name: "Fernando Henrique",
    subject: "Aguardo retorno",
    owner: "FH",
    users: ["FH", "CV", "MC", "BB"],
  },
  {
    id: 4,
    name: "Carlos Vaz",
    subject: "Lembrete",
    owner: "CV",
    users: ["CV", "FH"],
  },
  {
    id: 5,
    name: "Bruno Baxtos",
    subject: "Aviso",
    owner: "BB",
    users: ["BB"],
  },
  {
    id: 6,
    name: "Mauro Marins",
    subject: "Resposta daquela chamada do final de semana",
    owner: "MM",
    users: ["MM", "BB"],
  },
];
