import React, { useState, useEffect } from 'react';

import Sheet from '../Sheet';
import AddButton from '../AddButton';
import DeleteButton from '../DeleteButton';
import ItemName from '../ItemName';

import './SheetRight.css';

function SheetRight({ sectionId, sectionName, deleteSheetSection }) {
  const [countSheet, setCountSheet] = useState([]);

  const addSheet = () =>
    setCountSheet([
      ...countSheet,
      { id: Math.random(countSheet.length + 1), name: countSheet.length + 1 },
    ]);

  const deleteSheet = id =>
    setCountSheet(countSheet.filter(value => value.id !== id));

  return (
    <li className="sheetRightSection">
      <ItemName name={sectionName} />

      <div className="sheetRight-button">
        <AddButton addSheet={addSheet} text={'addSheet'} />
        <DeleteButton
          deleteSheet={deleteSheetSection}
          numberItem={sectionId}
          text={'DeleteSection'}
        />
      </div>

      <ul className="sheetRightSection">
        {countSheet.map(({ id, name }) => (
          <li className="sheetItem" key={id}>
            <Sheet numberItem={id} nameItem={name} deleteSheet={deleteSheet} />
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SheetRight;
