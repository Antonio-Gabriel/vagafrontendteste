import { Container } from "./styles";

type IbuttonProps = {
  width: number;
  height: number;
  text: string;
  handler: () => void;
};

export function Button({ width, height, text, handler }: IbuttonProps) {
  return (
    <Container width={width} height={height}>
      <button type="submit" onClick={handler}>
        <div className="circle">
          <i className="icon-plus" />
        </div>
        {text}
      </button>
    </Container>
  );
}
