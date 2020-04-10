import { v4 as uuid } from "uuid";

const initialState = {
  accounts: [
    {
      account_name: "Mike Tyson",
      account_number: "122323045455",
      account_type: "Savings",
      bank_name: "Unibank",
      bank_branch: "Accra main",
    },
    {
      account_name: "Cristiano Ronaldo",
      account_number: "122525042411",
      account_type: "Current",
      bank_name: "World bank",
      bank_branch: "New York",
    },
  ],
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      const newAccount = {
        id: uuid(),
        account_name: action.account_name,
        account_number: action.account_number,
        account_type: action.account_type,
        bank_name: action.bank_name,
        bank_branch: action.bank_branch,
      };
      return { ...state, accounts: [...state.accounts, newAccount] };
    default:
      return state;
  }
};

export default accountReducer;
