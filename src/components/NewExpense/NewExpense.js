import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {


  const [editingMode,setEditingMode]=useState(false)


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setEditingMode(false);
  };


  const editingHandler = ()=>{
    setEditingMode(true);
  }
  const cancelEditing = ()=>{
    setEditingMode(false);
  }

  return (
    <div className='new-expense'>
      {!editingMode && <button onClick={editingHandler}>Add New Expense</button>}
      {editingMode && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelEditing={cancelEditing} />}
    </div>
  );
};

export default NewExpense;
