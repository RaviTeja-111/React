import React, { useState } from 'react';
import './Expenses.scss'
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';

const styleObj = {
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "100px",
}
const Expenses = (appprop) => {
  const [filterYr, setFilterYr] = useState('');
  const filteredExp = appprop.arr.filter(exp => {
    return exp.date.getFullYear().toString() === filterYr;
  })
  const gettingYrHandler = (yr4mEF) => {
    setFilterYr(yr4mEF);
  }

  const handleDeleteExpense = (id) => {
    appprop.onDeleteExpense(id)
    console.log(id);
  }
  const handleTitleChange = (id, newTitle) => {
    const updatedExpenses = appprop.arr.map(exp => {
      if (id === exp.id) {
        return { ...exp, title: newTitle }
      }
      return exp;
    });
    console.log(newTitle, 'with id-', id, 'get the expenses update as', updatedExpenses);
    appprop.onTitleChange(updatedExpenses);
  }
  let expContent = <h3 style={styleObj}> No Expenses</h3>;
  if (filteredExp.length > 0) {
    expContent = filteredExp.map(items => <ExpensesList
      key={items.id}
      id={items.id}
      date={items.date}
      title={items.title}
      price={items.price}
      onTitleChange={newTitle => handleTitleChange(items.id, newTitle)}
      onDeleteExpense={handleDeleteExpense} />)
  }


  return <div className='expenses'>
   
    <ExpenseFilter forDefault={filterYr} onGettingYr={gettingYrHandler} />
    {expContent}

    {/* <ExpensesList date={appprop.arr[0].date} title={appprop.arr[0].title} amount={appprop.arr[0].price} />
    <ExpensesList date={appprop.arr[1].date} title={appprop.arr[1].title} amount={appprop.arr[1].price} />
    <ExpensesList date={appprop.arr[2].date} title={appprop.arr[2].title} amount={appprop.arr[2].price} />
    <ExpensesList date={appprop.arr[3].date} title={appprop.arr[3].title} amount={appprop.arr[3].price} /> */}

  </div>
}

export default Expenses;