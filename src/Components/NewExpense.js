import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {

  const getValues = (expenses) => {
    const expenseData = {
      ...expenses,
      id: Math.random().toString()
    }

    props.getExpense(expenseData)

  }

  return (
    <div className="new-expense">
      <ExpenseForm getValues={getValues}/>
    </div>
  );
};

export default NewExpense;
