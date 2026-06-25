const helloButton = document.querySelector("#helloButton");

if (helloButton) {
  helloButton.addEventListener("click", () => {
    alert("Hello from your fancy page!");
  });
}
