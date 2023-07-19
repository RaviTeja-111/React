import React, { useState } from 'react';

import './JustForm.scss';

export default function JustForm(propsNE) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const inputData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            price: enteredAmount
        };
        propsNE.onGettingInputs(inputData);
        console.log(inputData);

        propsNE.onClosingForm();

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };

   
    return (<form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div>
                <label>Item Name</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div >
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div >
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button onClick={propsNE.onClosingForm}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
}