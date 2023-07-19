import React from 'react';
import "./ExpenseDate.scss"

const ExpenseDate = (expdtprop) => {

    const month = expdtprop.date.toLocaleString('en-US', { month: 'long' });
    const year = expdtprop.date.getFullYear();
    const day = expdtprop.date.toLocaleString('en-US', { day: '2-digit' });

    return <div className="expense-date">
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
    </div>
}

export default ExpenseDate;