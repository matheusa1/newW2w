import { FormEvent, useEffect, useState } from 'react'
import Axios from 'axios'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Autoplay, EffectCards } from 'swiper'

import Title from '../../components/Title'

import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const getImage = import.meta.env.VITE_IMG

interface MovieInfo {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

const Dashboard = () => {
	const navigate = useNavigate()
	const windowWidth =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth

	const [topMovies, setTopMovies] = useState<MovieInfo[] | undefined>()

	const getTopMovies = async () => {
		try {
			const response = await Axios.get(
				`${moviesURL}popular?${apiKey}&language=pt-BR`
			)
			setTopMovies(response.data.results)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getTopMovies()
	}, [])

	function onHandleClick(event: FormEvent) {
		event.preventDefault()

		const formData = new FormData(event.target as HTMLFormElement)
		const data = Object.fromEntries(formData)

		const localData = { item: 1, page: 1, search: data.search }

		localStorage.setItem('searchData', JSON.stringify(localData))

		navigate('/search')
	}

	return (
		<S.Container>
			<S.Text>O que está procurando?</S.Text>
			<S.InputWrapper onSubmit={onHandleClick}>
				<S.InputHome
					type='text'
					name='search'
					placeholder='Filme, série, anime, ...'
				/>
				<S.SubmitIcon type='submit'>
					<S.InputIcon />
				</S.SubmitIcon>
			</S.InputWrapper>
			{topMovies && topMovies?.length > 0 ? (
				<>
					<Title
						px='2.5rem'
						text='DESTAQUES'
					/>
					<S.SwiperWrapper
						effect={'cards'}
						modules={[EffectCards, Autoplay]}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
					>
						{topMovies?.map((movie, index) => {
							return (
								<S.SwiperSlideCustom key={index}>
									<S.SwiperAnchor href={`/media/${movie.id}`}>
										<S.SwiperImage src={`${getImage}${windowWidth > 799 ? movie?.backdrop_path : movie.poster_path}`} />
										<S.SwiperText>{movie?.title}</S.SwiperText>
									</S.SwiperAnchor>
								</S.SwiperSlideCustom>
							)
						})}
					</S.SwiperWrapper>
				</>
			) : (
				<S.LoadingContainer>
					<S.LoadingComponent
						type={'bubbles'}
						color={'#FFFFFF'}
						height={'100%'}
						width={'100%'}
					/>
					<S.LoadingLabel>Carregando...</S.LoadingLabel>
				</S.LoadingContainer>
			)}
		</S.Container>
	)
}

export default Dashboard
