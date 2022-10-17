import * as S from "./styles";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

const Button = (props: Props) => {
  const color =
    props.color === "purple"
      ? "rgba(186, 0, 252, 0.3);"
      : "rgba(1, 11, 98, 0.5);";

  return (
    <S.Container>
      <S.Button color={color}>{props.text}</S.Button>
    </S.Container>
  );
};

export default Button;
