import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";

import * as S from "./styles";

const SignUp = () => {
  const navigate = useNavigate();

  function onHandleClick(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);

    if (data.password !== data.passwordConfirmation) {
      if (data.email !== data.emailConfirmation) {
        alert("E-mails e Senhas não conferem");
      } else alert("Senhas não conferem");
      return;
    }

    if (data.email !== data.emailConfirmation) {
      if (data.password !== data.passwordConfirmation) {
        alert("E-mails e Senhas não conferem");
      } else alert("E-mails não conferem");
      return;
    }

    navigate("/");
  }

  return (
    <S.Container>
      <Title text="CADASTRE-SE" />
      <S.Form onSubmit={onHandleClick}>
        <Input name="name" text="Nome" type="text" />
        <Input name="email" text="E-mail" type="email" />
        <Input
          text="Insira seu e-mail novamente"
          name="emailConfirmation"
          type="email"
        />
        <Input type="password" name="password" text="Senha" />
        <Input
          type="password"
          name="passwordConfirmation"
          text="Insira sua senha novamente"
        />
        <S.Buttons>
          <Button type="submit" text="CADASTRAR" color="purple" />
          <Button
            onClick={() => {
              navigate("/");
            }}
            text="VOLTAR"
            color="blue"
          />
        </S.Buttons>
      </S.Form>
    </S.Container>
  );
};

export default SignUp;
