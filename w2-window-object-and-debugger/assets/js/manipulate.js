export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  let title = document.querySelector('title');
  title.innerText = "Tristan's Portfolio";
  return 'Updated Title';
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  let h1 = document.querySelector('h1');
  h1.innerText = 'I am Tristan Huckabee';
  return 'Updated Header';
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
   passage about yourself */
  let aboutMe = document.querySelector('.section p');
  aboutMe.innerText = 'Here is my change to the body.'
  return 'Updated About Me'
}