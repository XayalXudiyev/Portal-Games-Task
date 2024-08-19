export const fetchPosts = async ({ page = 1, limit = 100 }) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};


export const createPost = (post) => {
  const postCard = document.createElement("div");
  postCard.className = "col-md-4 mb-4";

  const postBody = post.body.split(" ");
  const longText = postBody.length > 10;
  const previewText = postBody.slice(0, 9).join(" ");
  const hiddenText = postBody.slice(9).join(" ");

  postCard.innerHTML = `
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-id">Post ID: ${post.id}</h5>
        <p class="card-title">${post.title}</p>
        <p class="card-text">
          ${previewText}
          ${longText ? `<span class="hidden-text">${hiddenText}</span>` : ""}
          ${longText ? `<a href="#" class="toggleButton"></a>` : ""}
        </p>
        
      </div>
    </div>
  `;

  if (longText) {
    const toggleButton = postCard.querySelector(".toggleButton");
    toggleButton.addEventListener("click", () => {
      const hiddenTextElement = postCard
        .querySelector(".hidden-text")
        .classList.toggle("visible");
    });
  }

  return postCard;
};
