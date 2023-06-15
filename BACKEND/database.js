import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise();

export async function getExpenses() {
  const [rows] = await pool.query("SELECT * FROM expenseTracker");
  return rows;
}

export async function getExpense(id) {
  const [rows] = await pool.query(`SELECT * FROM expenseTracker where id= ?`, [
    id,
  ]);
  return rows[0]
}

export async function createExpense(id,title,amount,date){
    const [result] = await pool.query(`
    INSERT INTO expenseTracker values (? , ? , ? , ?)
    `,[id,title,amount,date])
    const id2 = result.insertId
    return {id: id, title: title, amount: amount, date: date}
}

// const expenses = await getExpenses();
// const result = await createExpense('1',"Car",'2000','2023-06-14')
// console.log(result);
