import React, {createContext, useReducer} from 'react';
import AppReducer from'./AppReducer.js'
// initial state 

const initialState={
    transactions:[
   { id: 1, text: 'Flower', amount: -20 },
   { id: 2, text: 'Salary', amount: 300 },
   { id: 3, text: 'Book', amount: -10 },
   { id: 4, text: 'Camera', amount: 150 }
 ]

}
//create context 
export const GlobalContent= createContext(initialState)

//provider commponent 

export const GlobalProvider= ({children}) =>{

const[state,dispatch] = useReducer(AppReducer,initialState);

//Actions 

function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id

    })
}
function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction

    })
}

return(<GlobalContent.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContent.Provider>)

}