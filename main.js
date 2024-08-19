import { createPost, fetchPosts } from "./post";

document.addEventListener("DOMContentLoaded", async function () {
  const postsContainer = document.getElementById("posts-container");

  const posts = await fetchPosts({ page: 1, limit: 9 });
  posts.forEach((post) => {
    const postElement = createPost(post);
    postsContainer.appendChild(postElement);
  });
});
