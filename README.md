# Shopping cart

This project shows a MPA (multi-page application) that displays a home and a shop page. On the top of each page there is a navigation bar to move between pages. These are the topics learned previously to make this project:

- Testing in react
- Proptypes
- React router
- Styling in react

Some new topics learned doing this project:

- Mock Service Worker
- custom hooks
- testing custom hooks with renderHook from React Testing Library

<br>The shop page includes products fetched from the [FakeStore API](https://fakestoreapi.com/). These products contain a field where users can write the amount they desire and buttons to adjust quantity. Also, there is a button next to each product to send them to the shopping cart. This shopping cart displays the correct amount of items to buy.

<br> More information here: [The Odin Project's project page](https://www.theodinproject.com/lessons/react-new-shopping-cart).

## to-do

- Change price variable type from string to number in src/mocks/handlers.js and tests in app.test.jsx
- Remove tests that only test certain elements being rendered
- Add styles
- Add remaining tests
  - Product card behaviours (in App.test.jsx)
    1. test that increment button increments input field value in 1 when pressed
    2. test that decrement button decrements input field value in 1 when pressed
    3. test that input field does nothing when is not used
    4. test that input field value updates when entering a new number
    5. test that input field value changes to 0 when entering a negative number
    6. test that send to cart button updates shopping cart quantity
