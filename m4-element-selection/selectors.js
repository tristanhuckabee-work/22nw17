const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seeded = document.getElementsByClassName('seed');
    // let seeded = document.querySelectorAll('.seed');
    console.log(seeded);
    // 2. Get all seedless fruit elements
    // Your code here
    let noseed = document.getElementsByClassName('seedless');
    console.log(noseed)
    // 3. Get first seedless fruit element
    // Your code here
    let firstSeedless = document.querySelector('.seedless');
    console.log(firstSeedless);
    // console.log(noseed[0]);
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    // let you = document.getElementsByTagName('span')[0];
    let you = document.querySelector('#wrapper p span');
    // document
    //   .querySelector('#wrapper')
    //   .querySelector('p')
    //   .querySelector('span');
    console.log(you);
    // 5. Get all children of element "wrapper"
    // Your code here
    let chilren = document.getElementById('wrapper').children;
    console.log(chilren);
    // 6. Get all odd number list items in the list
    // Your code here
    let odds = document.querySelectorAll('.odd');
    console.log(odds);
    // 7. Get all even number list items in the list
    // Your code here
    // let evens = document.querySelectorAll('ol li:not(.odd)');
    let evens = document.querySelectorAll('.odd + li');
    console.log(evens);
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    // let companies = document.querySelectorAll('a:not(.social, .shopping)');
    let companies = document.querySelectorAll('a:not(a[class])');
    console.log(companies);
    // 9. Get "Amazon" list element
    // Your code here
    let amazon = document.querySelector('.shopping');
    console.log(amazon)
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let unicorns = document.querySelectorAll('#three li');
    console.log(unicorns);
}

window.onload = select;