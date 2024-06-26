// TransactionTable.jsx
import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: 'white', color: 'black' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid lightgray', borderRight: '1px solid lightgray', borderTop: '1px solid lightgray' }}>Date</th>
            <th style={{ padding: '10px', borderBottom: '1px solid lightgray', borderRight: '1px solid lightgray', borderTop: '1px solid lightgray' }}>Description</th>
            <th style={{ padding: '10px', borderBottom: '1px solid lightgray', borderRight: '1px solid lightgray', borderTop: '1px solid lightgray'}}>Category</th>
            <th style={{ padding: '10px', borderBottom: '1px solid lightgray', borderRight: '1px solid lightgray', borderTop: '1px solid lightgray'}}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} style={{ borderBottom: '1px solid lightgray' }}>
              <td style={{ padding: '10px', borderRight: '1px solid lightgray', textAlign:'center' }}>{transaction.date}</td>
              <td style={{ padding: '10px', borderRight: '1px solid lightgray', textAlign:'center' }}>{transaction.description}</td>
              <td style={{ padding: '10px', borderRight: '1px solid lightgray', textAlign:'center' }}>{transaction.category}</td>
              <td style={{ padding: '10px', borderRight: '1px solid lightgray', textAlign:'center' }}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
