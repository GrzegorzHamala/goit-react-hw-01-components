import React from "react";
import "./TransactionHistory.css";
import PropTypes from "prop-types";

function TransactionHistory({ items}) {
  return (
    <table className="transaction-history">
      <thead>
      {items
          .filter((items, id) => id === 0)
          .map((item) => (
        <tr className="transaction" key={item.id}>
          <th className="transaction-column">{Object.keys(item)[1]}</th>
          <th className="transaction-column">{Object.keys(item)[2]}</th>
          <th className="transaction-columnTwo">{Object.keys(item)[3]}</th>
        </tr>
          ))}
      </thead>

      <tbody>
        {items 
          .filter((items, id) => id === 0)
          .map((item) => (
            <tr className="transaction" key={item.id}>
              <td className="transaction-line">{item.type}</td>
              <td className="transaction-line">{item.amount}</td>
              <td className="transaction-line">{item.currency}</td>
            </tr>
          ))}
        {items
          .filter((items, id) => id === 1)
          .map((item) => (
            <tr className="transaction" key={item.id}>
              <td className="transaction-lineTwo">{item.type}</td>
              <td className="transaction-lineTwo">{item.amount}</td>
              <td className="transaction-lineTwo">{item.currency}</td>
            </tr>
          ))}
        {items
          .filter((items, id) => id === 4)
          .map((item) => (
            <tr className="transaction" key={item.id}>
              <td className="transaction-line">{item.type}</td>
              <td className="transaction-line">{item.amount}</td>
              <td className="transaction-line">{item.currency}</td>
            </tr>
          ))}
        {items
          .filter((items, id) => id === 2)
          .map((item) => (
            <tr className="transaction" key={item.id}>
              <td className="transaction-lineTwo">{item.type}</td>
              <td className="transaction-lineTwo">{item.amount}</td>
              <td className="transaction-lineTwo">{item.currency}</td>
            </tr>
          ))}
        {items
          .filter((items, id) => id === 9)
          .map((item) => (
            <tr className="transaction" key={item.id}>
              <td className="transaction-line">{item.type}</td>
              <td className="transaction-line">{item.amount}</td>
              <td className="transaction-line">{item.currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array 
}

export default TransactionHistory;
