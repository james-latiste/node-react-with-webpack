import React from 'react';
import data from '../model/user.json';

const newdata = data
  .filter((prop) => prop.id === '0')
  .map((data) => {
    return (
      <>
        <div>Balance: {data.balance}</div>
        <div>Point: {data.point}</div>
        <div>Bonus: {data.bonus}</div>
      </>
    );
  });

export default function Header() {
  return newdata;
}
