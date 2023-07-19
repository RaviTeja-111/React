import React, { useEffect, useState } from 'react';
import './App.scss';
import Expenses from './CustomComponents/Expenses';
import NewExpense from './InputsThroughForms/NewExpense';


const keyIs = 'inputs';

function App() {

  const dummyExpenses = [
    { id: 'e1', title: "Cars", date: new Date(2021, 1, 1), price: 200000 },
    { id: 'e2', title: "Bikes", date: new Date(2022, 2, 5), price: 150000 },
    { id: 'e3', title: "Bicycles", date: new Date(2023, 2, 6), price: 7000 },
    { id: 'e4', title: "Misc", date: new Date(2023, 11, 12), price: 3000 }
  ];

  // const [inputExp, setInputExp] = useState(() =>{
  //   const storedData = JSON.parse(localStorage.getItem(keyIs));
  //   return storedData ? storedData : dummyExpenses;
  // });

  const [inputExp, setInputExp] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(keyIs));
    if (storedData) {
      const retrivedData = storedData.map((exp) => ({
        ...exp,
        date: new Date(exp.date)
      }));

      return retrivedData;
    }
    return dummyExpenses;
  });

  const data4mNEHandler = (dataOfNE) => {
    setInputExp([dataOfNE, ...inputExp]);
    localStorage.setItem(keyIs, JSON.stringify(inputExp));
  };

  useEffect(() => {
    localStorage.setItem(keyIs, JSON.stringify(inputExp));
  }, [inputExp]);

  const handleDeleteExpense = (expId) => {
    const updatedExpenses = inputExp.filter(exp => exp.id !== expId);
    setInputExp(updatedExpenses);
    localStorage.setItem(keyIs, JSON.stringify(updatedExpenses));
  }
  const titleHandler =(updatedExpenses)=>{
    setInputExp(updatedExpenses);
    localStorage.setItem(keyIs, JSON.stringify(updatedExpenses));
  }


  return (
    <div className='App'>
      <NewExpense onGetData4mNE={data4mNEHandler} />
      <Expenses arr={inputExp} 
        onDeleteExpense={handleDeleteExpense} 
        onTitleChange ={titleHandler}/>
    </div>
  );
}

export default App;
