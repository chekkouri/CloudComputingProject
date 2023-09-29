import { gsap } from 'gsap'

export const sliderAnim = () =>
	gsap.fromTo(
		'.login__right',
		{
			x: '-100%',
			duration: 0.5,
			ease: 'ease-out',
			delay: 0.2,
		},
		{
			x: 0,
			opacity: 1,
		}
	)
