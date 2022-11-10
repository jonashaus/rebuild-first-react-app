import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const saveExpenseHandler = (expense) => {
    props.onSaveExpense(expense);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button type="button" onClick={setIsEditing}>
          Add new Expense
        </button>
      ) : (
        <ExpenseForm
          onCancel={disableEditing}
          onSaveExpense={saveExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
