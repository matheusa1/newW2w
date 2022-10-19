import * as S from "./styles";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

const Button = (props: Props) => {
  return (
    <S.Container>
      <S.Button color={props.color}>{props.text}</S.Button>
    </S.Container>
  );
};

export default Button;
