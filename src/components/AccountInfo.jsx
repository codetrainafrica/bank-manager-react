import React from "react";
import { Link } from "react-router-dom";

const AccountInfo = ({
  id,
  account_type,
  account_name,
  account_number,
  bank_name,
  bank_branch,
  deleteAccount
}) => {
  const removeAccount = () => {
    deleteAccount(id);
  };
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title has-text-danger">
          {account_type} Account
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <table className="table is-striped is-hoverable">
            <tbody>
              <tr>
                <th>Bank</th>
                <td>{bank_name}</td>
              </tr>
              <tr>
                <th>Branch</th>
                <td>{bank_branch}</td>
              </tr>
              <tr>
                <th>Account name</th>
                <td>{account_name}</td>
              </tr>
              <tr>
                <th>Account number</th>
                <td>{account_number}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className="card-footer">
        <Link to={`/edit-account/${id}`} className="card-footer-item">
          Edit
        </Link>
        <a onClick={removeAccount} className="card-footer-item">
          Delete
        </a>
      </footer>
    </div>
  );
};

export default AccountInfo;
