import React, { useState } from 'react';

import SheetListRight from './SheetRight';
import AddButton from './AddButton';

import './SheetList.css';

function SheetList() {
  const [countSheet, setCountSheet] = useState([]);

  const addSheetSection = () =>
    setCountSheet([
      ...countSheet,
      { id: Math.random(countSheet.length + 1), name: countSheet.length + 1 },
    ]);

  const deleteSheet = id =>
    setCountSheet(countSheet.filter(value => value.id !== id));

  return (
    <section className="sheetList">
      <div className="sheetList-button">
        <AddButton addSheet={addSheetSection} text={'addSheetSection'} />
      </div>

      <ul>
        {countSheet.map(({ id, name }) => (
          <SheetListRight
            key={id}
            sectionId={id}
            sectionName={name}
            deleteSheetSection={deleteSheet}
          />
        ))}
      </ul>
    </section>
  );
}

export default SheetList;
