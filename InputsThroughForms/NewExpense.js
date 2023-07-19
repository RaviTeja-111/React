import React, {useState} from 'react';
import JustForm from './JustForm';

import './NewExpense.scss';

export default function NewExpense(appprop) {
const [display, setDisplay] = useState(false);
    const inputsHandler = (dataFromForm) => {

        const inputsJF = {

            id: Math.random().toString(),
            ...dataFromForm
        }
        console.log(inputsJF);
        appprop.onGetData4mNE(inputsJF);
    };
    const displayHandler = ()=>{
        setDisplay(true);
    }
    const closeHandler = ()=>{
        setDisplay(false);
    }
    return <div className='new-expense'>

       {display && <JustForm onGettingInputs={inputsHandler} onClosingForm={closeHandler}/>}
       {!display && <button onClick={displayHandler}>Add Expense</button>}
    </div>
}