import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import DATE_FORMATER from 'dateformat'
const NewExpense = (props) => {
  const getValues = async (expenses) => {
    const expenseData = {
      ...expenses,
      id: props.ID.toString(),
    };

    let date = DATE_FORMATER( expenseData.date, "yyyy-mm-dd HH:MM:ss" );
    
    fetch('http://localhost:8080/expenses/', {
      method: 'POST',
      body: JSON.stringify(
        {
          id: expenseData.id,
          title: expenseData.title,
          amount: expenseData.amount,
          date: date,
        }
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          // Handle data
       })
       .catch((err) => {
          console.log(err.message);
       });

    props.getExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm getValues={getValues} />
    </div>
  );
};

export default NewExpense;
