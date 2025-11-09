import { PostProps } from "@/types/Post";

const Post = ({ post }: { post: PostProps }) => {
	const { title, body } = post;
	return (
		<div className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
			<h3 className="font-bold">{title}</h3>
			<p>{body}</p>
		</div>
	);
};

export default Post;
