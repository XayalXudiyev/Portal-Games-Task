export async function fetchPosts({ page = 1, limit = 100 }) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: page,
            _limit: limit,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export function createPostElement(post) {
    const postCard = document.createElement("div");
    postCard.className = "col-md-4 mb-4";
  
    const postBody = post.body.split(" ");
    console.log(post.body)
    const isLongText = postBody.length > 10;
    const fullTextId = `full-text-${post.id}`;
  
    postCard.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-id">Post ID: ${post.id}</h5>
            <p class="card-title">${post.title}</p>
            <p class="card-text">
              ${postBody.slice(0, 9).join(" ")}
              ${
                isLongText
                  ? ` <span id="${fullTextId}" class="collapse">${postBody
                      .slice(10)
                      .join(" ")}</span>
                <span class="more-text">
                  <span class="ellipsis">... </span>
                  <a href="#" class="toggleButton" data-toggle="collapse" data-target="#${fullTextId}" aria-expanded="false">
                    Read more
                  </a>
                </span>`
                  : ""
              }
            </p>
          </div>
        </div>
      `;
  
    if (isLongText) {
      const toggleButton = postCard.querySelector(".toggleButton");
      toggleButton.addEventListener("click", function (e) {
        e.preventDefault();
        const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
        toggleButton.setAttribute("aria-expanded", !isExpanded);
        toggleButton.textContent = isExpanded ? "Read more" : "Read less";
        postCard
          .querySelector(".ellipsis")
          .classList.toggle("no-ellipsis", !isExpanded);
      });
    }
    return postCard;
  }
  