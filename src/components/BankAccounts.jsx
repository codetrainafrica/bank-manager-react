import React from "react";
import AccountInfo from "./AccountInfo";
import { connect } from "react-redux";

const BankAccounts = ({ accounts }) => {
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

export default connect(mapStateToProps)(BankAccounts);
