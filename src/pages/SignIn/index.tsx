import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Title from "../../components/Title";
import Input from "../../components/Input";

import * as S from "./styles";

const SignIn = () => {
  const navigate = useNavigate();

  function onHandleClick(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);

    navigate("/");
  }

  return (
    <S.Container>
      <Title text="LOGIN" />
      <S.Form onSubmit={onHandleClick}>
        <Input name="email" type="email" text="E-mail" />
        <Input name="password" type="password" text="Senha" />
        <S.Buttons>
          <Button type="submit" text="Entrar" color="rgba(186, 0, 252, 0.3)" />
          <Button text="Voltar" color="rgba(1, 11, 98, 0.5)" />
        </S.Buttons>
      </S.Form>

      <S.Footer>
        <S.NotRegistered>Não tem conta?</S.NotRegistered>
        <S.RegisterLink to="/sign_up">Cadastre-se</S.RegisterLink>
      </S.Footer>
    </S.Container>
  );
};

export default SignIn;
