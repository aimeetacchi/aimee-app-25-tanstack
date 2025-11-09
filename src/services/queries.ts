import { PostProps } from "@/types/Post";
import useSWR from "swr";

export function usePosts() {
	return useSWR<PostProps[]>("/posts");
}
