const addPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".new-post").addEventListener("submit", addPostHandler);

const delButtonHandler = async (event) => {
  const id = event.target.getAttribute("delete-data-id");

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Post failed to be removed. Try again");
  }
};

document
  .querySelector("#delete-button")
  .addEventListener("click", delButtonHandler);
