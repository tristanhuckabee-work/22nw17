const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seeded = document.querySelectorAll('.seed');
    console.log('1: ', seeded);
    // 2. Get all seedless fruit elements
    // Your code here
    let noseed = document.querySelectorAll('.seedless');
    console.log('2: ', noseed);
    // 3. Get first seedless fruit element
    // Your code here
    console.log('3: ', seeded[0]);
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    let you = document.querySelector('#wrapper p span');
    console.log('4: ', you);
    // 5. Get all children of element "wrapper"
    // Your code here
    let wrapperChildren = document
      .querySelector('#wrapper')
      .children;
    console.log('5: ', wrapperChildren);
    // 6. Get all odd number list items in the list
    // Your code here
    let odds = document.querySelectorAll('.odd');
    console.log('6: ', odds);
    // 7. Get all even number list items in the list
    // Your code here
    let evens = document
      .querySelectorAll('ol li:not(.odd)');
    console.log('7: ', evens);
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    let companies = document.querySelectorAll('#three a:not(.shopping, .social)');
    console.log('8: ', companies);
    // 9. Get "Amazon" list element
    // Your code here
    let amazon = document.querySelector('.shopping');
    console.log('9: ', amazon);
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let unicorns = document.querySelectorAll('#three ul > li');
    console.log('10: ', unicorns);
}

window.onload = select;