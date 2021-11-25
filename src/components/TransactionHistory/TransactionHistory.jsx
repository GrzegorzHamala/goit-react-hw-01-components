import React from "react";
import "./TransactionHistory.css";
import PropTypes from "prop-types";

function TransactionHistory({ items }) {
  return (
    <table className="transactionHistory">
      <thead>
        {items
          .filter((items, id) => id === 0)
          .map((item) => (
            <tr className="transaction" key={item.id}>
              <th className="transactionColumn">{Object.keys(item)[1]}</th>
              <th className="transactionColumn">{Object.keys(item)[2]}</th>
              <th className="transactionColumnTwo">{Object.keys(item)[3]}</th>
            </tr>
          ))}
      </thead>

      <tbody>
        {items
          .filter((items, id) => id < 5)
          .map((item) => (
            <tr className="transaction" key={item.id}>
              <td className="transactionLine">{item.type}</td>
              <td className="transactionLine">{item.amount}</td>
              <td className="transactionLine">{item.currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
