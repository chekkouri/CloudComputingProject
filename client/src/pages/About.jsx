import { useEffect } from 'react'

import Tech from '../components/Tech'
import { bioAnim, containerAnim } from '../animations/about'
import { fury, react, node, express, mongo, sass, redux, git, github } from '../includes/assets'

const About = () => {
	useEffect(() => {
		bioAnim()
		containerAnim('left')
		containerAnim('right')
	}, [])

	return (
		<div className="about">
			<div className="about__wrapper">
				<div className="about__left">
					<span className="about__left__logo">Fatima Ezzahraa</span>
					<div>
						<img
							src={"https://media.licdn.com/dms/image/C4D03AQEP3BxWfSHm_w/profile-displayphoto-shrink_800_800/0/1602753326432?e=2147483647&v=beta&t=_F2CCjYdUHAQmszYeYfXBl3dhvzRE0177B1PWE_sik4"}
							alt="Developer Profile"
							className="about__left__dev"
							crossOrigin="true"
						/>
						<span className="about__left__name">Fatima Ezzahraa</span>
						<span className="about__left__desc">
							Building fullstack projects with passion and love.
						</span>
						
					</div>
				</div>
				<div className="about__right">
					<div className="about__right__wrapper">
						<div className="about__top">
							<span className="about__title">Tech Stack Used</span>
							<div className="about__techs">
								<Tech img={react} name="React Js" desc="UI Development" alt="react" />
								<Tech img={node} name="Node Js" desc="Server" alt="node" />
								<Tech img={express} name="Express Js" desc="API Development" alt="express" />
								<Tech img={redux} name="Redux" desc="State Management" alt="redux" />
								<Tech img={git} name="Git" desc="Source Control" alt="git" />
								<Tech img={github} name="Github" desc="Code Hosting" alt="github" />
								{/* <Tech img={email} name="Email Js" desc="Sending Email" alt="email" /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
