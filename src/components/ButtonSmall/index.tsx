import { Container } from "./styles";

type IButtonProps = {
  text: string;
  handleClick: () => void;
};

export function SmallButton({ text, handleClick }: IButtonProps) {
  return (
    <Container>
      <button onClick={handleClick}>{text}</button>
    </Container>
  );
}
