import { InputHTMLAttributes, useCallback, useRef, useState } from "react";
import { Container } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: Boolean;
}

export function Input({ isPassword = false, ...rest }: IProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        type={showPassword ? "text" : rest.type}
      />

      {isPassword &&
        (showPassword ? (
          <i
            onClick={() => setShowPassword(!showPassword)}
            className="icon-show"
          />
        ) : (
          <i
            onClick={() => setShowPassword(!showPassword)}
            className="icon-hide"
          />
        ))}
    </Container>
  );
}
