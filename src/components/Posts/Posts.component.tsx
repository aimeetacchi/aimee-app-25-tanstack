import { usePosts } from "@/services/queries";
import Post from "../Post/Post.component";

const Posts = () => {
	const postQuery = usePosts();
	const { data } = postQuery;

	console.log("Posts data:", data);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{data?.map((post) => (
				<Post post={post} />
			))}
		</div>
	);
};

export default Posts;
