import React from 'react';

const TestThree = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const multuplyBy = 2;
  return (
    <div>
      <ul>
        <li className="colaNaDireita">
          {numbers.map(number => {
            return <li>{number * multuplyBy}</li>;
          })}
        </li>
      </ul>
    </div>
  );
};
export default TestThree;
