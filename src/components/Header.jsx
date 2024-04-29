// Header.jsx
import React from 'react';

const Header = ({ bankName }) => {
  return (
    <header style={{ backgroundColor: 'royalblue', color: 'white', padding: '20px' }}>
      <h1>{bankName}</h1>
    </header>
  );
};

export default Header;
