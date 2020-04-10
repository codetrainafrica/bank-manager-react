import { v4 as uuid } from "uuid";

const initialState = {
  accounts: [
    {
      id: "1",
      account_name: "Mike Tyson",
      account_number: "122323045455",
      account_type: "Savings",
      bank_name: "Unibank",
      bank_branch: "Accra main",
    },
    {
      id: "2",
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
        account_name: action.account.account_name,
        account_number: action.account.account_number,
        account_type: action.account.account_type,
        bank_name: action.account.bank_name,
        bank_branch: action.account.bank_branch,
      };
      return { ...state, accounts: [...state.accounts, newAccount] };
    case "DELETE_ACCOUNT":
      const filteredAccounts = state.accounts.filter(
        (account) => account.id !== action.id
      );
      return {...state, accounts: filteredAccounts}
    default:
      return state;
  }
};

export default accountReducer;
