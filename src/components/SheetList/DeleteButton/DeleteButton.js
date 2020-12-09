import React from 'react';

function DeleteButton({ deleteSheet, numberItem, text }) {
  return (
    <>
      <button className="button" onClick={() => deleteSheet(numberItem)}>
        {text}
      </button>
    </>
  );
}

export default DeleteButton;
