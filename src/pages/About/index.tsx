import * as S from "./styles";

import Title from "../../components/Title";

const About = () => {
  return (
    <S.Container>
      <Title text="QUEM SOMOS" />
      <S.Content>
        <S.ContentText>
          Olá sou o criador desse site, me chamo Matheus, esse site foi
          desenvolvido na matéria de Interação Humano Computador no 3º período
          de Ciência da Computação na UTFPR e esta implementação foi feita
          apenas por mim. A API usada foi a do TMDb.
        </S.ContentText>
      </S.Content>
    </S.Container>
  );
};

export default About;
