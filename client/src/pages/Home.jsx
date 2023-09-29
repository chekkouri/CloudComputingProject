import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

import { Context } from '../context/Context'
import {
	Header,
	Footer,
	LoadingIndicator,
	Posts,
	Sidebar,
	SidebarUsers,
} from '../includes/components'

const Home = () => {
	const [posts, setPosts] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const { user } = useContext(Context)

	const { search } = useLocation()

	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		setIsFetching(true)
	// 		await axios.get(`/posts/${search}`).then(res => {
	// 			setPosts(res.data.reverse())
	// 			setIsFetching(false)
	// 		})
	// 	}
	// 	fetchPosts()
	// }, [search])

	useEffect(() => {
		const fetchPosts = async () => {
			setIsFetching(true)
			await axios.get(`http://api.thefzz.com:3000/posts`).then(res => {
				setPosts(res.data.reverse())
				setIsFetching(false)
				console.log(res)
			})
		}
		fetchPosts()
	}, [])

	return (
		<>
			<Header />
			<div className="home" id="home">
				{isFetching ? <LoadingIndicator /> : <Posts posts={posts} />}
				{/* {user && <>{search.includes('userId') ? <SidebarUsers /> : <Sidebar />}</>} */}
			</div>
			<Footer />
		</>
	)
}

export default Home
