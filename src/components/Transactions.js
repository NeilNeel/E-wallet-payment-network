import React, { useState } from "react";
import "../styles/Transactions.css";

export default function Transactions() {
  const [formData, setFormData] = useState({
    walletId: "",
    recipientEmailId: "",
    recipientPhoneId: "",
    amount: "",
    status: "Pending", // Default status
    transactionType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.walletId) formErrors.walletId = "Wallet ID is required";
    if (!formData.recipientEmailId)
      formErrors.recipientEmailId = "Recipient Email ID is required";
    if (!formData.recipientPhoneId)
      formErrors.recipientPhoneId = "Recipient Phone ID is required";
    if (!formData.amount || parseFloat(formData.amount) <= 0)
      formErrors.amount = "Valid amount is required";
    if (!formData.transactionType)
      formErrors.transactionType = "Transaction Type is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Current date will be added server-side

        // Handle successful submission
        alert("Transaction submitted successfully!");
        // Reset form or redirect
      } catch (error) {
        console.error("Transaction submission error:", error);
      }
    }
  };

  return (
    <div className="payment-transaction-form-container">
      <form onSubmit={handleSubmit} className="payment-transaction-form">
        <h2 className="form-title">Payment Transaction Form</h2>

        <label htmlFor="walletId">Wallet ID</label>
        <div className="input-wrapper">
          <input
            id="walletId"
            type="number"
            name="walletId"
            value={formData.walletId}
            onChange={handleChange}
          />
          {errors.walletId && <span className="error">{errors.walletId}</span>}
        </div>

        <label htmlFor="recipientEmailId">Recipient Email ID</label>
        <div className="input-wrapper">
          <input
            id="recipientEmailId"
            type="number"
            name="recipientEmailId"
            value={formData.recipientEmailId}
            onChange={handleChange}
          />
          {errors.recipientEmailId && (
            <span className="error">{errors.recipientEmailId}</span>
          )}
        </div>

        <label htmlFor="recipientPhoneId">Recipient Phone ID</label>
        <div className="input-wrapper">
          <input
            id="recipientPhoneId"
            type="number"
            name="recipientPhoneId"
            value={formData.recipientPhoneId}
            onChange={handleChange}
          />
          {errors.recipientPhoneId && (
            <span className="error">{errors.recipientPhoneId}</span>
          )}
        </div>

        <label htmlFor="amount">Amount</label>
        <div className="input-wrapper">
          <input
            id="amount"
            type="number"
            name="amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
          />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </div>

        <label htmlFor="transactionType">Transaction Type</label>
        <div className="input-wrapper">
          <select
            id="transactionType"
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
          >
            <option value="">Select Transaction Type</option>
            <option value="Transfer">Transfer (Send)</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Request</option>
          </select>
          {errors.transactionType && (
            <span className="error">{errors.transactionType}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit ✔️
        </button>
      </form>
    </div>
  );
}
