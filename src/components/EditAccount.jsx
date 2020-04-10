import React, { Component } from "react";
import { connect } from "react-redux";
import { editAccount } from "../store/accountActions";

class EditAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account_name: props.account.account_name,
      account_number: props.account.account_number,
      account_type: props.account.account_type,
      bank_name: props.account.bank_name,
      bank_branch: props.account.bank_branch,
    };
    this.id = props.match.params.id;
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editAccount(this.id, this.state);
    this.setState({
      account_name: "",
      account_number: "",
      account_type: "",
      bank_name: "",
      bank_branch: ""
    });
    this.props.history.push("/");
  };
  handleGoBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container add-account-container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h4 className="has-text-centered is-size-4">UPDATE ACCOUNT INFORMATION</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Bank name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter bank name e.g. UniBank"
                    name="bank_name"
                    onChange={this.handleChange}
                    value={this.state.bank_name}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Bank branch</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter bank branch e.g. Accra main"
                    name="bank_branch"
                    onChange={this.handleChange}
                    value={this.state.bank_branch}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Account name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter account name e.g. Kwame Lewis"
                    name="account_name"
                    onChange={this.handleChange}
                    value={this.state.account_name}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Account number</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    minLength={12}
                    maxLength={12}
                    placeholder="Enter account number e.g. 123456789102"
                    name="account_number"
                    onChange={this.handleChange}
                    value={this.state.account_number}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Account type</label>
                <div className="control">
                  <div className="select">
                    <select
                      name="account_type"
                      onChange={this.handleChange}
                      value={this.state.account_type}
                    >
                      <option value="Savings">Select account type</option>
                      <option value="Savings">Savings</option>
                      <option value="Current">Current</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button
                    onClick={this.handleSubmit}
                    type="submit"
                    className="button is-danger"
                  >
                    Update
                  </button>
                </div>
                <div className="control">
                  <button
                    onClick={this.handleGoBack}
                    className="button is-danger is-light"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    account: state.accounts.find(account => account.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
  editAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
