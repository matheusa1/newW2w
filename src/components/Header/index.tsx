import * as S from "./styles";

interface Props {
  themeToggle: () => void;
}

const Header = ({ themeToggle }: Props) => {
  return (
    <S.Container>
      <S.RightSide>
        <S.Logo to="/">W2w?</S.Logo>

        <S.HeaderItem to="/category">
          <S.HeaderName>Categoria</S.HeaderName>
          <S.CategoryIcon />
        </S.HeaderItem>

        <S.HeaderItem to="/search">
          <S.HeaderName>Pesquisa</S.HeaderName>
          <S.SearchIcon />
        </S.HeaderItem>
      </S.RightSide>
      <S.Root>
        <S.Trigger>
          <S.MenuIcon />
        </S.Trigger>
        <S.Portal>
          <S.Overlay />
          <S.Content>
            <S.TopSide>
              <S.ProfileData>
                <S.Avatar>
                  <S.AvatarIcon />
                </S.Avatar>
                <S.ProfileInfo>
                  <S.ProfileName>José Crespeudo</S.ProfileName>
                  <S.ProfileEdit to="/profile_edit">editar</S.ProfileEdit>
                </S.ProfileInfo>
              </S.ProfileData>
              <S.MidSide>
                <S.MenuItem to="/settings">Configurações</S.MenuItem>

                <S.Divider />

                <S.MenuButton onClick={themeToggle}>Mudar Tema</S.MenuButton>

                <S.Divider />

                <S.MenuItem to="/about">Quem Somos ?</S.MenuItem>
              </S.MidSide>
            </S.TopSide>

            <S.Close type="button">Fechar</S.Close>
          </S.Content>
        </S.Portal>
      </S.Root>
    </S.Container>
  );
};

export default Header;
