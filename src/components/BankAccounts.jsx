import React from "react";
import { connect } from "react-redux";
import AccountInfo from "./AccountInfo";
import { deleteAccount } from "../store/accountActions";

const BankAccounts = ({ accounts, deleteAccount }) => {
  const bankAccounts = accounts.map((account) => {
    return (
      <div className="column is-4" key={account.id}>
        <AccountInfo
          id={account.id}
          account_type={account.account_type}
          account_name={account.account_name}
          account_number={account.account_number}
          bank_name={account.bank_name}
          bank_branch={account.bank_branch}
          deleteAccount={deleteAccount}
        />
      </div>
    );
  });
  return (
    <div className="container bank-accounts-container">
      <div className="columns" style={{ flexWrap: "wrap" }}>
        {bankAccounts}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accounts: state.accounts,
});

const mapDispatchToProps = {
  deleteAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankAccounts);
