// services/QueueServices/likeQueueServices.ts
import { usePostStore, useSinglePostStore } from "@/store/usePostStore";
import { RecordModel } from "pocketbase";
import { postLikeServices } from "../guffServices/postLikeServices";

export async function postLikeQueue(
  post_id: string,
  user_id: string,
) {
  const { postData: multiPostData, setPostData: setMultiPostData } =
    usePostStore.getState();
  const { postData: singlePostData, setPostData: setSinglePostData } =
    useSinglePostStore.getState();

  // Handle single post case
  if (singlePostData && singlePostData.id == post_id) {
    const originalPost = { ...singlePostData };
    const updatedPost = {
      ...singlePostData,
      isLiked: true,
      likes: singlePostData.likes + 1,
    };
    setSinglePostData(updatedPost);

    const response = await postLikeServices(post_id, user_id);
    if (!response.isSuccess) {
      setSinglePostData(originalPost);
    }
    return;
  }

  // Handle multiple posts case
  if (multiPostData) {
    let originalPost: RecordModel | null = null;
    let updatedIndex: number | null = null;

    const updatedPosts = multiPostData.map((post, index) => {
      if (post.id === post_id && !post.isLiked) {
        originalPost = { ...post };
        updatedIndex = index;
        return {
          ...post,
          isLiked: true,
          likes: post.likes + 1,
        };
      }
      return post;
    });

    if (updatedIndex !== null && originalPost !== null) {
      setMultiPostData(updatedPosts);

      const response = await postLikeServices(post_id, user_id);
      if (!response.isSuccess) {
        // Ensure revertedPosts is always RecordModel[]
        const revertedPosts: RecordModel[] = updatedPosts.map((post, index) =>
          index === updatedIndex ? originalPost! : post
        );
        setMultiPostData(revertedPosts);
      }
    }
  }
}
