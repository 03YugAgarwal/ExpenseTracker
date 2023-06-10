import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filterVal, setFilterVal] = useState(2023);

  const getFilter = (filter) => {
    setFilterVal(filter);
  };

  const filteredExpenses = props.expenses.filter((e) => {
    return e.date.getFullYear().toString() === filterVal;
  });

  const showFallback = filteredExpenses.length === 0 && <p className="expenses-list__fallback">No expenses.</p>
  const noFallback = filteredExpenses.length > 0 &&
  filteredExpenses.map((e) => {
    return (
      <ExpenseItem
        key={e.id}
        title={e.title}
        amount={e.amount}
        date={e.date}
      />
    );
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterVal} getFilter={getFilter} />
      <ExpensesChart expenses={filteredExpenses}/>
      {showFallback}
      {noFallback}
    </Card>
  );
};

export default Expenses;
