import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";
import { useState, useEffect } from "react";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

const DUMMY_EXPENSES = [];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [oldID,setNewID] = useState(1) 

  useEffect(() => {
    fetch("http://localhost:8080/expenses/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setExpenses(data);
        const oldExpensesID = Object.keys(data).length
        setNewID(oldExpensesID + 1)

        // console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  for (let i = 0; i < expenses.length; i++) {
    // console.log(expenses[i].date);
    expenses[i].date = new Date(expenses[i].date);
  }

  const getExpense = async (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
    
  };
  // const getExpense = (expense) => {
  //   setExpenses((prevState) => {
  //     return [expense, ...prevState];
  //   });
  // };

  // console.log(expenses);
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense getExpense={getExpense} ID={oldID} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
