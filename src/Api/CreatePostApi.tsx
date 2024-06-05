/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE2_URL;
export const useCreatePost = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createPostRequest = async (createPostFormData: FormData) => {
    try {
      const accessToken = await getAccessTokenSilently();
      console.log(createPostFormData);

      const response = await fetch(`${API_BASE_URL}/api/v1/posts/createPost`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: createPostFormData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const parsedResponse = await response.json();

      return parsedResponse;
    } catch (error) {
      console.log("Error creating post:", error);
    }
  };
  const {
    mutate: createPost,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createPostRequest);

  if (isSuccess) {
    toast.success("Your post is now live!");
  }
  if (error) {
    console.log(error);
    toast.error("Unable to create your post");
  }

  return { createPost, isLoading };
};

export const useGetPosts = () => {
  const getPostsRequest = () => {
    const await = fetch();
  };
};
