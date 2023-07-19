import ExpenseDate from "./ExpenseDate"
import "./ExpensesList.scss"
import React, { useState } from 'react';
import Card from "./Card"
import Modal from 'react-modal';



export default function ExpensesList(expprop) {

    const [titleC, setTitleC] = useState(expprop.title);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };


    const handleModalTitleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const handleChangeTitle = () => {
        setTitleC(newTitle);
        console.log(newTitle, 'will send to Expenses');
        closeModal();
        expprop.onTitleChange(newTitle);
    }
    const handleDelete =()=>{
        expprop.onDeleteExpense(expprop.id);
        console.log(expprop.id);
    }

    return <Card className="expense-item">
        <ExpenseDate date={expprop.date} />
            <div className="expenses-item__title">/
                <h2>{titleC}</h2>
            </div>
            <div className="expense-item__price">
                ₹{expprop.price}
            </div>      
                <Modal isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                >
                <h2>Change Title Here</h2>
                <input type="text" value={newTitle} onChange={handleModalTitleChange} />
                <button onClick={handleChangeTitle}>Save</button>
                <button onClick={closeModal}>Cancel</button>
                </Modal>
        <button onClick={openModal}>Change Title</button>
        <button onClick={handleDelete}>Delete</button>
    </Card>;
}