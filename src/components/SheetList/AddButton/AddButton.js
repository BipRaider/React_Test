import React from 'react';
/**
 * @param  {} {addSheet
 * @param  {} text}
 */
function AddButton({ addSheet, text }) {
  return (
    <>
      {addSheet && (
        <button className="button" onClick={() => addSheet()}>
          {text}
        </button>
      )}
    </>
  );
}

export default AddButton;
