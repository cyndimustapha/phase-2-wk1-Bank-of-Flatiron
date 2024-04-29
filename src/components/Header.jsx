// Header.jsx
import React from 'react';

const Header = ({ bankName }) => {
  return (
    <header style={{ backgroundColor: 'darkblue', color: 'white', marginBottom: '10px', padding: '20px', textAlign: "center" }}>
      <h1>{bankName}</h1>
    </header>
  );
};

export default Header;
