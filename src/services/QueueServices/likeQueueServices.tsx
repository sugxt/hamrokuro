import { usePostStore } from "@/store/usePostStore";
import { RecordModel } from "pocketbase";
import { postLikeServices } from "../guffServices/postLikeServices";

export async function postLikeQueue(post_id: string, user_id: string) {
  const postUpdate = usePostStore.getState().setPostData;
  const currentPostState = usePostStore.getState().postData;
  let curr = 0;
  let originalPost: RecordModel;

  const updatedPosts = currentPostState?.map((post, key) => {
    if (post.id === post_id) {
      curr = key;
      originalPost = { ...post }; // Store the original state of the post
      return {
        ...post,
        isLiked: true,
        likes: post.likes + 1,
      };
    }
    return post;
  });

  postUpdate(updatedPosts);

  const response = await postLikeServices(post_id, user_id);
  if (!response.isSuccess) {
    // Revert the post back to its original state
    const revertedPosts = updatedPosts?.map((post, key) => {
      if (key === curr) {
        return originalPost;
      }
      return post;
    });

    postUpdate(revertedPosts);
  }
}
