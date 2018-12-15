# amazon

This is a command line based amazon-like storefront. It uses the npm inquirer package and MySQL database backend together with npm mysql. 

Use the code from bamazon.sql to create and populate your database.

The interface allows the user to view current available inventory for listed items. Lists item ID, Product Name, Department, Price and Quantity of all items. User is able to purchase an item by entering the ID of that item and the quantity they want. If the item is available with the chosen quantity then the user's order is fulfilled. This will display the total purchase price and also update the store database. If the chosen quantity is not available then the user will have to modify their order and the inventory will be displayed again. 

To run the program:
npm install 
node bamazonCustomer.js
Follow prompts