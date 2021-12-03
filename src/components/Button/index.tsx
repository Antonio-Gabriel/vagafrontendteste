import { Container } from "./styles";

type IbuttonProps = {
  width: number;
  height: number;
  text: string;  
  unity?: string;
};

export function Button({ width, height, text, unity }: IbuttonProps) {
  return (
    <Container width={width} height={height} unity={unity}>
      <button type="submit">
        <div className="circle">
          <i className="icon-plus" />
        </div>
        { text }
      </button>
    </Container>
  );
}
