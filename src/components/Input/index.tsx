import * as S from "./styles";

import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const Input = (props: Props) => {
  return (
    <S.Container>
      <S.Input {...props} placeholder={props?.text} />
    </S.Container>
  );
};

export default Input;
