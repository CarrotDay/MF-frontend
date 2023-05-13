import React from 'react';

export const getMoney = (amount) => {
  if (isNaN(amount)) {
    return "Không phải là một số";
  }

  let money = "";
  const amountStr = amount.toString();
  const decimalIndex = amountStr.indexOf('.');
  const integerPart = decimalIndex === -1 ? amountStr : amountStr.slice(0, decimalIndex);
  const integerDigits = integerPart.split('').reverse();

  for (let i = 0; i < integerDigits.length; i++) {
    if (i > 0 && i % 3 === 0) {
      money = '.' + money;
    }
    money = integerDigits[i] + money;
  }

  return money + " VNĐ";
};

const Money = ({money}) => {
  return (
    <>
      {getMoney(money)}
    </>
  );
};

export default Money;