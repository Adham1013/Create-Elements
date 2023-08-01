const createHTMLElement = (id, count) => {
  const div = document.getElementById(id);
  for (let i = 1; i <= count; i++) {
    const h2 = document.createElement("h2");
    div.appendChild(h2).appendChild(document.createTextNode(`This is ${i} h2`));
  }
};
  const imgEl = document.getElementById("img");
  imgEl.appendChild(document.createElement("img")).setAttribute("src", "img.jpg");

createHTMLElement("yellow", 13);
createHTMLElement("red", 20);
createHTMLElement("dark", 33);
createHTMLElement("black", 100);
