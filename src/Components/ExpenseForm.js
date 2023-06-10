import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState(0);

  const [showForm,setShowForm] = useState(false)

  // const [userInput, setUserInput] = useState({title: '', amount: 0, date:''})

  const handleTitleInput = (e) => {
    setEnteredTitle(e.target.value);
  };
  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };
  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredValues = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.getValues(enteredValues);

    setEnteredAmount(0);
    setEnteredTitle("");
    setEnteredDate("");
  };

  const handleShowForm = () => {
    setShowForm((prevState) => !prevState)
  }

  return (
    <>
      {showForm && <button onClick={handleShowForm}>Add new Expense</button>}
      {!showForm && <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              onChange={handleTitleInput}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              name=""
              id=""
              min="0.01"
              step="0.01"
              onChange={handleAmountChange}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              name=""
              id=""
              onChange={handleDateChange}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={handleShowForm}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>}
    </>
  );
};

export default ExpenseForm;
