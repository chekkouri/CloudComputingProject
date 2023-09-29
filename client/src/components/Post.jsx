import { Link } from 'react-router-dom'
import { PF } from '../utils'

const Post = ({ post }) => {
	return (
		<div className="post">
			<Link to={`/post/${post.id}`} className="link">
				<div className="post__tag">{post.title}</div>
				{post.imageUrl && (
					<img src={post.imageUrl} alt="Post" className="post__img" crossOrigin="true" />
					// <img src={PF + post.imageUrl} alt="Post" className="post__img" crossOrigin="true" />

					// <img src={"https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png"} alt="Post" className="post__img" crossOrigin="true" />

				)}
				{/* <div className="post__info">
					<div className="post__info--cats">
						{post?.categories.map(cat => (
							<span className="post__info--cat" key={cat}>
								{cat}
							</span>
						))}
					</div>
					<span className="post__title">{post.title}</span>
					<span className="post__date">{new Date(post.createdAt).toDateString()}</span>
				</div> */}
				<p className="post__desc">{post.content}</p>
			</Link>
		</div>
	)
}

export default Post
