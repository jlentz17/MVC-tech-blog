async function newFormHandler(event) {
  event.preventDefault();
  const content = document.querySelector("input[name='content']").value;
  const title = document.querySelector("input[name='title']").value;
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#newPost").addEventListener("click", newFormHandler)
