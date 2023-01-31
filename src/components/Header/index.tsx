import * as S from './styles'

interface Props {
	themeToggle: () => void
}

const Header = ({ themeToggle }: Props) => {
	return (
		<S.Container>
			<S.RightSide>
				<S.Logo to='/'>W2w?</S.Logo>
				<S.HeaderItem to='/search'>
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
							<S.MidSide>
								<S.MenuButton onClick={themeToggle}>Mudar Tema</S.MenuButton>
								<S.Divider />
								<S.MenuItem to='/about'>Quem Somos ?</S.MenuItem>
								<S.Divider />
								<S.MenuItemOutside
									target={'_blank'}
									href='https://github.com/matheusa1/newW2w'
								>
									Código Fonte
								</S.MenuItemOutside>
							</S.MidSide>
						</S.TopSide>

						<S.Close type='button'>Fechar</S.Close>
					</S.Content>
				</S.Portal>
			</S.Root>
		</S.Container>
	)
}

export default Header
