import { fetchPosts, createPostElement } from "./post.js";

document.addEventListener("DOMContentLoaded", async function () {
  const postsContainer = document.getElementById("posts-container");

  try {
    const posts = await fetchPosts({ page: 1, limit: 9 });
    posts.forEach((post) => {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error(error);
  }
});
