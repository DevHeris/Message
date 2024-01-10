const messageForm = document.querySelector("#message-form");

const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  messageForm.classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerText = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  messageForm.classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const messageInput = document.querySelector("#message-input");
  const encrypted = btoa(messageInput.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
