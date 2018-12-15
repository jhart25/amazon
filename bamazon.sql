DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Food", "Pet", 29.99, 20), ("Cat Food", "Pet", 29.99, 20), ("Playstation 4", "Electronics", 299.99, 10),
("TV", "Electronics", 599.99, 10), ("1 Qt Motor Oil", "Automotive", 5.99, 50), 
("Roadside Kit", "Automotive", 29.99, 10), ("Diapers", "Baby", 29.99, 20), ("Stroller", "Baby", 199.99, 10),
("Fire Pit", "Outdoor", 39.99, 10), ("Barbeque Grill", "Outdoor", 99.99, 10);
