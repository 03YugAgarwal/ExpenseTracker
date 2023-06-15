CREATE DATABASE dbmsDA3;
USE dbmsDA3;

CREATE table expenseTracker(
    id int not null,
    title varchar(20) not null,
    amount int,
    date Date,
    primary key(id)
)

INSERT into expenseTracker values (1,"Shoes",10,now());