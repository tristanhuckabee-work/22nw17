export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log(bodyChildElements);
  // bodyChildElements.forEach(el => console.log(el));
  // for(let el in bodyChildElements) {
  //   console.log(el);
  // }
  for (let i = 0; i < bodyChildElements.length; i++) {
    console.log(bodyChildElements[i]);
    console.log(bodyChildElements.item(i));
  }

  const div = bodyChildElements[0];

  const divChildElements = div.children; // HTMLCollection [span]
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  const span = divChildElements[0]; // <span>Yes!</span>
  // debugger
};