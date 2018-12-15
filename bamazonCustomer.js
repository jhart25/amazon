var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Asstastic1!",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId +"\n");
    listProducts();
});

function listProducts() {
    console.log("Listing all products!");
    connection.query("SELECT * FROM products", function(err,res) {
        if(err) throw err;
        //console.log(res);

        for (var i = 0; i <res.length; i++) {
            console.log("Item ID: " + res[i].item_id + "  **  " + "Product: " + res[i].product_name + "  **  " + "Department: " + res[i].department_name + "  **  " + "Price: $" + res[i].price + "  **  " + "Quantity: " + res[i].stock_quantity + "\n");
        }

        promptPurchase();
    });
}

function promptPurchase() {
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Enter the ID of the item you would like to purchase"
        },
        {
            type: "input",
            name: "quantity",
            message: "How many would you like to buy?"
        }
    ]).then(function(input) {
        var chosenItem = input.item_id;
        var quantity = input.quantity;

        var queryId = "SELECT * FROM products WHERE ?";

        connection.query(queryId, {item_id: chosenItem}, function(err, res) {
            if (err) throw err;

            if (res.length === 0) {
                console.log("Error: Please select a valid item ID!");
                listProducts();
            } else {
                var productData = res[0];
                if (quantity <= productData.stock_quantity) {
                    console.log("Item is in stock. Placing your order now!");

                    var updateQuery = "UPDATE products SET stock_quantity= " + (productData.stock_quantity - quantity) + " WHERE item_id= " + chosenItem;

                    connection.query(updateQuery, function(err, res) {
                        if (err) throw err;
                        console.log("Order placed. Your total is $" + productData.price * quantity + "\n");

                        connection.end();
                    })
                } else {
                    console.log("Sorry, there is not enough inventory for your order. Please modify your order and try again..");
                    listProducts();
                }
            }
        });
    });
}