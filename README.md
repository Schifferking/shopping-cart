# Shopping cart

This project shows a MPA (multi-page application) that displays a home and a shop page. On the top of each page there is a navigation bar to move between pages. These are the topics learned previously to make this project:

- Testing in react
- Proptypes
- React router
- Styling in react

<br>The shop page includes products fetched from the FakeStore API. These products contain a field where users can write the amount they desire and buttons to adjust quantity. Also, there is a button next to each product to send them to the shopping cart. This shopping cart displays the correct amount of items to buy.

<br> More information here: [The Odin Project's project page](https://www.theodinproject.com/lessons/react-new-shopping-cart).

## to-do

- Two pages: **home** and **shop**
  - **Home** _component_ (just contains website information)
  - **Shop**
    - Add a shopping cart button with products to buy count (clicking should lead you to "buy" products added to cart)
    - A card _component_ for products
      - It should have an input field to write quantity
      - Image / title product
      - Buttons to decrease / increase quantity to buy
      - Button that sends quantity selected to shopping cart
- Both pages show a navigation bar with links to both pages (Another _component_)
