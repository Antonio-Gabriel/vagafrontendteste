import { Container } from "./styles";

type IOwnerProps = {
  username: string;
};

export function Owner({ username }: IOwnerProps) {
  return (
    <Container>
      <span>{username}</span>
    </Container>
  );
}
