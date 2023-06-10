import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import { useState } from "react";


const ExpenseItem = (props) => {
    const {title,amount,date} = props

    const [stateTitle, setStateTitle] = useState(title)

    const handleChangeTitle = () => {
      setStateTitle('Updated')
      // console.log("Clicked");
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{stateTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {false && <button onClick={handleChangeTitle}>Change Title</button>}
    </Card>
  );
};

export default ExpenseItem;
