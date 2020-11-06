import React from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 }
];

function App () {
  return (
    <div className='App'>
      <table>
      <thead>
        <td>
        <th>{initialProductList.name}</th>
        </td>
      </thead>
      </table>
    </div>
  );
}

export default App;
