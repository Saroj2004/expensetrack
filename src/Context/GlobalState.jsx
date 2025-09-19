import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  transactions: [] // all income & expense items stored here
};

// Create context
export const GlobalContext = createContext(initialState);

// Reducer (handles actions like add / delete)
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (txn) => txn.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Provider (wraps the whole app)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addTransaction(txn) {
    dispatch({ type: "ADD_TRANSACTION", payload: txn });
  }

  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
