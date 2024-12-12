import { createContext, useReducer } from "react";

export const BirthdaysContext = createContext();

export const birthdaysReducer = (state, action) => {
  switch (action.type) {
    case "SET_BIRTHDAYS":
      return {
        birthdays: action.payload,
      };
    case "CREATE_BIRTHDAY":
      return {
        birthdays: [action.payload, ...state.birthdays],
      };
    case "DELETE_BIRTHDAY":
      return {
        birthdays: state.birthdays.filter((w) => w._id !== action.payload._id),
      };
    case "UPDATE_BIRTHDAY":
      return {
        birthdays: state.birthdays.map((b) =>
          b._id === action.payload._id ? action.payload : b
        ),
      };
    default:
      return state;
  }
};

export const BirthdaysContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(birthdaysReducer, {
    birthdays: null,
  });

  return (
    <BirthdaysContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BirthdaysContext.Provider>
  );
};
