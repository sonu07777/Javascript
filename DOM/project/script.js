let btn = document.getElementById("button");
const randomecolor = () => {
  let hex = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + hex[Math.floor(Math.random() * 16)];
  }
  return cons;
};
function changerandomecolore() {
  document.body.style.backgroundColor = randomecolor();
}
btn.addEventListener("click", changerandomecolore);
