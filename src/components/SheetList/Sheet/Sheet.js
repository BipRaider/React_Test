import React from 'react';

import AddButton from '../AddButton';
import DeleteButton from '../DeleteButton';
import ItemName from '../ItemName';

import './Sheet.css';

function Sheet({ deleteSheet, addSheet, numberItem, nameItem }) {
  return (
    <>
      <div className="sheet">
        <ItemName name={nameItem} />

        <div className="sheet-button">
          <AddButton addSheet={addSheet} text={'addSheet'} />
          <DeleteButton
            deleteSheet={deleteSheet}
            numberItem={numberItem}
            text={'DeleteSheet'}
          />
        </div>
      </div>
    </>
  );
}

export default Sheet;
