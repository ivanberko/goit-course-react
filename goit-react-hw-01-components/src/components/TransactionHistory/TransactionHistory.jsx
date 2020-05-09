import React from "react";
import PropTypes from "prop-types";
import style from "./transactions.module.css";

const TransactionHistory = ({ items = [], children }) => (
  <table className={style.transactionHistory}>
    {children}
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
