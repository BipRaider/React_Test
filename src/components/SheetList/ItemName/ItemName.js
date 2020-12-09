import React, { useState, useEffect } from 'react';

function ItemName({ name }) {
  const [newName, setNewName] = useState(() => name);
  const [IsClick, setIsClick] = useState(false);

  function rename(e) {
    setNewName(e.target.value);
  }

  function isEnter(e) {
    if (e.code === 'Enter') {
      setIsClick(!IsClick);
    }
  }

  useEffect(() => {
    if (IsClick) document.addEventListener('keydown', e => isEnter(e));
    return () => document.removeEventListener('keydown', isEnter);
  }, [newName]);

  return (
    <>
      {IsClick ? (
        <input type="text" onChange={e => rename(e)} />
      ) : (
        <h3
          onClick={() => {
            setIsClick(!IsClick);
          }}>
          {newName}
        </h3>
      )}
    </>
  );
}

export default ItemName;
