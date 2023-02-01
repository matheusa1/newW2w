import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CarouselProps {
	active: boolean
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 0 2rem;

	gap: 1.5rem;
`

export const Text = styled.div`
	font-weight: 700;
	font-size: 1.5rem;
`

export const InputWrapper = styled.form`
	display: flex;
	position: relative;
	width: 63rem;

	@media (max-width: 67rem) {
		width: 100%;
	}
`

export const InputHome = styled.input`
	outline: none;
	padding: 1rem;
	width: 62rem;
	border-radius: 50px;

	color: #000;
	font-size: 1.2rem;
	font-weight: 500;

	@media (max-width: 69rem) {
		width: 100%;
	}

	transition: all 0.2s ease-in-out;

	:hover {
		background: #c0c0c0;
	}

	:focus {
		background: #fff;
		border: 2px solid #66d6ef;
	}
`

export const SubmitIcon = styled.button`
	all: unset;
	cursor: pointer;
	position: absolute;
	right: 2.5rem;
	top: 1rem;
	width: 1.5rem;
	height: 1.5rem;
`

export const InputIcon = styled(BsSearch)`
	color: #000;
	width: 100%;
	height: 100%;
`

export const SwiperWrapper = styled(Swiper)`
	width: 1300px;
	height: 580px;

	@media (max-width: 98rem) {
		width: 85%;
		height: auto;
	}
`

export const SwiperSlideCustom = styled(SwiperSlide)`
	position: relative;
	border-radius: 10px;
`

export const SwiperAnchor = styled.a`
	text-decoration: none;
`

export const SwiperImage = styled.img`
	width: 100%;
	height: 100%;
`

export const SwiperText = styled.p`
	position: absolute;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);

	background-color: rgba(0, 0, 0, 0.5);
	padding: 5px 10px;
	border-radius: 9999px;


	color: #fff;
	font-size: 1.2rem;
`

export const LoadingContainer = styled.div``
export const LoadingComponent = styled(ReactLoading)``
export const LoadingLabel = styled.div``
