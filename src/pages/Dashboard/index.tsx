import { FormEvent, useEffect, useState } from 'react'
import Axios from 'axios'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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

	const [topMovies, setTopMovies] = useState([])

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
			{topMovies.length > 0 ? (
				<>
					<Title
						px='2.5rem'
						text='DESTAQUES'
					/>
					<S.CarouselWrapper>
						<S.CarouselRoot
							centerMode
							centerSlidePercentage={100}
							dynamicHeight
							autoPlay
							infiniteLoop
							stopOnHover
							showThumbs={false}
							showStatus={false}
							showArrows={true}
						>
							{topMovies.map((movie: MovieInfo, index) => (
								<S.CarouselItem
									to={`/media/${movie.id}`}
									key={index}
								>
									<img
										src={`${getImage}${
											windowWidth > 550
												? movie?.backdrop_path
												: movie?.poster_path
										}`}
									/>
									<S.CarouselText>{movie?.title}</S.CarouselText>
								</S.CarouselItem>
							))}
						</S.CarouselRoot>
					</S.CarouselWrapper>
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
