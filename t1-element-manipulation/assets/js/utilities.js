export function addContent() {
  // Add H1
  const h1 = document.createElement('h1');
  h1.id = 'my-name';
  h1.innerText = 'Tristan Huckabee'
  document.body.append(h1);

  // Add Hobbies UL
  let hobbies = ['Video Games', 'Illustration', 'Reading Comics', 'Programming'];
  const ul = document.createElement('ul');
  const ulTitle = document.createElement('h2');
  ulTitle.innerText = 'My Hobbies';
  ul.append(ulTitle);
  hobbies.forEach( hobby => {
    let li = document.createElement('li')
    li.innerText = hobby;
    ul.append(li);
  })
  document.body.append(ul);
}

export function addClock() {
  let clock = document.createElement('div');
  clock.id = 'clockWrapper';
  let clockTime = document.createElement('h2');
  clockTime.classList.add('time');
  clock.append(clockTime);

  const days = ['Sun', 'Mon','Tue','Wed','Thur','Fri','Sat']
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let dateString = document.createElement('p');
  let date = new Date();
  let weekday = days[date.getUTCDay()];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  dateString.innerHTML = `<span>${weekday}</span> ${month} ${day}, ${year}`;
  clock.append(dateString)

  document.body.append(clock)
}

export function styleThings() {
  let h1 = document.querySelector('#my-name');
  let ul = document.querySelector('ul');
  let liAll = document.querySelectorAll('li');
  
  h1.classList.add('name');
  ul.classList.add('my-details');
  liAll.forEach( li => li.classList.add('detail'));
}