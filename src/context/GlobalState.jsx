import { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //action ส่งค่าไป ลบ 
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }
  
  //action ส่งค่าไป เพิ่ม
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
