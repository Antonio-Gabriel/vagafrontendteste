import { Container } from "./styles";

type IbuttonProps = {
  width: number;
  height: number;
  text: string;  
};

export function Button({ width, height, text }: IbuttonProps) {
  return (
    <Container width={width} height={height}>
      <button type="submit">
        <div className="circle">
          <i className="icon-plus" />
        </div>
        { text }
      </button>
    </Container>
  );
}
